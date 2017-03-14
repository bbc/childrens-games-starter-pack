define(['gmi-platform', 'storage', 'brim'], function(gmi_platform, storage, brim) {
	"use strict";

    // create a gmi object using getGMI. If window.getGMI has already been defined i.e we have already got the gmi
    // library from the server, then this will be used over the local one
    var gmi = gmi_platform.getGMI();
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

	// --------- Allow Debugging ---------

	window.gameSettings = { debugEnabled: true };

    // --------- Brim Usage Example ---------

    brim.create(gmi.gameContainerId, "This text will be displayed when Brim appears");

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


    // --------- GMI Set Mute Example ---------

    appendSubtitle("GMI Mute Example");
    var muteParagraph = appendParagraph();

    appendSpan("Game muted value: ", muteParagraph);
    muteParagraph.appendChild(createMuteLabel());
	appendSpacer();
	appendBtn("Toggle mute", function() {
        gmi.setMuted(!gmi.getAllSettings().muted);
        document.getElementById("mute-label").innerHTML = gmi.getAllSettings().muted;
    });
    appendHorizontalRule();


    // ---------- GMI Exit Example -----------
    appendSubtitle("GMI Exit Example");
    appendBtn("Exit game", function() { gmi.exit(); });
    appendHorizontalRule();

    // ---------- GMI Debug Example ----------

    appendSubtitle("GMI Debug Example");
    appendParagraph("The message input in the box below will be sent to gmi.debug when the submit button is hit.");
    appendTextInput("debug-input");
	appendSpacer();
    appendBtn("Submit", function() { gmi.debug(document.getElementById("debug-input").value); });


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
        wrapper.appendChild(bbcLogo);
		title.innerHTML = titleStr;
		wrapper.appendChild(title);
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

    function inputOnlick(event) {
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
        input.onclick = inputOnlick;
        input.onblur = inputOnBlur;
        inner.appendChild(input);
    }

	function createMuteLabel() {
		var muteLabel = document.createElement("span");
	    muteLabel.innerHTML = gmi.getAllSettings().muted;
		muteLabel.id = "mute-label";
		return muteLabel;
	}

});
