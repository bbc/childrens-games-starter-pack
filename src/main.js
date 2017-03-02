define(['gmi-platform', 'storage', 'brim'], function(gmi_platform, storage, brim) {
	"use strict";

    addStylesheet();

    // create a gmi object using getGMI. If window.getGMI has already been defined i.e we have already got the gmi
    // library from the server, then this will be used over the local one
    var gmi = gmi_platform.getGMI();
    var numberOfStatsButtonClicks = 0;

    // ----- Set up container for the example --------

	var container = document.getElementById(gmi.gameContainerId);
    var inner = document.createElement("div");
    inner.id = "inner";
    container.appendChild(inner);

	// --------- Allow Debugging ---------

	window.gameSettings = { debugEnable: true };

    // --------- Brim Usage Example ---------

    var brimElement = null;

    if (!brimElement) {
        brimElement = brim.create(gmi.gameContainerId, "This text will be displayed when Brim appears");
    }

	// ---------- GMI Stats Example----------

    appendTitle("GMI Stats Example");
	appendSpan("Open ");
	appendLink("iStats Chrome Extension", "https://chrome.google.com/webstore/detail/dax-istats-log/jgkkagdpkhpdpddcegfcahbakhefbbga");
	appendSpan(" or see network calls prefixed with 'sa.bbc.co.uk' and" + " click the button to fire a stat.");
	appendSpacer();
	appendBtn("Log Action Event (Button Clicked)", function(event) {
        numberOfStatsButtonClicks++;
        gmi.sendStatsEvent("button_click", event.target.innerHTML, {"num_btn_clicks": numberOfStatsButtonClicks});
    });
	appendHorizontalRule();


	// ---------- GMI Storage Example----------

	appendTitle("GMI Storage Example");
    var outputText = document.createElement("pre");
    outputText.id = "save-load-text";
	inner.appendChild(outputText);
    appendBtn("Save", function() { storage.onSaveButton(gmi, outputText); });
	appendBtn("Load", function() { storage.onLoadButton(gmi, outputText); });
    appendHorizontalRule();


    // --------- GMI Set Mute Example ---------

    appendTitle("GMI Mute Example");
    appendSpan("Game muted value: ");
    inner.appendChild(createMuteLabel());
	appendSpacer();
	appendBtn("Toggle mute", function() {
        gmi.setMuted(!gmi.getAllSettings().muted);
        document.getElementById("mute-label").innerHTML = gmi.getAllSettings().muted;
    });
    appendHorizontalRule();


    // ---------- GMI Exit Example -----------
    appendTitle("GMI Exit Example");
    appendBtn("Exit game", function() { gmi.exit(); });
    appendHorizontalRule();

    // ---------- GMI Debug Example ----------

    appendTitle("GMI Debug Example");
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
        link.href = 'style.css';
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
		var div = document.createElement("div");
		var title = document.createElement("h3");
		title.innerHTML = titleStr;
		div.appendChild(title);
		inner.appendChild(div);
	}

	function appendParagraph(text) {
		var paragraph = document.createElement("p");
		paragraph.innerHTML = text;
		inner.appendChild(paragraph);
	}

    function appendSpan(text) {
		var span = document.createElement("span");
		span.innerHTML = text;
		inner.appendChild(span);
	}

	function appendLink(linkText, link) {
		var a = document.createElement('a');
		a.innerHTML = linkText;
		a.href = link;
		inner.appendChild(a);
	}

	function appendBtn(label, onClick) {
		var btn = document.createElement("button");
		btn.innerHTML = label;
		btn.onclick = onClick;
		inner.appendChild(btn);
	}

    function appendTextInput(elementID) {
        var input = document.createElement("input");
        input.type = "text";
        input.id = elementID;
        inner.appendChild(input);
    }

	function createMuteLabel() {
		var muteLabel = document.createElement("span");
	    muteLabel.innerHTML = gmi.getAllSettings().muted;
		muteLabel.id = "mute-label";
		return muteLabel;
	}

});
