#Settings

##Setup

A settings config object should be passed in to the `getGMI` function containing the various configurable options available to the player.

For example:

```js
const settingsConfig = {
    pages: [
        {
            title: "Global Settings",
            settings: [
                {
                    key: "audio",
                    type: "toggle",
                    title: "Audio",
                    description: "Turn off/on sound and music"
                },
                {
                    key: "hard",
                    type: "toggle",
                    title: "Hard mode",
                    description: "More baddies and less health"
                },
            ]
        }˜
    ]
};

// Create a gmi object.
const gmi = window.getGMI({settingsConfig: settingsConfig});
```

Once the GMI object has been initialized with the settings config, the settings pop up is triggered via the following call:

```js
gmi.showSettings(onSettingChanged, onSettingsClosed);
```

where `onSettingChanged` and `onSettingsClosed` are callback functions.

##onSettingChanged

`onSettingChanged` is called when a toggle is switched from the settings screen. It takes two arguments: `key` and `value`.

For example, changing the game audio could be handled in the following way:

```js
function onSettingChanged(key, value) {
    if (key === "audio") {
        gmi.setAudio(value);
    }
}
```

##onSettingsClosed

`onSettingsClosed` is called when the settings close button is clicked/actioned. This callback function may be used to handle any game state changes that may need to take place once settings screen is closed.

This callback should also return focus to the element that initialised the settings screen for accessibility compliance.

```js
function onSettingsClosed() {
    // Any necessary code to handle game state after settings is closed.
    
    // Return focus to for accessibility
    document.getElementsByClassName("settings-button")[0].focus();
}
```