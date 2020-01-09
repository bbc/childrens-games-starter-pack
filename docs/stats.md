# Stats

Stats are handled by the [GMI](gmi.md#gmi) using a combination of
`.setStatsScreen()` for screen/location changes and `.sendStatsEvent()` for user actions.

## setStatsScreen
We use this method to denote the player changing location in the game and
should be called at prescribed moments according to the provided spec.

This sets a global location context for any subsequent `sendStatsEvent` calls.

````
gmi.setStatsScreen("screenName");
````
This method can accept optional custom values if specified as follows:

````
gmi.setStatsScreen("screenName", { custom_var_1: "value" });
````

Please note that pause screens and loading screens do not require a page stat.

### Screen names and Counter names
The `screenName` passed to `setStatsScreen` will be used to generate a countername behind the scenes.

Counternames take the following format:

````
keepalive.<product-name.>games.<game-name>.<screen-name>.page
````

Using the [ATI Tag Inspector](#ATI-Tag-Inspector-Chrome-plug-in) you will be able to check that this is generated appropriately. There may also be cases where we expect you to pass through the complete countername yourself as part of `eventLabels` below.

## sendStatsEvent
Stats events consist of action names and action types with accompanying event labels:

````
gmi.sendStatsEvent("actionName", "actionType", eventLabels);
````
Both `actionName` and `actionType` should be provided in string format. `eventLabels` is a JSON object where extra information is passed through according to the spec:

````
gmi.sendStatsEvent("sublevel", "start", { metadata: "SBL=2~XPL=3~GSI=123456789~LAU=First", source: "Level ID" });
````

### Possible eventLabels

| eventLabel | Description | Example |
|------------|----------------------------------|---------|
| metadata   | Allows extra data to be provided | `SBL=2~XPL=3~GSI=123456789~LAU=First` |
| container  | Game type bucket                 | `Games-SuperTier-Multiplayer` |
| source     | Resource ID                      | `Level One` or `Baseball Cap` |
| result     | Destination change               | Countername i.e. `keepalive.games.gameName.newDestination.page` |

## ATI Tag Inspector Chrome plug-in

This extension allows us to load up a website and inspect our implementation of stats being fired to ATI.

You can download it from the Chrome store here - [AT Internet Tag Inspector](https://chrome.google.com/webstore/detail/at-internet-tag-inspector/epdfbeoiphkaeapcohmilhmpdeilgnok).

The tool needs a BBC domain adding before use:
Go to Settings > domains and add: `a1.api.bbc.co.uk`

## Example
You can see an example of using stats in our [code demo](../src/main.js).
Open the accompanying `index.html` to see it in action.

* [Home](../README.md)
    * [Working with GMI](working-with-gmi.md)
    * [API Reference](gmi.md)
    * [Settings](settings.md)
    * [Using Local Storage](data-storage.md#using-local-storage)
