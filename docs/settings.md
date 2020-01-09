# Settings

## Config

A settings config object should be passed in to the `getGMI` function containing the various configurable options available to the player. Please note that General Settings (common across all BBC games) should be listed first in a separate section to custom settings for the game. This should contain only audio, subtitles, and motion settings. The "title" values can be changed, and multiple "pages" objects can be listed in the array if required.

For example:

```js
const settingsConfig = {
    pages: [
        // BBC General Settings
        {
            title: "General Settings",
            settings: [
                {
                    key: "audio",
                    title: "Audio",
                    description: "Turn off/on all sound effects and music",
                },
                {
                    key: "subtitles",
                    title: "Subtitles",
                    description: "Turn off/on subtitles",
                },
                {
                    key: "motion",
                    title: "Motion and Animation",
                    description: "Turn off/on background animation",
                },
            ],
        },
        // Custom settings
        {
            title: "Game Settings",
            settings: [
                {
                    key: "easy",
                    title: "Easy Mode",
                    description: "Turn easy mode on/off",
                },
            ],
        },
    ]
};

// Create a gmi object.
const gmi = window.getGMI({settingsConfig: settingsConfig});
```

Another example settings config object may be found [here](https://github.com/bbc/childrens-games-starter-pack/blob/master/src/main.js#L5).

Once the GMI object has been initialised with the settings config, the settings pop-up is triggered via the following call (where `onSettingChanged` and `onSettingsClosed` are callback functions):

```js
gmi.showSettings(onSettingChanged, onSettingsClosed);
```

## onSettingChanged

`onSettingChanged` is called when a toggle is switched from the settings screen. It takes two arguments: `key` and `value`.

For example, changing the game audio could be handled in the following way:

```js
function onSettingChanged(key, value) {
    if (key === "audio") {
        game.audio(value);
    }
}
```

## onSettingsClosed

`onSettingsClosed` is called when the settings close button is clicked/actioned. This callback function may be used to handle any game state changes that may need to take place once settings screen is closed.

This callback should also return focus to the element that initialised the settings screen for accessibility compliance.

```js
function onSettingsClosed() {
    // Any necessary code to handle game state after settings is closed.

    // Return focus for accessibility
    document.getElementsByClassName("settings-button")[0].focus();
}
```

## Persisting Settings

Settings are automatically persisted as key/value pairs and can be accessed as part of gameData: `gmi.getAllSettings().gameData[key]`.

These values can also be changed outside the settings screen context with `gmi.setGameData(key, value)`.

Global Settings are exceptions, see [global settings](gmi.md#global-game-settings).

* [Home](../README.md)
    * [Working with GMI](working-with-gmi.md)
    * [API Reference](gmi.md)
    * [Settings](settings.md)
    * [Stats](stats.md#stats)
    * [Using Local Storage](data-storage.md#using-local-storage)
