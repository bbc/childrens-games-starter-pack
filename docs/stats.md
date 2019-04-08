# Stats

Stats are handled by the [GMI](gmi.md#gmi) using a combination of 
setStatsScreen for screen/location changes and sendStatsEvent for user actions. 

## setStatsScreen
We use this method to denote the player changing location in the game and 
should be called at prescribed moments according to the provided spec. 

This sets a global location context for any subsequent sendStatsEvent calls.

````
gmi.setStatsScreen("countername");
````
This method can accept optional custom values if specified as follows:

````
gmi.setStatsScreen("countername", {"custom_var_1":value});
````

### Counternames
Counternames will be provided as part of the provided spec and will be in the following format:

````
keepalive.<cbbc.|cbeebies.>games.<game name>.page
````

## sendStatsEvent
Stats Events consist of actionNames and actionTypes with accompanying metadata:

````
gmi.sendStatsEvent("actionName", "actionType", eventLabels);
````
eventLabels is a JSON object where extra information is passed through according to the spec:

````
gmi.sendStatsEvent("sublevel", "start", {"metadata":"SBL=2~XPL=3~GSI=123456789~LAU=First","source":"Level ID"});
````


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
    * [Stats](stats.md#stats)
    * [Using Local Storage/Cookies](data-storage.md#using-local-storagecookies)
