# GMI

In order to allow for relatively painless integration of HTML5 games into both a mobile app and responsive website, an interface layer known as the Game Messaging Interface (GMI) has been developed. The GMI is a JavaScript module which abstracts away platform differences and sits alongside each game to be integrated into the platform which the game is running on. The GMI defines functions which can be used both for platform-side as well as game-side communication.

There are different implementations of the interface for different platforms (and OS's for mobile app) so you are able to integrate the GMI into a HTML5 game regardless of the target platform.

![GMI Diagram](http://play.test.bbc.co.uk/play/game/children/apps/picknmix/GMI.png)

## Web Platform
The game configuration and setting details come from [Games Grid](https://confluence.dev.bbc.co.uk/display/gamesgrid/Games+Grid+for+Noobs) and are injected into the playpen.

The GMI (game messaging interface) is a class that abstracts shared functionality
from the web and mobile apps so that games can run on both with minimal code changes.

Games that will run on BBC services should use the GMI for the functionality described
below.

## Loading the GMI

To be used in your game, the GMI must be loaded upon game initialization, and
passed throughout the game to wherever it is used.

Only one instance of the GMI should be created - if multiple instances are created
then a warning will be written to the console which will fail game certification.

To initialize the GMI, you can require the local gmi .js file, and use it to call
the getGMI() function:

````
var gmi = gmi_platform.getGMI();
````

Note that if window.getGMI is defined, this will be returned rather than the local
copy; this may be the case if the page/app has already loaded a version of GMI from
the server. In essence, this means that the local version is the fallback for if
the server didn't provide the GMI.

## JavaScript Games
Your game should fill the HTML element with the ID specified in
*gmi.gameContainerId*. If the game has particular size or aspect ratio
requirements these should be specified in the GamesGrid CMS so that this
element is automatically sized appropriately.

Your main script (path specified in the GamesGrid CMS) will be loaded by
RequireJS, but this does not mean that you have to use RequireJS in your
implementation. If you do, you can define a module that returns an object
containing an init function and this will be called to start your game,
passing gmi as a parameter. Otherwise just start your game in your main script.

### RequireJS Example
````
define(function(require) {
    var Submodule = require("./Submodule"); // relative module
    var cssUrl = require.toUrl("./css/style.css"); // relative resource

    function init(gmi) {
        var container = document.getElementById(gmi.gameContainerId);
        container.innerHTML = (
            '<div style="width:100%; height:100%; padding:1em; background-color:powderblue;">'
            +   '<pre style="font-family: monospace;">'
            +       'cssUrl = ' + cssUrl
            +   '</pre>'
            +'</div>');
    }

    return {
        init: init
    }
});
````

### Plain JS Example
````
var cssUrl = gmi.gameDir + "css/style.css"; // relative resource

var container = document.getElementById(gmi.gameContainerId);
container.innerHTML = (
    '<div style="width:100%; height:100%; padding:1em; background-color:moccasin;">'
    +   '<pre style="font-family: monospace;">'
    +       'cssUrl = ' + cssUrl
    +   '</pre>'
    +'</div>');
````

## GMI Functionality

The GMI provides functionality for the following:

### Game Loaded

PickNMix will require games to call this method once the initial 
loading sequence has finished, this notifies the app that the game is ready.

````
gmi.gameLoaded();
````

### Stats

The sending of stats is now handled by GMI. A simple call can be used:

````
gmi.sendStatsEvent(actionName, actionType, additionalLabels);
````

More information can be found [here](stats.md#stats).

### Global game settings

Saving and loading global settings should use the gmi functions:

````
gmi.setMuted(true/false);
gmi.setSubtitles(true/false);
gmi.setMotion(true/false);

gmi.getAllSettings().muted;
gmi.getAllSettings().subtitles;
gmi.getAllSettings().motion;
````

Further information can be found [here](data-storage.md#saving-data).

### Saving and Loading data

Saving and loading data should use the gmi functions:

````
gmi.setGameData(key, value);
gmi.getAllSettings().gameData;
````

Further information can be found [here](data-storage.md#saving-data).


### Debug messages

When writing debug messages, the following should be used:

````
gmi.debug(message);
````

This allows the debug message to be displayed regardless of platform, unlike
e.g. console.log.


### Exiting the game

When exiting the game, the function

````
gmi.exit();
````

should be used. This will return the user to the appropriate place.



## Data fields

GMI exposes several read-only properties.

#### gmi.embedVars
Contains the JavaScript object that was entered as JSON in the 'Set-up Data'
field in the GamesGrid CMS.

#### gmi.environment
Returns the environment name that the game is being served from. This will be
 "test" or "live".

#### gmi.gameContainerId
Specifies the ID of the HTML div that your game should fill (only relevant
to JavaScript games).

#### gmi.gameUrl
The URL of your main game file as entered into the GamesGrid CMS.

#### gmi.gameDir
The URL of the directory containing your main game file. This is convenient for
converting relative asset paths into absolute ones.

#### gmi.shouldDisplayMuteButton

A boolean that indicates whether or not the mute button should be displayed.

Note: Hardcoded to true for both the mobile app and the web platform.

#### gmi.shouldLongPressForSettings

A boolean that indicates whether or not the user has to press and hold for the settings menu.

Note: Hardcoded to true for the mobile app and false to web platform.

#### gmi.shouldShowExitButton
The game should use this flag to decide whether to show the exit button
(and potentially other full-screen-related functionality) rather than detecting
full screen status itself. This flag will be false if the game is currently
embedded in an iframe or true if the page has been redirected to the Playpen.

Note: Hardcoded to true for the mobile app, and the web platform on mobile devices - and false on desktop.


## Example
An [example](../src/main.js) has been created using the
code above. Build the project (see [build.sh](../build-scripts/build.sh)) to
see the code running.

## Mobile App
The configuration data from Games grid will also be supplied to agencies in a configuration.json file, which should be manually zipped up with the game assets and JavaScript code.  The app then uses a local index.html which requires the gmi-mobile.js and injects the configuration.json into the local index.html. These files which are local to the app are known as the app playpen bundle, and will be used across all the games.

![GMI Diagram](http://play.test.bbc.co.uk/play/game/children/apps/picknmix/playpen-bundle.png)

***

##### Note
This GMI will replace the existing use of the Open Games or 'og' object for games which wish to work across both web and mobile app platforms.  For more reference on the existing structure for web see here:

https://confluence.dev.bbc.co.uk/display/OGP/HOWTO+-+Develop+a+Game+for+the+Playpen

1. The following functions and data fields are deprecated, and all calls should use the Game Messaging Interface 

    * og.exitGameUrl
    * og.isFullScreen
    * og.resizeFrame(width, height)
    * og.goFullScreen()

2. There can be no absolute URLS (including from the BBC domain), all assets must be retrieved using gmi.gameDir including for any libraries being required.
3. No sign in or use of Games Grid.
4. Use of local storage is not advised, and persist handlers from the GMI should be used instead.
5. No hardcoded use of the "og-game-holder" div, all div references must be retrieved using gmi.gameContainerId.

Intergration Guide

### Getting started

`var gmi = getGMI()`

To get started first call getGMI().  As the library has already been required you are able to call `getGMI()` to get the GMI for your current platform. 

Once you have loaded the page and have an instance of a GMI you can start using the functions and properties documented in the [[API Reference]].

You can try this out running the game locally using the test-game-mobile-app example.

### Web

In order to use GMI you must first require the gmi-platform.js file into your game. You can then create a variable using the following:

`var gmi = gmi_require.getGMI();`

Note that getGMI() should only be called once by the game, and the resulting gmi instance variable passed throughout the game as needed. Though the gmi isn't technically a singleton, it will post a warning to the console if getGMI() is called more than once- this warning will cause the game to fail certification.

Echo/stats are now handled by the gmi. All stat calls should be done via the gmi's functions. The game will have to supply an echo path in the require config, as gmi expects to be able to use `require("echo");`.

Console.log and other such methods of debugging should no longer be used. The gmi provides a `gmi.debug(message);` function that will write to the console on web, but write to the debugger on the app making debug messages universal.

Storing of data is now handled exclusively by the gmi. The current gmi implementation uses web browser local storage- if local storage is not available then data storage calls fail silently- the game will have to handle the setting of defaults that are used in this case. The exception to this is the global settings (muted, subtitles, motion) that are given defaults by the gmi. It is worth noting that the gmi caches the values in local storage while the game is running- if you manually delete the local storage entries while debugging, then you will have to open the game in another tab (and hence initialize the gmi again) to prevent the cached values from being written back.

### Mobile

To run a game the app will use a app specific Playpen Bundle locally on the device.  This bundle will contain an index.html, require.js and gmi-mobile.js in a library folder.  On game launch the mobile device injects the global settings variables into the DOM, and includes the game configuration.json found in the root.

To test your game working in the app you will need to to do the following:

* Download the PickNMix App in Test Mode here (You will need to request access via your BBC TPM):

[PickNMix Game Test Build (iOS)](https://rink.hockeyapp.net/manage/apps/245563)

[PickNMix Game Test Build (Android ARM)](https://rink.hockeyapp.net/manage/apps/245567)

[PickNMix Game Test Build (Android x86)](https://rink.hockeyapp.net/manage/apps/245568)

* Zip your game folder with a configuration.json file at the root with the game folder as in the example game in test-game-mobile-app.

`zip -r test_game.gdz -Z store . --exclude=*.sh* --exclude=*.svn* --exclude=*.git* --exclude=*.DS_Store* `

_Note: In future, this step will be handled by an automated step in our deployment process.  A script will be added to this repo as soon as it's available. In the interim you will need to manually Zip and upload your game (as described above) to your chosen host in order to test.

* Run the app and click on the 'Add Game' button; enter the url where you've hosted the gdz file and click play. eg http://tinyurl.com/gst6k99

_Note: To enable debugging on Apple (and also available on Android but not required) `window.gameSettings.debugEndable` should be set to true._

#### Configuration.json

This is the file that contains the values needed for the game to initialise.  It needs to be bundled with the game in the root.  There is an example with the test-game-mobile-app config here:
```javascript
{
    "embedVars" : {
        "statsAppName" : "",
        "statsCounterName" : "",
        "version" : ""
    },
    "environment" : "",
    "gameContainerId" : "childrens-bbc-game-holder",
    "gameUrl" : "js/test.js",
    "gameDir" : "test-game-mobile-app"
}
```
* **gameContainerId:** used to reference the div for the game holder, please use this variable rather than hard coding div values.

* **gameUrl:** path to the main javascript file relative to the root of the folder (e.g. js/main.js)

* **gameDir:** path to the game directory relative to the configuration.json (e.g. ./game-directory/)





[Home](../README.md)
