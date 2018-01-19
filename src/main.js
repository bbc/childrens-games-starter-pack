define(['storage'], function(storage) {
    "use strict";
    
    // --------- Settings ---------
    var settingsConfig = {
        pages: [
            {
                title: "Global Settings",
                settings: [
                    {
                        key: "audio",
                        type: "toggle",
                        title: "Audio",
                        description: "Turn off/on sound and music"
                    },
                    {
                        key: "motion",
                        type: "toggle",
                        title: "Motion",
                        description: "Turn off/on motion"
                    },
                    {
                        key: "subtitles",
                        type: "toggle",
                        title: "Subtitles",
                        description: "Turn off/on subtitles"
                    }
                ]
            },
            {
                title: "Custom Settings",
                settings: [
                    {
                        key: "custom",
                        type: "toggle",
                        title: "Custom setting",
                        description: "You can define what you want this setting to be"
                    },
                    {
                        key: "colourblind",
                        type: "toggle",
                        title: "Colour blind mode",
                        description: "Turn on contrast for colour blind mode"
                    },
                    {
                        key: "easy",
                        type: "toggle",
                        title: "Easy mode",
                        description: "Less baddies and more health"
                    },
                    {
                        key: "hard",
                        type: "toggle",
                        title: "Hard mode",
                        description: "More baddies and less health"
                    }
                ]
            }
        ]
    };

    // Create a gmi object using getGMI.
    var gmi = window.getGMI({settingsConfig: settingsConfig});
    var numberOfStatsButtonClicks = 0;

    addStylesheet();

    // ----- Set up container for the example --------

    var container = document.getElementById(gmi.gameContainerId);
    var wrapper = document.createElement("div");
    var inner = document.createElement("div");
    wrapper.className = "wrapper";
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

    // ---------- GMI Stats Example----------

    appendSubtitle("GMI Stats Example");
    var gmiStatsParagraph = appendParagraph();

    appendSpan("Open ", gmiStatsParagraph);
    appendLink("iStats Chrome Extension", "https://chrome.google.com/webstore/detail/dax-istats-log/jgkkagdpkhpdpddcegfcahbakhefbbga", gmiStatsParagraph);
    appendSpan(" or see network calls prefixed with 'sa.bbc.co.uk' and" + " click the button to fire a stat.", gmiStatsParagraph);
    appendSpacer();
    appendBtn("Log Action Event (Button Clicked)", function(event) {
        numberOfStatsButtonClicks++;
        gmi.sendStatsEvent("button_click", event.target.innerHTML, {"num_btn_clicks": numberOfStatsButtonClicks});
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
      if (!showSettings) {
        appendSpan("settings screen not provided by this host. Trigger internal one here. ", settingsParagraph);
      }
    });
    var settingsParagraph = appendParagraph();
  
    appendHorizontalRule();

    function onSettingsClosed() {
      appendSpan("onSettingsClosed has been called", settingsParagraph);
    }

    function onSettingChanged(key, value) {
        if (key === "audio") {
            gmi.setAudio(gmi.getAllSettings().audio);
            document.getElementById("audio-label").innerHTML = gmi.getAllSettings().audio;
            // Toggle in game audio
            appendSpan("Audio setting toggled. ", settingsParagraph);
        }
        if (key === "hard") {
            // The chosen value will already have been persisted, and 
            // will be available as gmi.getAllSettings().gameData.hard
            appendSpan("Difficulty has been set to...", settingsParagraph);
            if (value) {
                appendSpan("Hard. ", settingsParagraph); //setHardMode
            }
            else {
                appendSpan("Easy. ", settingsParagraph); //setEasyMode
            }
        }
    }

    // ---------- Notify App That Game Has Loaded And Send Stats ----------

    gmi.gameLoaded();
    gmi.sendStatsEvent('game_loaded', true, {});


    // ---------- Helper Functions ----------

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

    function appendBtn(label, onClick) {
        var btn = document.createElement("button");
        btn.innerHTML = label;
        btn.onclick = onClick;
        inner.appendChild(btn);
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
            inputEle.value = 'Enter a message here';
            inputEle.className = '';
        }
    }

    function appendTextInput(elementID) {
        var input = document.createElement("input");
        input.type = "text";
        input.id = elementID;
        input.value = 'Enter a message here';
        input.onclick = inputOnClick;
        input.onblur = inputOnBlur;
        inner.appendChild(input);
    }

    function createAudioLabel() {
        var audioLabel = document.createElement("span");
        audioLabel.innerHTML = gmi.getAllSettings().audio;
        audioLabel.id = "audio-label";
        return audioLabel;
    }
});
