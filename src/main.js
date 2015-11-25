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
	appendBtn("Log Action Event (Button Clicked)", function(event) { echoActions.buttonClicked(event); });
	appendHorizontalRule();


	// ---------- Helper Funcs ----------
	function appendHorizontalRule() {
		var hr = document.createElement("hr");
		container.appendChild(hr);
	}

	function appendTitle(title) {
		var titleEl = document.createTextNode(title);
		container.appendChild(titleEl);
	}

	function appendBtn(label, onClick) {
		var btnEl = document.createElement("BUTTON");
		btnEl.innerHTML = label;
		btnEl.onclick = onClick;
		container.appendChild(btnEl);
	}

	function appendHelloWorld() {}


});