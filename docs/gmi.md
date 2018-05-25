# GMI API Reference

### Loading the GMI

````
var gmi = window.getGMI(options);
````

> Note: Only one instance of the GMI should be created - if multiple instances
are created then a warning will be written to the console which will fail game
certification.

###  Game Loaded

BBC mobile apps will display their own native loading screen on initial boot up
of any games, this will generally overlay your initial in-game loading screen.
This function tells the app that your game has finished loading and the native
loading screen can be hidden. You should call this method on initial start up of
your game after the initial load has completed and your loading screen is no
longer visible.

````
gmi.gameLoaded();
````

## Game Exiting

When a user clicks the exit button, the function

````
gmi.exit();
````

should be used. This will return the user to the appropriate place.

## Debug messages

When writing debug messages, the following should be used:

````
gmi.debug(message);
````

This allows the debug message to be displayed regardless of platform, unlike
e.g. console.log.


## Stats

The sending of stats is now handled by GMI. A simple call can be used:

````
gmi.sendStatsEvent(actionName, actionType, additionalLabels);
````

See here for more information on [sending stats](stats.md#stats).


## Display app prompt

````
gmi.showPrompt(resumeGame)
````

Inform the app that it should display its prompt/interstitial screen. Takes a resumeGame callback.


## Saving and Loading data

Saving and loading data must use the gmi functions:

````
gmi.setGameData(key, value);
gmi.getAllSettings().gameData;
````

See here for more information on [data storage](data-storage.md#saving-data).

## Global Game Settings

GMI has the concept of Global Settings - these are settings that persist 
across all BBC games i.e. disabling motion disables it for all games.

Our Global Settings are: Audio, Subtitles and Motion.


````
gmi.setAudio(true/false);
gmi.setSubtitles(true/false);
gmi.setMotion(true/false);

gmi.getAllSettings().audio;
gmi.getAllSettings().subtitles;
gmi.getAllSettings().motion;
````

## Centralised Settings Screens

BBC platforms provide centralised settings screens. 

````
gmi.showSettings(onSettingChanged, onSettingsClosed)
````

See here for more information on [centralised settings](settings.md).

## Data fields

GMI exposes several read-only properties.

### gmi.embedVars
This exposes any custom settings you want to save in our CMS and expose via GMI
i.e.

````
gmi.embedVars.language
````

### gmi.environment
Returns the environment name that the game is being served from. This will be
"test" or "live".

### gmi.gameContainerId
Specifies the ID of the HTML div that will house your game.

### gmi.gameUrl
The URL of your main game file as entered into the GamesGrid CMS.

### gmi.gameDir
The URL of the directory containing your main game file. This is convenient for
converting relative asset paths into absolute ones.

### gmi.shouldDisplayMuteButton
A boolean that indicates whether or not the mute button should be displayed.

Note: Hardcoded to true for both the mobile app and the web platform.

### gmi.shouldLongPressForSettings
A boolean that indicates whether or not the user has to press and hold for the
settings menu.

Note: Hardcoded to true for the mobile app and false to web platform.

### gmi.shouldShowExitButton
The game should use this flag to decide whether to show the exit button (and
potentially other full-screen-related functionality). Where applicable the exit 
button returns the user to a previous screen such as a web page or an app hub menu.

### gmi.isDebugMode
A boolean that indicates if the game should be in debug mode or not. If true,
all levels should be unlocked for testing purposes.

[Home](../README.md)
