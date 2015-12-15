define(function(){


    // ---------- Application ----------
    function onSaveButton(pre) {
        var data = {
            title: "local storage example",
            time: new Date().toISOString()
        };
        saveData(data);
        pre.innerHTML = "saving:\n" + JSON.stringify(data, null, 4);
    }

    function onLoadButton(pre) {
        var data = loadData();
        pre.innerHTML = "loaded:\n" + JSON.stringify(data, null, 4);
    }

    function onClearButton(pre) {
        clearData();
        pre.innerHTML = "cleared";
    }

    // ---------- Implementation ----------
    var MY_LOCAL_STORAGE_KEY = "starter-pack-example";

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
        return !window.bbccookies || window.bbccookies.isAllowed("ckps_a_func_cookie");
    }

    return {
        cookiesAreAllowed: cookiesAreAllowed,
        onSaveButton: onSaveButton,
        onLoadButton: onLoadButton,
        onClearButton: onClearButton
    }

});