# GMI

The GMI (game messaging interface) is a class that abstracts shared
functionality from the web and mobile apps so that one code base can run on both
platforms.

The BBC provides two versions of GMI: platform (web) and mobile (apps). You will
find the latest version of [gmi-platform](../src/gmi-platform.js) in this
Starter Pack, gmi-mobile will be part of the app environment.

## Loading the GMI

To initialize the GMI, you should bundle gmi-platform.js with your game and
require it, you can then create an instance by calling getGMI():

````
var requireGmi = require("./src/gmi-platform");
var gmi = requireGmi.getGMI();
````

When you call getGMI(), it will do a check for any existing window.gmi instance
and return that. This mechanism allows gmi-mobile to be injected in an app
environment and any mock gmi to be injected in tests or development environments
if necessary.

_Note: Only one instance of the GMI should be created - if multiple instances
are created then a warning will be written to the console which will fail game
certification._

### Echo Dependency

GMI has a dependency on the BBC's stats service Echo. On BBC environments Echo
is already available but to run it locally you either have to mock it out,
provide it locally or pull it from a URL:

````
var require = {
    paths: {
        "echo": "http://static.bbci.co.uk/nkdata/echoclient/2.0.0/sharedmodules/echo"
    }
};
````

## Demo
We've included [demo GMI usage](../src/main.js) with this Starter Pack, you can
view this code in action by opening the included index.html in your browser. The
index.html also contains examples of how you can mock out or include
dependencies when working locally.

You can also see our hosted [GMI Test
App](http://play.test.bbc.co.uk/play/pen/g1m3pm1mt4).

## GMI API Reference

The GMI provides the following functions:

#### Game Loaded

BBC mobile apps will display their own native loading screen on initial boot up
of any games, this will generally overlay your initial in-game loading screen.
This function tells the app that your game has finished loading and the native
loading screem can be hidden. You should call this method on initial start up of
your game after the initial load has completed and your loading screen is no
longer visible.

````
gmi.gameLoaded();
````

#### Stats

The sending of stats is now handled by GMI. A simple call can be used:

````
gmi.sendStatsEvent(actionName, actionType, additionalLabels);
````

See here for more information on [sending stats](stats.md#stats).

#### Global game settings

Saving and loading global settings should use the gmi functions:

````
gmi.setMuted(true/false);
gmi.setSubtitles(true/false);
gmi.setMotion(true/false);

gmi.getAllSettings().muted;
gmi.getAllSettings().subtitles;
gmi.getAllSettings().motion;
````

See here for more information on [data storage](data-storage.md#saving-data).

#### Saving and Loading data

Saving and loading data should use the gmi functions:

````
gmi.setGameData(key, value);
gmi.getAllSettings().gameData;
````

See here for more information on [data storage](data-storage.md#saving-data).


#### Debug messages

When writing debug messages, the following should be used:

````
gmi.debug(message);
````

This allows the debug message to be displayed regardless of platform, unlike
e.g. console.log.

#### Settings Screen

````
showSettings (settingsConfig, onSettingsClosed):
````

Accepts a settings config object and a settings closed callback. This function
displays either the game's own setting screen or the BBC platform's settings
screen. It returns false if the game's own setting screen should be displayed.
Currently a stub implementation which always returns false.

#### Exiting the game

When exiting the game, the function

````
gmi.exit();
````

should be used. This will return the user to the appropriate place.

## Data fields

GMI exposes several read-only properties.

#### gmi.embedVars
This exposes any custom settings you want to save in our CMS and expose via GMI
i.e.

````
gmi.embedVars.customSetting
````

#### gmi.environment
Returns the environment name that the game is being served from. This will be
"test" or "live".

#### gmi.gameContainerId
Specifies the ID of the HTML div that will house your game.

#### gmi.gameUrl
The URL of your main game file as entered into the GamesGrid CMS.

#### gmi.gameDir
The URL of the directory containing your main game file. This is convenient for
converting relative asset paths into absolute ones.

#### gmi.shouldDisplayMuteButton
A boolean that indicates whether or not the mute button should be displayed.

Note: Hardcoded to true for both the mobile app and the web platform.

#### gmi.shouldLongPressForSettings
A boolean that indicates whether or not the user has to press and hold for the
settings menu.

Note: Hardcoded to true for the mobile app and false to web platform.

#### gmi.shouldShowExitButton
The game should use this flag to decide whether to show the exit button (and
potentially other full-screen-related functionality) rather than detecting full
screen status itself. This flag will be false if the game is currently embedded
in an iframe or true if the page has been redirected to the Playpen.

### gmi.isDebugMode
A boolean that indicates if the game should be in debug mode or not. If true,
all levels should be unlocked for testing purposes.

Note: Hardcoded to true for the mobile app, and the web platform on mobile
devices - and false on desktop.


[Home](../README.md)
