/*
 * Function which will return the correct GMI for web
 *
 */
define(function(require) {
    "use strict";

    var Echo = require("echo");

    function createEchoStats(appName, counterName, options) {
        var EchoClient = Echo.EchoClient,
            Enums = Echo.Enums,
            ConfigKeys = Echo.ConfigKeys;

        var env = window.og.environment;
        var echoConf = {};
        var istatsPath = (env === "live") ? "bbc" : env;
        echoConf[ConfigKeys.COMSCORE.URL] = 'http://sa.bbc.co.uk/bbc/' + istatsPath + '/s';
        echoConf[ConfigKeys.RUM.ENABLED] = false; // RUM has been discontinued so disabled it

        var echo = new EchoClient(
            appName,
            Enums.ApplicationType.WEB,
            echoConf);

        if (window.bbccookies && !window.bbccookies.isAllowed("ckpf_a_performance_cookie")) {
            echo.optOutOfCookies();
        }

        if (options && options.statsLabel) {
            echo.addLabel(options.statsLabel.name, options.statsLabel.value);
        }

        echo.viewEvent(counterName);

        return echo;
    }

    var getGMI = function (options) {
        var GMI = function () {
            var embedVars = window.og.embedVars;

            var appName = embedVars.statsAppName;
            var counterName = embedVars.statsCounterName;
            var gameId = window.og.gid;

            var containerId = window.og.gameContainerId;
            var url = window.og.gameUrl;
            var dir = window.og.gameDir;
            var env = window.og.environment;

            Object.defineProperty(GMI.prototype, 'embedVars', {
                get: function () {
                    return embedVars;
                }
            });

            Object.defineProperty(GMI.prototype, 'gameContainerId', {
                get: function () {
                    return containerId;
                }
            });

            Object.defineProperty(GMI.prototype, 'gameUrl', {
                get: function () {
                    return url;
                }
            });

            Object.defineProperty(GMI.prototype, 'gameDir', {
                get: function () {
                    return dir;
                }
            });

            Object.defineProperty(GMI.prototype, 'environment', {
                get: function () {
                    return env;
                }
            });

            Object.defineProperty(GMI.prototype, 'isDebugMode', {
                get: function () {
                    return !!embedVars.isDebugMode;
                }
            });

            Object.defineProperty(GMI.prototype, 'shouldShowExitButton', {
                get: function() {
                    return window.og.isFullScreen;
                }
            });

            Object.defineProperty(GMI.prototype, 'shouldDisplayMuteButton', {
                get: function() {
                    return true;
                }
            });

            Object.defineProperty(GMI.prototype, 'shouldLongPressForSettings', {
                get: function() {
                    return false;
                }
            });

            var GMI_LOCAL_STORAGE_KEY = "bbc_childrens_gmi_data";
            var GMI_GAME_STORAGE_KEY = GMI_LOCAL_STORAGE_KEY + "_" + gameId;

            var globalSettings = {
                muted: false,
                subtitles: false,
                motion: true
            };

            var gameSettings = {};

            this.stats = createEchoStats(appName, counterName, options);

            function areCookiesAllowed() {
                var bbccookies = window.bbccookies;
                return !bbccookies || bbccookies.isAllowed("ckps_whatever");
            }

            function parseLocalStorage(key) {
                try {
                    return JSON.parse(window.localStorage.getItem(key));
                }
                catch(e) {}
                return undefined;
            }

            function loadLocalData() {
                function getDefaultSettings() {
                    var defaults = {};
                    defaults.muted = false;
                    defaults.subtitles = false;
                    defaults.motion = true;
                    return defaults;
                }

                function ensureGlobalSettingsAreBools() {
                    globalSettings.muted = !!globalSettings.muted;
                    globalSettings.subtitles = !!globalSettings.subtitles;
                    globalSettings.motion = !globalSettings.hasOwnProperty("motion") || globalSettings.motion;
                }

                if (areCookiesAllowed()) {
                    globalSettings = parseLocalStorage(GMI_LOCAL_STORAGE_KEY) || getDefaultSettings();
                    ensureGlobalSettingsAreBools();
                    gameSettings = parseLocalStorage(GMI_GAME_STORAGE_KEY) || {};
                }
                else {
                    return getDefaultSettings();
                }
            }

            function saveGlobalSettings() {
                if (areCookiesAllowed()) {
                    try {
                        window.localStorage.setItem(GMI_LOCAL_STORAGE_KEY, JSON.stringify(globalSettings));
                    } catch (e) {}
                }
            }

            GMI.prototype.getAllSettings = function () {
                var settings = JSON.parse(JSON.stringify(globalSettings)); //Prevents reference assignment
                settings.audio = !settings.muted;
                if (areCookiesAllowed()) {
                    settings.gameData = gameSettings;
                }
                return settings;
            };

            GMI.prototype.setGameData = function (key, value) {
                if (areCookiesAllowed()) {
                    gameSettings[key] = value;
                    // In Safari Private browsing mode on OSX and iOS localStorage in read only, and will throw
                    // QuotaExceededError if an attempt to call setItem is made
                    try {
                        window.localStorage.setItem(GMI_GAME_STORAGE_KEY, JSON.stringify(gameSettings));
                    } catch (e) {}
                }
            };

            //Provides backwards compatibility for deprecated setMuted
            GMI.prototype.setMuted = function(state) {
                globalSettings.muted = !!state;
                saveGlobalSettings();
            }

            GMI.prototype.setAudio = function (state) {
                globalSettings.muted = !state;
                saveGlobalSettings();
            };

            GMI.prototype.setSubtitles = function (state) {
                globalSettings.subtitles = !!state;
                saveGlobalSettings();
            };

            GMI.prototype.setMotion = function (state) {
                globalSettings.motion = !!state;
                saveGlobalSettings();
            };

            GMI.prototype.showPrompt = function (resumeGame) {
                resumeGame();
                return false;
            };
          
            GMI.prototype.showSettings = function(onSettingChanged, onSettingsClosed) {
                return false;
            };

            GMI.prototype.sendStatsEvent = function (name, type, params) {
                this.stats.userActionEvent(type, name, params || {});
            };

            GMI.prototype.exit = function () {
                var url = window.og.exitGameUrl;
                window.open(url, "_top");
            };

            GMI.prototype.debug = function (message) {
                console.log(message);
            };

            GMI.prototype.gameLoaded = function() {
                
            };

            loadLocalData();
            GMI.prototype = Object.create(GMI.prototype);
        };

        var newGMI = new GMI();

        return newGMI;
    };

    var gmi_instance;

    return {
        getGMI: window.getGMI || function(options) {
            if (gmi_instance) {
                console.warn("Attempted to create multiple copies of the GMI. Only a single instance should be created");
            }
            gmi_instance = getGMI(options);
            return gmi_instance;
        }
    };
});
