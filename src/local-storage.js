define(function(){

    // Application: ---------------------------------------------------------
    //
    //var container = document.getElementById(og.gameContainerId);
    //
    //container.innerHTML = (
    //'<div style="width:100%; height:100%; padding:1em; background-color:moccasin;">'
    //+   '<p>Cookies allowed? ' + cookiesAreAllowed() + '</p>'
    //+   '<p><button id="save">Save</button></p>'
    //+   '<p><button id="load">Load</button></p>'
    //+   '<p><button id="clear">Clear</button></p>'
    //+   '<pre id="output" style="font-family: monospace;"></pre>'
    //+'</div>');
    //
    //document.getElementById("save").addEventListener("click", onSaveButton);
    //document.getElementById("load").addEventListener("click", onLoadButton);
    //document.getElementById("clear").addEventListener("click", onClearButton);
    //var output = document.getElementById("output");
    //setTimeout(onLoadButton, 0);
    //
    function onSaveButton(preEl) {
        var data = {
            title: "local storage test",
            time: new Date().toISOString()
        };
        saveData(data);
        preEl.innerHTML = "saving:\n" + JSON.stringify(data, null, 4);
    }

    function onLoadButton(preEl) {
        var data = loadData();
        preEl.innerHTML = "loaded:\n" + JSON.stringify(data, null, 4);
    }

    function onClearButton(preEl) {
        clearData();
        preEl.innerHTML = "cleared";
    }
    //
    //
    //
    //// Implementation: ------------------------------------------------------
    //
    var MY_LOCAL_STORAGE_KEY = "childrens-my-game";

    function saveData(data) {
        if (cookiesAreAllowed()) {
            var dataString = JSON.stringify(data);
            window.localStorage.setItem(MY_LOCAL_STORAGE_KEY, dataString);
        }
    }

    function loadData() {
        var dataString = window.localStorage.getItem(MY_LOCAL_STORAGE_KEY);
        if (dataString) {
            return JSON.parse(dataString);
        }
        else {
            return {};
        }
    }

    function clearData() {
        window.localStorage.removeItem(MY_LOCAL_STORAGE_KEY);
    }

    function cookiesAreAllowed() {
        // NOTE: Always allows saving data if not within a BBC Barlesque or Playpen page:
        return !window.bbccookies || window.bbccookies.isAllowed("ckps_whatever");
    }

    return {
        cookiesAreAllowed: cookiesAreAllowed,
        onSaveButton: onSaveButton,
        onLoadButton: onLoadButton,
        onClearButton: onClearButton
    }

});