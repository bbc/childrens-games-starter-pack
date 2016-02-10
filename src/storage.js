define(function(){


    // ---------- Application ----------
    function onSaveButton(gmi, pre) {
        var data = {
            title: "local storage example",
            time: new Date().toISOString()
        };
        saveData(gmi, data);
        pre.innerHTML = "saving:\n" + JSON.stringify(data, null, 4);
    }

    function onLoadButton(gmi, pre) {
        var data = loadData(gmi);
        pre.innerHTML = "loaded:\n" + JSON.stringify(data, null, 4);
    }

    // ---------- Implementation ----------
    function saveData(gmi, data) {
        var dataString = JSON.stringify(data);
        gmi.setGameData("data-key", dataString);
    }

    function loadData(gmi) {
        var dataString = gmi.getAllSettings().gameData["data-key"];
        if (dataString) {
            return JSON.parse(dataString);
        }
        else {
            return {};
        }
    }

    return {
        onSaveButton: onSaveButton,
        onLoadButton: onLoadButton
    };

});