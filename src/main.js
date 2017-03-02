define(['gmi-platform', 'storage', 'brim'], function(gmi_platform, storage, brim) {
	"use strict";

    // create a gmi object using getGMI. If window.getGMI has already been defined i.e we have already got the gmi
    // library from the server, then this will be used over the local one
    var gmi = gmi_platform.getGMI();
    var numberOfStatsButtonClicks = 0;

	var container = document.getElementById(gmi.gameContainerId);
	container.style.color = "white";

    // --------- Debug Mode Example ---------

    appendTitle("Is Debug Mode Enabled?");
    if (gmi.isDebugMode) {
        appendSpan("True");
    } 
    else {
        appendSpan("False");
    }
    appendHorizontalRule();

    // --------- Brim Usage Example ---------

    var brimElement = null;

    if (!brimElement) {
        brimElement = brim.create(gmi.gameContainerId, "This text will be displayed when Brim appears");
    };

	// ---------- GMI Stats Example----------

    appendTitle("GMI Stats Example");
	appendSpan("Open");
	appendLink(" iStats Chrome Extension", "https://chrome.google.com/webstore/detail/dax-istats-log/jgkkagdpkhpdpddcegfcahbakhefbbga");
	appendSpan(" or see network calls prefixed with 'sa.bbc.co.uk' and" +
		" click the button to fire a stat");
	appendBtn("Log Action Event (Button Clicked)", function(event) {
        numberOfStatsButtonClicks++;
        gmi.sendStatsEvent("button_click", event.originalTarget.innerHTML, {"num_btn_clicks": numberOfStatsButtonClicks});
    });
	appendHorizontalRule();


	// ---------- GMI Storage Example----------

	appendTitle("GMI Storage Example");
    var outputText = document.createElement("pre");
    outputText.id = "save-load-text";
	appendBtn("Save", function() { storage.onSaveButton(gmi, outputText); });
	appendBtn("Load", function() { storage.onLoadButton(gmi, outputText); });
	container.appendChild(outputText);
    appendHorizontalRule();


    // ---------- GMI Set mute ----------
    appendTitle("GMI Mute Example");
    appendSpan("Game muted value: ");
	var muteLabel = document.createElement("span");
    muteLabel.innerHTML = gmi.getAllSettings().muted;
    muteLabel.id = "mute-label";
    container.appendChild(muteLabel);
	appendBtn("Toggle mute", function() {
        gmi.setMuted(!gmi.getAllSettings().muted);
        document.getElementById("mute-label").innerHTML = gmi.getAllSettings().muted;
    });
    appendHorizontalRule();


    // ---------- GMI Exit ----------
    appendTitle("GMI Exit Example");
    appendBtn("Exit game", function() { gmi.exit(); });
    appendHorizontalRule();

    // ---------- GMI Debug ----------
    appendTitle("GMI Debug Example");
    appendParagraph("The message input in the box below will be sent to gmi.debug when the submit button is hit");
    appendTextInput("debug-input");
    appendBtn("Submit", function() { gmi.debug(document.getElementById("debug-input").value); });


	// ---------- Helper Functions ----------
	function appendHorizontalRule() {
		var hr = document.createElement("hr");
		container.appendChild(hr);
	}

	function appendTitle(titleStr) {
		var div = document.createElement("div");
		var title = document.createElement("h3");
		title.innerHTML = titleStr;
		title.style.fontSize = "150%";
		div.appendChild(title);
		container.appendChild(div);
	}

	function appendParagraph(text) {
		var paragraph = document.createElement("p");
		paragraph.innerHTML = text;
		container.appendChild(paragraph);
	}

    function appendSpan(text) {
		var span = document.createElement("span");
		span.innerHTML = text;
		container.appendChild(span);
	}

	function appendLink(linkText, link) {
		var a = document.createElement('a');
		a.innerHTML =linkText;
		a.href = link;
		a.style.color = "white";
		container.appendChild(a);
	}

	function appendBtn(label, onClick) {
		var div = document.createElement("div");
		var btn = document.createElement("button");
		btn.innerHTML = label;
		btn.onclick = onClick;
		div.appendChild(btn);
		container.appendChild(div);
	}

    function appendTextInput(elementID) {
        var input = document.createElement("input");
        input.type = "text";
        input.id = elementID;
        container.appendChild(input);
    }
});