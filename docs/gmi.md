# GMI

The GMI (game messaging interface) is a class that abstracts shared functionality
from the web and mobile apps so that games can run on both with minimal code changes.

Games that will run on BBC services should use the GMI for the functionality described
below.

## Loading the GMI

To be used in your game, the GMI must be loaded upon game initialization, and
passed throughout the game game to wherever it is used.

Only one instance of the GMI should be created- if multiple instances are created
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
gmi.setData(key, value);
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

#### gmi.exitGameUrl
The game's exit button should navigate to the URL provided by this field. The
 URL can be provided by setting the 'Exit Game URL' field in the GamesGrid
 CMS or as an escaped query string on the games URL. The exit URL is usually set
  to the game page where the game is embedded.

#### gmi.gameContainerId
Specifies the ID of the HTML div that your game should fill (only relevant
to JavaScript games).

##### gmi.gameUrl
The URL of your main game file as entered into the GamesGrid CMS.

##### gmi.gameDir
The URL of the directory containing your main game file. This is convenient for
converting relative asset paths into absolute ones.

##### gmi.shouldShowExitButton
The game should use this flag to decide whether to show the exit button
(and potentially other full-screen-related functionality) rather than detecting
full screen status itself. This flag will be false if the game is currently
embedded in an iframe or true if the page has been redirected to the Playpen.


## Example
An [example](../src/main.js) has been created using the
code above. Build the project (see [build.sh](../build-scripts/build.sh)) to
see the code running.

[Home](../README.md)
