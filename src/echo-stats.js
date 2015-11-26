define(function(require) {
    "use strict";

    var Echo = require("echo");

    function create(appName, counterName) {

        var echo = initEcho(appName);
        var numBtnClicks = 0;

        // Send the initial View event for the game "page".
        // (Subsequent calls to logAction are for events occurring while on
        // this page.):
        echo.viewEvent(counterName);


        function buttonClicked(event) {
            numBtnClicks++;
            logAction("button_click", event.srcElement.innerHTML, {"num_btn_clicks": numBtnClicks})
        }

        function logAction(actionName, actionType, additionalLabels) {
            additionalLabels = additionalLabels || {};
            echo.userActionEvent(actionType, actionName, additionalLabels);
        }

        return {
            buttonClicked: buttonClicked
        };
    }

    function initEcho(appName) {
        var EchoClient = Echo.EchoClient,   // Echo Client class
            Enums = Echo.Enums,             // Enums
            ConfigKeys = Echo.ConfigKeys;   // Key names to use in config

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
            // Call this method if the user has opted out of (performance) cookies
            echo.optOutOfCookies();
        }

        return echo;
    }


    return {
    	create: create
    };
});