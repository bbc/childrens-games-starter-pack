# GMI

The GMI (game messaging interface) is a class that abstracts shared
functionality from the web and mobile apps so that one code base can 
communicate with both platforms with a common API.

## Loading the GMI

````
var gmi = window.getGMI(options);
````

> Note: Only one instance of the GMI should be created - if multiple instances
are created then a warning will be written to the console which will fail game
certification.

## Demo
We've included [demo GMI usage](../src/main.js) with this Starter Pack, you can
view this code in action by opening the included index.html in your browser. 

You can also see our hosted [GMI Test
App](http://play.test.bbc.co.uk/play/pen/g1m3pm1mt4).

## Non-BBC platforms
The included index.html uses a mock GMI that you can also use for your own local development.
It's important to note that this mock should not be bundled with your game
so in the event the game is not on a BBC platform or your local machine it should
stop working.

# GMI API Reference

The GMI provides the following functions:

##  Game Loaded

BBC mobile apps will display their own native loading screen on initial boot up
of any games, this will generally overlay your initial in-game loading screen.
This function tells the app that your game has finished loading and the native
loading screen can be hidden. You should call this method on initial start up of
your game after the initial load has completed and your loading screen is no
longer visible.

````
gmi.gameLoaded();
````

## Stats

The sending of stats is now handled by GMI. A simple call can be used:

````
gmi.sendStatsEvent(actionName, actionType, additionalLabels);
````

See here for more information on [sending stats](stats.md#stats).

## Global game settings

Saving and loading global settings should use the gmi functions:

````
gmi.setAudio(true/false);
gmi.setSubtitles(true/false);
gmi.setMotion(true/false);

gmi.getAllSettings().audio;
gmi.getAllSettings().subtitles;
gmi.getAllSettings().motion;
````

See here for more information on [data storage](data-storage.md#saving-data).

> GMI also exposes *setMuted()* and *getAllSettings().muted*. These are
available for backwards compatibility and are simply the inverse of *setAudio()*
and *getAllSettings().audio*. Use the "audio" versions for new code.

## Saving and Loading data

Saving and loading data should use the gmi functions:

````
gmi.setGameData(key, value);
gmi.getAllSettings().gameData;
````

See here for more information on [data storage](data-storage.md#saving-data).


## Debug messages

When writing debug messages, the following should be used:

````
gmi.debug(message);
````

This allows the debug message to be displayed regardless of platform, unlike
e.g. console.log.


## Display app prompt

````
gmi.showPrompt(resumeGame)
````

Inform the app that it should display its prompt/interstitial screen. Takes a resumeGame callback. Currently a stub implementation which always returns false.

## Settings Screen

````
gmi.showSettings(onSettingChanged, onSettingsClosed)
````

Requests that the "host" (i.e. app or web page) show its built-in settings
screen and notify the game when settings are changed or the screen is closed by
calling the provided callbacks.

### Return Value

* *true* if the host has shown the settings screen.
* *false* if the host is unable to show the settings screen (in which case the
  game must provide its own).

> The *false* case is intended as a temporary measure to allow games to be
developed for the new settings system before it is implemented in all hosts.
If the function returns *false* the game must show its own settings screen.

### onSettingChanged parameter

A function provided by the game that is called immediately each time the player
changes a setting.

```
function onSettingChanged(key, value) { ... }
```

* The *key* parameter corresponds to a key defined in the *settingsConfig* (see
  below).
* The *value* parameter is the new value of the setting. Currently this will be
  either *true* or *false*.
* Before this function is called, the new value will have been persisted
    * as *gmi.getAllSettings().audio*, etc., for standard keys.
    * as *gmi.getAllSettings().gameData[key]* for game-defined keys.

### onSettingsClosed parameter

A function provided by the game that is called when the settings screen is
dismissed.

```
function onSettingsClosed() { ... }
```

## Settings Configuration

Customization of the available settings is done via the initial *getGMI* call.

    GmiModule.getGMI({
        settingsConfig: mySettingsConfig
    });

*settingsConfig* should be a JavaScript object with the following form:

    {
        pages: [
            a list of page definitions -- see below
        ]
    }

Each page definition is an object with the following form:

    {
        title: <title string>,
        settings: [
            a list of setting definitions -- see below
        ]
    }

Each setting definition has the following form:

    {
        key: <unique id string>,
        type: "toggle",
        title: <title string>,
        description: <description string>,
        defaultValue: true/false
    }

The only supported *type* for now is "toggle". More types may be added in
future.

The ordering of pages and settings in the lists defines the order they appear in
the settings screen.

Any game-defined keys will correspond to the *key* parameter in
*gmi.setGameData(key, value)* and *gmi.getAllSettings().gameData[key]*.

*defaultValue* is used to initialise values if they don't already exist. Note: 
this only effects game-specific settings and not global settings.

### Standard Settings

The standard settings keys are:

* audio
* motion
* subtitles

When the GMI implements the settings screen, it will persist the updated values
for these keys: The game does not need to call *setAudio*, *setMotion* or
*setSubtitles* in this case.

> Note that "audio" replaces "muted" in the new version of the GMI. The "muted"
> API remains available for backwards compatibility only.

## Exiting the game

When exiting the game, the function

````
gmi.exit();
````

should be used. This will return the user to the appropriate place.

### Back Button Handling (Android)

When the back button is pressed, the default behavior is to pop the current experience. If there is no previous experience to load, the API will call exit instead.
This functionallity can be overriden by calling:
````
gmi.setOnBackPressed(f)
````
Where f is the new function that will be called when a user presses the back button. When a new experience is loaded the onBackPressed is reset to the default behavior, so each expereince that wants a non-default behavior needs to call setOnBackPressed.
It is also posible to reset to the standard behavior by calling setOnBackPressed with null/undefined as argument.
As this back button behaviour only exists on Android devices, calling setOnBackPressed on an iOS device will have no effect.

## Data fields

GMI exposes several read-only properties.

### gmi.embedVars
This exposes any custom settings you want to save in our CMS and expose via GMI
i.e.

````
gmi.embedVars.customSetting
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
