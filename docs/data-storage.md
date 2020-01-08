# Using Local Storage

## Saving data

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