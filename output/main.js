define(['echo-stats', 'local-storage', 'config'], function(echoStats, localStorage, config) {
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

	// ---------- Local Storage Example----------

	appendTitle("Local Storage Example");
	appendParagraph("Cookies allowed?: " + localStorage.cookiesAreAllowed());
	var pre = document.createElement("pre");
	appendBtn("Save", function() { localStorage.onSaveButton(pre); });
	appendBtn("Load", function() { localStorage.onLoadButton(pre); });
	appendBtn("Clear", function() { localStorage.onClearButton(pre); });
	container.appendChild(pre);


	// ---------- Helper Funcs ----------
	function appendHorizontalRule() {
		var br = document.createElement("br");
		container.appendChild(br);
		var hr = document.createElement("hr");
		container.appendChild(hr);
	}

	function appendTitle(titleStr) {
		var div = document.createElement("div");
		var title = document.createElement("h3");
		title.innerHTML = titleStr;
		title.style.fontSize = "200%";
		div.appendChild(title);
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

	function appendHelloWorld() { 	var content = document.createElement('div'); 	content.innerHTML = 'Hello World! Edit me in build.sh and commit to Git to see the automated build pipeline in action!'; 	container.appendChild(content); }


});
