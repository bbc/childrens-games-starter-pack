define(function(){

    // ---------- Application ----------
    function onSaveButton(gmi, outputTextDiv) {
        var data = {
            title: "local storage example",
            time: new Date().toISOString()
        };
        saveData(gmi, data);
        outputTextDiv.innerHTML = "saving:\n" + JSON.stringify(data, null, 4);
        outputTextDiv.style.display = "inline-block";
    }

    function onLoadButton(gmi, outputTextDiv) {
        var data = loadData(gmi);
        outputTextDiv.innerHTML = "loaded:\n" + JSON.stringify(data, null, 4);
        outputTextDiv.style.display = "inline-block";
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
        return {};
    }

    return {
        onSaveButton: onSaveButton,
        onLoadButton: onLoadButton
    };

});
