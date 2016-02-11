# Stats

Stats are handled by the [GMI](docs/gmi.md#gmi). The specifics have been
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
A [stats example](../src/stats.js) has been created using the 
code above. Build the project (see [build.sh](../build-scripts/build.sh)) to 
see the code running. 

[Home](../README.md)