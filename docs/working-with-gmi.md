# GMI

The GMI (game messaging interface) allows games to communicate with BBC platforms using a shared API. 
All BBC games need to be GMI compliant to work correctly on our platforms.

### GMI Compliance
To be considered GMI compliant your game must adhere to the following:

* Must save/retrieve data via the GMI only
* Must send analytics data via the GMI only
* Must use gmi.shouldShowExitButton property to determine exit button visibility
* Must call gmi.exit() when user clicks exit button
* Must call gmi.gameLoaded() when initial loading screen is no longer visible.
* Must implement [centralised settings](settings.md)
* Must embed the game in gmi.gameContainerId element
* Must use gmi.shouldDisplayMuteButton property to determine mute button visibility

### Developing with GMI
The included index.html uses a mock GMI that you can also use for your own 
local development (this will be ignored in production).

### Loading the GMI

````
var gmi = window.getGMI(options);
````

> Note: Only one instance of the GMI should be created - if multiple instances
are created then a warning will be written to the console which will fail game
certification.

### Options
The options parameter passed into getGMI() is mainly for [settingsConfig](settings.md#config) 
currently but there is also support for statsLabels where appropriate. 

### Demo
[Code Example](../src/main.js) - open [index.html](../src/index.html) in your browser to see this in action.

Run `npm i` and `npm start` to see the demo run through a local node server at (http://localhost:8080/src/index.html). This will allow the audio format test to work correctly.

This is also available to see in [CAGE](https://www.bbc.co.uk/cbeebies/embed/game/childrens-games-starter-pack).

* [Home](../README.md)
    * [Working with GMI](working-with-gmi.md)
    * [API Reference](gmi.md)
    * [Settings](settings.md)
    * [Stats](stats.md#stats)
    * [Using Local Storage](data-storage.md#using-local-storage)
