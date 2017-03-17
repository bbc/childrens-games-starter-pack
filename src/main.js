define(['gmi-platform', 'storage', 'brim'], function(gmi_platform, storage, brim) {
	"use strict";

    // create a gmi object using getGMI. If window.getGMI has already been defined i.e we have already got the gmi
    // library from the server, then this will be used over the local one
    var gmi = gmi_platform.getGMI();
    var numberOfStatsButtonClicks = 0;

	var container = document.getElementById(gmi.gameContainerId);
	setContainerStyles(container);

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
	appendBtn("Save", function() { storage.onSaveButton(gmi, outputText); });
	appendBtn("Load", function() { storage.onLoadButton(gmi, outputText); });
	container.appendChild(outputText);
    appendHorizontalRule();


    // --------- GMI Set Mute Example ---------

    appendTitle("GMI Mute Example");
    appendSpan("Game muted value: ");
    container.appendChild(createMuteLabel());
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
    appendHorizontalRule();

    // --------- Call Settings Function --------------

    appendTitle("Show Settings");
    var settingsLabel = document.createElement("span");
    settingsLabel.innerHTML = "";
    settingsLabel.id = "settings-label";
    container.appendChild(settingsLabel);
    appendBtn("Settings", function() {
      gmi.showSettings();
      document.getElementById("settings-label").innerHTML = "Show Settings Function Called";
    });
    appendHorizontalRule();


	// ---------- Notify App That Game Has Loaded And Send Stats ----------

	gmi.gameLoaded();
	gmi.sendStatsEvent('game_loaded', true, {});


	// ---------- Helper Functions ----------

	function setContainerStyles(container) {
		container.style.color = "white";
		container.style.backgroundColor = "#606875";
		container.style.font = "16px arial, sans-serif";
		container.style.width = "50%";
		container.style.margin = "20px auto";
		container.style.padding = "20px";
		container.style.border = "3px solid #aaf9ff";
	}

	function appendHorizontalRule() {
		var hr = document.createElement("hr");
		container.appendChild(hr);
	}

	function appendSpacer() {
		var div = document.createElement("div");
		container.appendChild(div);
	}

	function appendTitle(titleStr) {
		var div = document.createElement("div");
		var title = document.createElement("h3");
		title.innerHTML = titleStr;
		title.style.font = "25px normal arial, sans-serif";
		title.style.margin = "5px 0";
		title.style.padding = "5px 0";
		div.appendChild(title);
		container.appendChild(div);
	}

	function appendParagraph(text) {
		var paragraph = document.createElement("p");
		paragraph.innerHTML = text;
		paragraph.style.padding = "5px 0";
		container.appendChild(paragraph);
	}

    function appendSpan(text) {
		var span = document.createElement("span");
		span.innerHTML = text;
		container.appendChild(span);
	}

	function appendLink(linkText, link) {
		var a = document.createElement('a');
		a.innerHTML = linkText;
		a.href = link;
		a.style.color = "#aaf9ff";
		container.appendChild(a);
	}

	function appendBtn(label, onClick) {
		var btn = document.createElement("button");
		btn.innerHTML = label;
		btn.onclick = onClick;
		btn.style.appearance = "button";
		btn.style.display = "inline-block";
		btn.style.font = "14px bold arial, sans-serif";
		btn.style.margin = "10px 10px 10px 0";
		btn.style.padding = "10px";
		container.appendChild(btn);
	}

    function appendTextInput(elementID) {
        var input = document.createElement("input");
        input.type = "text";
        input.id = elementID;
		input.style.font = "14px bold arial, sans-serif";
		input.style.padding = "10px";
        container.appendChild(input);
    }

	function createMuteLabel() {
		var muteLabel = document.createElement("span");
	    muteLabel.innerHTML = gmi.getAllSettings().muted;
	    muteLabel.style.font = "22px normal arial, sans-serif";
		muteLabel.style.color = "#aaf9ff";
		muteLabel.id = "mute-label";
		return muteLabel;
	}

});
