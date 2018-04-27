define(function(){
    
    var wsUri = "wss://echo.websocket.org";
    var terminal;
    
    // ---------- Application ----------
    function connect(setConnectionStateOnButtons) {
        terminal = document.getElementById("ws-terminal");
        websocket = new WebSocket(wsUri);
        websocket.onopen = function(evt) { onOpen(evt, setConnectionStateOnButtons) };
        websocket.onclose = function(evt) { onClose(evt, setConnectionStateOnButtons) };
        websocket.onmessage = function(evt) { onMessage(evt) };
        websocket.onerror = function(evt) { onError(evt) };
        
    }

    function disconnect() {
        websocket.close();
    }

    function sendString(string) {
        websocket.send(string);
        terminal.value = terminal.value + " \\\nMessage sent with value: " + string + ".";
    }

    function sendArrayBuffer(string) {        
        websocket.binaryType = "arraybuffer";
        var buffer = new ArrayBuffer(string.length*2); // 2 bytes for each char
        var bufView = new Uint16Array(buffer);
        for (var i=0, strLen=string.length; i<string; i++) {
          bufView[i] = string.charCodeAt(i);
        }
        websocket.send(bufView);
        terminal.value = terminal.value + " \\\nArrayBuffer sent with byteLength: " + bufView.byteLength + ".";
    }
     
    // ---------- Implementation ----------

    function onMessage(event) {
        var data = event.data;
        if (typeof(data) == "string") {
            terminal.value = terminal.value + " \\\nString Response Received with value: " + event.data;
        }
        else if (data.byteLength) {
            terminal.value = terminal.value + " \\\nArrayBufer Response Received with byteLength: " + data.byteLength;
        }
    }

    function onOpen(event, setConnectionStateOnButtons) {
        setConnectionStateOnButtons(true);
        terminal.value = terminal.value + " \\\nConnection Open.";
    }

    function onClose(event, setConnectionStateOnButtons) {
        setConnectionStateOnButtons(false);
        terminal.value = terminal.value + " \\\nConnection Closed.";
    }

    function onError(event) {
        terminal.value = terminal.value + " \\\nERROR: " + event;
        console.log(event);
    }

    return {
        connect: connect,
        disconnect: disconnect,
        sendString: sendString,
        sendArrayBuffer: sendArrayBuffer
    };

});
