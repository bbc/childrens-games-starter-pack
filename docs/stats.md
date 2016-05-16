# Stats

Stats are handled by the [GMI](gmi.md#gmi). The specifics have been
abstracted away to ensure that stats usage is uniform across all games
and platforms- developers are no longer required to call Echo themselves.

## Sending Statistics

Any function that sends stats must have visibility of the GMI.

Statistics consist of key-value pairs called labels that are sent on
certain events.

To send a statistic:

````
gmi.sendStatsEvent(actionName, actionType, additionalLabels);
````

where ````actionName```` is the key, ````actionType```` is the value and
````additionalLabels```` are any other key-value pairs to send.


## Example
You can see an example of using stats in our [code demo](../src/main.js). 
Open the accompanying index.html to see it in action.

[Home](../README.md)
