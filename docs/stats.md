# Stats

Stats are handled by the [GMI](gmi.md#gmi) using a combination of 
setStatsScreen for screen/location changes and sendStatsEvent for user actions. 

## setStatsScreen
We use this method to denote the player changing location in the game and 
should be called at prescribed moments according to the provided spec. 

This sets a global location context for any subsequent sendStatsEvent calls.

````
gmi.setStatsScreen("screenName");
````
This method can accept optional custom values if specified as follows:

````
gmi.setStatsScreen("screenName", {"custom_var_1":value});
````

### Screennames and Counternames
The screenName passed to setStatsScreen will be used to generate a countername behind the scenes. 

Counternames take the following format:

````
keepalive.<productName.>games.<game name>.<screenName>.page
````

Using the ATI Tag Inspector you will be able to check that this is generated appropriately. 
There may also be cases where we expect you to pass through the complete countername yourself as part of eventLabels below.

## sendStatsEvent
Stats Events consist of actionNames and actionTypes with accompanying eventLabels:

````
gmi.sendStatsEvent("actionName", "actionType", eventLabels);
````
eventLabels is a JSON object where extra information is passed through according to the spec:

````
gmi.sendStatsEvent("sublevel", "start", {"metadata":"SBL=2~XPL=3~GSI=123456789~LAU=First","source":"Level ID"});
````

### Possible eventLabels

| eventLabel | Description | Example |
|------------|----------------------------------|---------|
| metadata   | Allows extra data to be provided | SBL=2~XPL=3~GSI=123456789~LAU=First |
| bucket     | Game type bucket                 | Games-SuperTier-Multiplayer |
| source     | Resource ID                      | Level One or Baseball Cap |
| result     | Destination change               | Countername i.e. keepalive.games.gameName.newDestination.page |

## ATI Tag Inspector Chrome plug-in

This extension allows us to load up a website and inspect our implementation of stats being fired to ATI. 

You can download it from the Chrome store here - [AT Internet Tag Inspector](https://chrome.google.com/webstore/detail/at-internet-tag-inspector/epdfbeoiphkaeapcohmilhmpdeilgnok).

The tool needs a BBC domain adding before use: 
Go to Settings>domains and add: 
```
a1.api.bbc.co.uk
```

## Example
You can see an example of using stats in our [code demo](../src/main.js). 
Open the accompanying index.html to see it in action.

* [Home](../README.md)
    * [Working with GMI](working-with-gmi.md)
    * [API Reference](gmi.md)
    * [Settings](settings.md)
    * [Using Local Storage/Cookies](data-storage.md#using-local-storagecookies)
