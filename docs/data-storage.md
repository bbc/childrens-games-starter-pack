# Using Local Storage

Data must be saved through the [GMI](gmi.md). This ensures all data access complies with BBC data policies.

## On Web

### Saving data

```javascript
gmi.setGameData(key, value);
```

Stores a JSON key-value pair that can then be retrieved with `getAllSettings()`.

### Loading data

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

## In apps

Getting a local store instance:

```javascript
const store = gmi.storage.localStore.getStore();
```

Saving data:

```javascript
await store.set("key", { some: "data" });
```

Retrieving data:

```javascript
const someData = await store.get("key");
```

Deleting data:

```javascript
await store.remove("key");
```

Retrieve list of all keys for data in the store:

```javascript
const keys = await store.list();
```

Delete all data in local store:

```javascript
await gmi.storage.localStore.removeStore();
```

### Loading Shared Settings Data

```javascript
gmi.getAllSettings();
```

Returns a JSON object with [global settings](settings.md#global-settings) and specific game data.

[Global settings](settings.md#global-settings) can be accessed like so:

```javascript
gmi.getAllSettings().audio;
gmi.getAllSettings().motion;
gmi.getAllSettings().subtitles;
```

[Home](../README.md)
[Working with GMI](working-with-gmi.md)
[API Reference](gmi.md)
[Settings](settings.md)
[Stats](stats.md#stats)
