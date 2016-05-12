# Using Local Storage/Cookies

If a game needs to save/load data then it must use the GMI to do so. The GMI will
only allow saving and loading if cookies are enabled on the user's browser.

If cookies are not enabled on the user's browser, the save functions will fail silently and the loaded gameData will be an empty object.

## Opting In

Opting in is via the the prompt that is shown to users when they visit any BBC
page. Alternatively, the user can set their preferences at:
[Manage Cookie Settings (TEST)] or [Manage Cookie Settings (LIVE)].

Legally, opting in/out of cookies consequently means opting in/out of local
storage.

## Saving data

Saving data requires the GMI. The [GMI should be required into the game upon loading](gmi.md#gmi),
and passed through to any functions that need it.

To save game data using the GMI, use the

````
gmi.setGameData(key, value);
````

function. This stores a JSON key-value pair that can then be pulled out as described in the next section.

The exceptions to this are the global settings: muted, subtitles, and motion. These
settings persist between games, and as such have their own setters:

````
gmi.setMuted(true/false);
gmi.setSubtitles(true/false);
gmi.setMotion(true/false);
````


## Loading data

Loading data requires the GMI. The [GMI should be required into the game upon loading](gmi.md#gmi),
and passed through to any functions that need it.

To load game data using the GMI, use the

````
gmi.getAllSettings();
````

function. This gives access to all data stored- both global and game data. To get the
global settings out, use:

````
gmi.getAllSettings().muted;
gmi.getAllSettings().subtitles;
gmi.getAllSettings().motion;
````

To pull out the custom game data, use:
````
gmi.getAllSettings().gameData;
````

This object will contain all of the properties that have previously been set for this game.


## Example
A [local storage example](../src/storage.js) has been created using the
code above. Build the project (see [build.sh](../build-scripts/build.sh)) to
see the code running.

Change your preferences at [Manage Cookie Settings (TEST)] to see the demo
behave differently. Specifically note that data will not be saved if the
'Functionality' cookie is disabled.


[Manage Cookie Settings (TEST)]: http://www.test.bbc.co.uk/privacy/cookies/managing/cookie-settings
[Manage Cookie Settings (LIVE)]: http://www.bbc.co.uk/privacy/cookies/managing/cookie-settings

[Home](../README.md)
