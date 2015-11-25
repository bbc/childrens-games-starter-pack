define(['echo-stats', 'config'], function(echoStats, config) {
	"use strict";

	var container = document.getElementById(og.gameContainerId);
	container.style.color = "white";

	// ---------- Hello World ----------
	appendHelloWorld();
	appendHorizontalRule();


	// ---------- Echo Stats Example----------

	// create echo stats using values from external configuration
	var echoActions = echoStats.create(config.statsAppName, config.statsCounterName);

	appendTitle("Echo Stats Example");
	appendParagraph("Open");
	appendLink(" iStats Chrome Extension", "https://chrome.google.com/webstore/detail/dax-istats-log/jgkkagdpkhpdpddcegfcahbakhefbbga");
	appendParagraph(" or see network calls prefixed with 'sa.bbc.co.uk' and" +
		" click the button to fire a stat");
	appendBtn("Log Action Event (Button Clicked)", function(event) { echoActions.buttonClicked(event); });
	appendHorizontalRule();


	// ---------- Helper Funcs ----------
	function appendHorizontalRule() {
		var hr = document.createElement("hr");
		container.appendChild(hr);
	}

	function appendTitle(title) {
		var div = document.createElement("div");
		var titleEl = document.createTextNode(title);
		div.appendChild(titleEl);
		container.appendChild(div);
	}

	function appendParagraph(text) {
		var paragraph = document.createElement("span");
		paragraph.innerHTML = text;
		container.appendChild(paragraph)
	}

	function appendLink(linkText, link) {
		var a = document.createElement('a');
		a.innerHTML =linkText;
		a.href = link;
		container.appendChild(a);
	}

	function appendBtn(label, onClick) {
		var btnEl = document.createElement("BUTTON");
		btnEl.innerHTML = label;
		btnEl.onclick = onClick;
		container.appendChild(btnEl);
	}

	function appendHelloWorld() {}


});