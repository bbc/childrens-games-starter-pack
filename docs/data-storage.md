# Using Local Storage

## Saving data

Ideally, data should not be stored. If it is stored, data must not be personal and should adhere to the cookie policy of the browser. If the game contains sign in, it must respect the privacy settings on the user's account.

Data must be saved through the [GMI](gmi.md). This ensures all data access complies with BBC data policies.

```javascript
gmi.setGameData(key, value);
```

Stores a JSON key-value pair that can then be retrieved with `getAllSettings()`.

## Loading data

```javascript
gmi.getAllSettings();
```

Returns a JSON object with [global settings](settings.md#global-settings) and specific game data.

Specific game data is stored under `gameData`:

```javascript
gmi.getAllSettings().gameData;
```

This object will contain all of the properties set by this game using `setGameData`.

[Global settings](settings.md#global-settings) can be accessed like so:

```javascript
gmi.getAllSettings().audio;
gmi.getAllSettings().motion;
gmi.getAllSettings().subtitles;

```