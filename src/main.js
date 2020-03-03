define(["achievements", "storage", "websockets", "account/morph-props"], function(achievements, storage, ws, props) {
    "use strict";



    // --------- Settings ---------
    var settingsConfig = {
        pages: [
            {
                title: "General",
                settings: [
                    {
                        key: "audio",
                        title: "Audio",
                        description: "Turn off/on sound and music"
                    },
                    {
                        key: "motion",
                        title: "Motion",
                        description: "Turn off/on motion"
                    },
                    {
                        key: "subtitles",
                        title: "Subtitles",
                        description: "Turn off/on subtitles"
                    }
                ]
            },
            {
                title: "Game Specific Settings",
                settings: [
                    {
                        key: "colourblind",
                        title: "Colour blind mode",
                        description: "Turn on contrast for colour blind mode"
                    },
                    {
                        key: "hard",
                        title: "Hard mode",
                        description: "More baddies and less health"
                    },
                    {
                        key: "shadows",
                        title: "Shadows",
                        description: "Turn off shadows in game"
                    },
                    {
                        key: "onebutton",
                        title: "One Button Mode",
                        description: "Turn on single button gameplay mode"
                    }
                ]
            }
        ]
    };

    // Create a gmi object using getGMI.
    var gmi = window.getGMI({settingsConfig: settingsConfig});
    addStylesheet();

    // ----- Set up container for the example --------

    var container = document.getElementById(gmi.gameContainerId);
    var wrapper = document.createElement("div");
    var inner = document.createElement("div");
    wrapper.className = "wrapper";
    wrapper.tabIndex = -1;
    inner.className = "inner";
    appendTitle("Games Messaging Interface Examples");
    container.appendChild(wrapper);
    wrapper.appendChild(inner);

    // --------- Debug Mode Example ---------

    appendSubtitle("Is Debug Mode Enabled?");
    gmi.isDebugMode ? appendSpan("True") : appendSpan("False");
    appendHorizontalRule();

    // --------- Allow Debugging ---------

    window.gameSettings = { debugEnabled: true };

    // ---------- GMI Stats Examples----------
    appendSubtitle("GMI Stats Examples");
    appendParagraph("Stats are handled by the GMI using a combination of setStatsScreen for screen/location changes and sendStatsEvent for user actions.")

    var gmiStatsParagraph = appendParagraph();

    appendSpan("Open the ", gmiStatsParagraph);
    appendLink("AT Internet Tag Inspector Chrome Extension", "https://chrome.google.com/webstore/detail/at-internet-tag-inspector/epdfbeoiphkaeapcohmilhmpdeilgnok?hl=en", gmiStatsParagraph);

    // setStatsScreen
    appendH3("setStatsScreen");
    appendParagraph("The stats screen denotes the player changing location in the game.", gmiStatsParagraph);
    appendParagraph(" Click the \"Log sendStatsScreen\" button to fire setStatsScreen using the below input for <em>screenName</em> (local builds will log to the browser console)");

    const setStatsScreenInput = appendTextInput("stats-input", "gamename");
    appendSpacer();

    appendBtn("Log setStatsScreen", () => {
        gmi.setStatsScreen(setStatsScreenInput.value);
    });

    // setstatsEvent
    appendH3("sendStatsEvent");

    appendParagraph(" Click the \"Log sendStatsEvent\" button to fire sendStatsEvent with name set to " +
        "<em>action_name</em>, type set to <em>action_type</em> and params set to the json below. (local builds will log to the browser console)");

    appendTextArea("stats-params", "{\"metadata\":\"SBL=2~XPL=3~GSI=123456789~LAU=First\",\"source\":\"Level ID\"}");
    appendSpacer();
    appendBtn("Log sendStatsEvent", () => {

        var params = JSON.parse(document.getElementById("stats-params").value);

        gmi.sendStatsEvent("action_name", "action_type", params);
    });

    appendHorizontalRule();

    // ---------- GMI Storage Example----------

    appendSubtitle("GMI Storage Example");
    var outputText = document.createElement("pre");
    outputText.id = "save-load-text";
    inner.appendChild(outputText);
    appendSpacer();
    appendBtn("Save", function() { storage.onSaveButton(gmi, outputText); });
    appendBtn("Load", function() { storage.onLoadButton(gmi, outputText); });
    appendHorizontalRule();

    // ---------- GMI Achievements Examples ---------
    var achievementsData = [
        {
            key: "achievement0",
            name: "Starter pack #0",
            description: "Completed the first test! Top position",
            points: 100,
            position: "top",
        },
        {
            key: "achievement1",
            name: "Starter pack #1",
            description: "Achievement with progress! Bottom position",
            maxProgress: 10,
            points: 100,
        },
        {
            key: "achievement2",
            name: "Starter pack #2",
            description: "Achievement that is already completed!",
            points: 100,
        },
    ];

    appendSubtitle("GMI Achievements Example");
    appendParagraph("Experimental functions for testing achievements (internal use)</br></br>");
    appendSpacer();

    var achievementEles = [];

    achievements.init(gmi, achievementsData);

    achievementsData.forEach((achievement, idx) => {
        var outputElement = achievementEles[idx];
        var id = "achievement" + idx;
        var container = document.createElement("div");
        outputElement = document.createElement("pre");
        container.style.display = "inline-block";
        container.appendChild(outputElement);
        outputElement.id = id;
        achievement.idx = idx;
        appendBtn("Progress #"+idx, function() { achievements.onAchieveButton(gmi, achievement, outputElement); }, id, container);
        inner.appendChild(container);
    })
    appendSpacer();
    appendHorizontalRule();

    appendBtn("Achievements", function() { achievements.onShow(gmi); });
    var achievementUnseen = document.createElement("pre");
    achievementUnseen.id = "achievement-status";
    inner.appendChild(achievementUnseen);
    appendSpacer();
    appendHorizontalRule();

    // ---------- GMI Account Examples ---------
    appendSubtitle("GMI Account Examples");

    const makeAccountButton = (label, accountFunction, element, ...args) => {
        appendBtn(label, function() {
            accountFunction(args)
                .then(response => {
                    element.innerHTML = `Response: ${JSON.stringify(response)}`;
                })
                .catch(err => {
                    element.innerHTML = `Error: ${err}`;
                });
        });
    };

    var statusResult = appendParagraph("");
    makeAccountButton("Status", () => { return gmi.account.status(); }, statusResult);
    appendSpacer();
    appendHorizontalRule();

    var registerResult = appendParagraph("");
    makeAccountButton("Register", () => { return gmi.account.register(); }, registerResult);
    appendSpacer();
    appendHorizontalRule();

    var signInResult = appendParagraph("");
    makeAccountButton("Sign-in", () => { return gmi.account.signIn(); }, signInResult);
    appendSpacer();
    appendHorizontalRule();

    var signOutResult = appendParagraph("");
    makeAccountButton("Sign-out", () => { return gmi.account.signOut(); }, signOutResult);
    appendSpacer();
    appendHorizontalRule();

    var authoriseResult = appendParagraph("");

    const authoriseState = appendTextInput("auth-state", "", "state");
    appendSpacer();

    makeAccountButton("Authorise",
        () => {
            return gmi.account.authorise(authoriseState.value);
        },
        authoriseResult
    );
    appendSpacer();
    appendHorizontalRule();

    // --------- GMI Set Audio Example ---------

    appendSubtitle("GMI Audio Example");
    var audioParagraph = appendParagraph();

    appendSpan("Game audio value: ", audioParagraph);
    audioParagraph.appendChild(createAudioLabel());

    appendSpacer();
    appendBtn("Toggle audio", function() {
        gmi.setAudio(!gmi.getAllSettings().audio);
        document.getElementById("audio-label").innerHTML = gmi.getAllSettings().audio;
    });
    appendHorizontalRule();

    // --------- GMI Play Audio Example ---------

    var audioCtx = new (window.AudioContext || window.webkitAudioContext)();    
    var mp3Buffer;
    var oggBuffer;
    var mp4Buffer;

    function requestAudio(url, cbBuffer) {
        var request = new XMLHttpRequest();
        request.open("GET", gmi.gameDir + url, true);

        request.responseType = "arraybuffer"; 

        request.onload = function() {
            audioCtx.decodeAudioData(
                request.response,
                function(buffer) {
                    cbBuffer(buffer);
                }
            );
        };
        request.send();
    }

    function createSource(audioBuffer) {
        var source = audioCtx.createBufferSource();
        source.connect(audioCtx.destination);
        source.buffer = audioBuffer;
        source.loop = false;
        source.start = (source.start || source.noteOn);
        return source;
    }
    
    requestAudio('assets/game_button.mp3', function(buffer) {
        mp3Buffer = buffer;
    });
    requestAudio('assets/game_button.ogg', function(buffer) {
        oggBuffer = buffer;
    });
    requestAudio('assets/game_button.mp4', function(buffer) {
        mp4Buffer = buffer;
    });

    appendSubtitle("Audio Format Test");
    var audioParagraph = appendParagraph();
    appendBtn("Play MP3 audio", function() {
        var audio = createSource(mp3Buffer);
        audio.start(0);
    });

    appendBtn("Play OGG audio", function() {
        var audio = createSource(oggBuffer);
        audio.start(0);
    });

    appendBtn("Play MP4 audio", function() {
        var audio = createSource(mp4Buffer);
        audio.start(0);
    });

    appendHorizontalRule();

    // ---------- GMI Exit Example -----------
    appendSubtitle("GMI Exit Example");
    if (gmi.shouldShowExitButton) {
        appendBtn("Exit game", function() { gmi.exit(); });
    }
    else {
        appendParagraph("Exit button not shown<br>gmi.shouldShowExitButton is false.");
    }
    appendHorizontalRule();

    // ---------- GMI Debug Example ----------

    appendSubtitle("GMI Debug Example");
    appendParagraph("The message input in the box below will be sent to gmi.debug when the submit button is hit.");
    appendTextInput("debug-input");
    appendSpacer();
    appendBtn("Submit", function() { gmi.debug(document.getElementById("debug-input").value); });
    appendHorizontalRule();


    // --------- Prompt Button --------------

    appendSubtitle("Prompt Button");
    appendBtn("Trigger Prompt", function() {
      gmi.showPrompt(resumeGame);
    });
    var promptParagraph = appendParagraph();
    appendHorizontalRule();

    function resumeGame() {
      appendSpan("There are no prompts for this platform, resuming game... ", promptParagraph);
    }

    // --------- Call Settings Function --------------

    appendSubtitle("Show Settings");

    appendBtn("Show Settings", function() {
        var showSettings = gmi.showSettings(onSettingChanged, onSettingsClosed);
        appendSpan("Settings screen requested...", settingsParagraph);
        // handle fallback - for when centralised settings modal cannot be found
        if (!showSettings) {
            appendSpan("settings screen not provided by this host. Trigger internal one here. ", settingsParagraph);
        }
        //disable all buttons and links in the background so they cannot be tabbed to while settings modal is open
        disableBackgroundElements(true);
    }, "settings-button");
    var settingsParagraph = appendParagraph();

    appendHorizontalRule();

    function onSettingsClosed() {
        appendSpan("onSettingsClosed has been called", settingsParagraph);
        //re-enable all buttons and links so they can be tabbed again
        disableBackgroundElements(false);
        //focus back to the element that opened the settings for accessibility purposes
        document.getElementsByClassName("settings-button")[0].focus();
    }

    function onSettingChanged(key, value) {
        if (key === "audio") {
            gmi.setAudio(gmi.getAllSettings().audio);
            document.getElementById("audio-label").innerHTML = gmi.getAllSettings().audio;
            appendSpan("Audio setting toggled. ", settingsParagraph);
        }
        else if (key === "motion") {
            gmi.setMotion(gmi.getAllSettings().motion);
            appendSpan("Motion setting toggled. ", settingsParagraph);
        }
        else if (key === "subtitles") {
            gmi.setSubtitles(gmi.getAllSettings().subtitles);
            appendSpan("Subtitles setting toggled. ", settingsParagraph);
        }
        else if (key === "colourblind") {
            // The chosen value will already have been persisted, and
            // will be available as gmi.getAllSettings().gameData.colourblind
            appendSpan("Colour blind mode toggled.", settingsParagraph);
        }
        else if (key === "hard") {
            // The chosen value will already have been persisted, and
            // will be available as gmi.getAllSettings().gameData.hard
            appendSpan("Difficulty has been set to ", settingsParagraph);
            if (value) {
                appendSpan("Hard. ", settingsParagraph);
            }
            else {
                appendSpan("Normal. ", settingsParagraph);
            }
        }
        else if (key === "shadows") {
            // The chosen value will already have been persisted, and
            // will be available as gmi.getAllSettings().gameData.shadows
            appendSpan("Shadows toggled.", settingsParagraph);
        }
        else if (key === "onebutton") {
            // The chosen value will already have been persisted, and
            // will be available as gmi.getAllSettings().gameData.onebutton
            appendSpan("One Button Mode toggled.", settingsParagraph);
        }
    }

    // ---------- Notify App That Game Has Loaded And Send Stats ----------

    gmi.gameLoaded();
    gmi.sendStatsEvent('game_loaded', true, {});

    // ---------- Web Sockets Example ----------

    appendSubtitle("Web Sockets Test");
    appendParagraph("This input box lets us send a message to the websocket.org test servers. If successful we'll receive a response with the same message.");
    appendTextInput("websocket-input");
    appendSpacer();

    appendTextArea("ws-terminal", "Websocket updates will appear here...");
    appendSpacer();

    appendBtn("Connect", function() {
        ws.connect(setConnectionStateOnButtons);
    },"ws-connect");

    appendBtn("Disconnect", function() {
        ws.disconnect();
    },"ws-disconnect");

    appendBtn("Send String", function() {
        ws.sendString(document.getElementById("websocket-input").value);
    },"ws-sendString");

    appendBtn("Send ArrayBuffer", function() {
        ws.sendArrayBuffer(document.getElementById("websocket-input").value);
    },"ws-sendArrayBuffer");

    setConnectionStateOnButtons(false);

    appendHorizontalRule();


    // ---------- Helper Functions ----------

    function setConnectionStateOnButtons(connectionState) {
        document.getElementsByClassName("ws-connect")[0].disabled = connectionState;
        document.getElementsByClassName("ws-disconnect")[0].disabled = !connectionState;
        document.getElementsByClassName("ws-sendString")[0].disabled = !connectionState;
        document.getElementsByClassName("ws-sendArrayBuffer")[0].disabled = !connectionState;
    }

    function addStylesheet() {
        var link  = document.createElement('link');
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = gmi.gameDir + 'style.css';
        link.media = 'all';
        document.getElementsByTagName('head')[0].appendChild(link);
    }

    function appendHorizontalRule() {
        var hr = document.createElement("hr");
        inner.appendChild(hr);
    }

    function appendSpacer() {
        var div = document.createElement("div");
        inner.appendChild(div);
    }

    function appendTitle(titleStr) {
        var bbcLogo = document.createElement("img");
        var title = document.createElement("h1");
        bbcLogo.src = gmi.gameDir + "bbc-blocks-dark.png";
        bbcLogo.className = "bbc-logo";
        bbcLogo.alt = "BBC Logo";
        inner.appendChild(bbcLogo);
        title.innerHTML = titleStr;
        inner.appendChild(title);
    }

    function appendSubtitle(titleStr) {
        var title = document.createElement("h2");
        title.innerHTML = titleStr;
        inner.appendChild(title);
    }

    function appendH3(titleStr) {
        var title = document.createElement("h3");
        title.innerHTML = titleStr;
        inner.appendChild(title);
    }

    function appendParagraph(text) {
        var paragraph = document.createElement("p");
        paragraph.innerHTML = text || '';
        inner.appendChild(paragraph);
        return paragraph;
    }

    function appendSpan(text, div) {
        var span = document.createElement("span");
        span.innerHTML = text;
        if (div) {
            div.appendChild(span);
        }
        else {
            inner.appendChild(span);
        }
    }

    function appendLink(linkText, link, div) {
        var a = document.createElement('a');
        a.innerHTML = linkText;
        a.href = link;
        if (div) {
            div.appendChild(a);
        }
        else {
            inner.appendChild(a);
        }
    }

    function appendBtn(label, onClick, className, container = inner) {
        var btn = document.createElement("button");
        btn.className = className || "game-button";
        btn.innerHTML = label;
        btn.onclick = onClick;
        container.appendChild(btn);
    }

    function inputOnClick(event) {
        var inputEle = event.target;
        if (inputEle.value === 'Enter a message here') {
            inputEle.value = '';
            inputEle.className = 'strong-text';
        }
    }

    function inputOnBlur(event) {
        var inputEle = event.target;
        if (inputEle.value === '') {
            inputEle.value = '';
            inputEle.className = '';
        }
    }

    function appendTextInput(elementID, defaultValue = 'Enter input here', labelText) {
        var input = document.createElement("input");
        input.className = "dev-input";
        input.type = "text";
        input.id = elementID;
        input.value = defaultValue;
        input.onclick = inputOnClick;
        input.onblur = inputOnBlur;

        let childToAppend = input;

        if (labelText) {
            const label = document.createElement("label")
            label.innerHTML = labelText;
            label.appendChild(input);
            input.classList.add("in-label")
            childToAppend = label;
        }


        inner.appendChild(childToAppend);

        return input;
    }

    function appendTextArea(elementID, value) {
        var textarea = document.createElement("textarea");
        textarea.rows = 8;
        textarea.cols = 40;
        textarea.id = elementID;
        textarea.value = value;
        inner.appendChild(textarea);
        return textarea;
    }

    function createAudioLabel() {
        var audioLabel = document.createElement("span");
        audioLabel.innerHTML = gmi.getAllSettings().audio;
        audioLabel.id = "audio-label";
        return audioLabel;
    }


    function disableBackgroundElements(disable) {
        var gameHolder = document.getElementById("game-holder");
        var buttons = gameHolder.getElementsByTagName("button");
        var links = gameHolder.getElementsByTagName("a");
        var inputs = gameHolder.getElementsByTagName("input");
        // join the lists of elements and converts them to an array as getElementsByTagName returns an array-like object rather than an actual Array.
        var elements = [].concat.apply([], [[].slice.call(buttons), [].slice.call(links), [].slice.call(inputs)]);

        elements.forEach(function(element) {
            if (disable) {
                element.setAttribute("disabled", "true");
                element.setAttribute("tabindex", "-1");
                element.setAttribute("aria-hidden", "true");
            }
            else {
                element.removeAttribute("disabled");
                element.removeAttribute("tabindex");
                element.removeAttribute("aria-hidden");
            }
        });
    }

});
