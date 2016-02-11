# GMI

The GMI (game messaging interface) is a class that abstracts shared functionality
from the web and mobile apps so that games can run on both with minimal code changes.

Games that will run on BBC services should use the GMI for the functionality described
below.

## GMI Functionality

The GMI provides functionality for the following:

### Stats

The sending of stats is now handled by GMI. A simple call can be used:

````
gmi.sendStatsEvent(actionName, actionType, additionalLabels);
````

More information can be found [here](docs/stats.md#stats).

### Global game settings

Saving and loading global settings should use the gmi functions:

````
gmi.setMuted(true/false);
gmi.setSubtitles(true/false);
gmi.setMotion(true/false);

gmi.getAllSettings().muted;
gmi.getAllSettings().subtitles;
gmi.getAllSettings().motion;
````

Further information can be found [here](docs/data-storage.md#saving-data).

### Saving and Loading data

Saving and loading data should use the gmi functions:

````
gmi.setData(key, value);
gmi.getAllSettings().gameData;
````

Further information can be found [here](docs/data-storage.md#saving-data).


### Debug messages

When writing debug messages, the following should be used:

````
gmi.debug(message);
````

This allows the debug message to be displayed regardless of platform, unlike
e.g. console.log.


### Exiting the game

When exiting the game, the function

````
gmi.exit();
````

should be used. This will return the user to the appropriate place.


## Loading the GMI

To be used in your game, the GMI must be loaded upon game initialization, and
passed throughout the game game to wherever it is used.

Only one instance of the GMI should be created- if multiple instances are created
then a warning will be written to the console which will fail game certification.

To initialize the GMI, you can require the local gmi .js file, and use it to call
the getGMI() function:

````
var gmi = gmi_platform.getGMI();
````

Note that if window.getGMI is defined, this will be returned rather than the local
copy; this may be the case if the page/app has already loaded a version of GMI from
the server. In essence, this means that the local version is the fallback for if
the server didn't provide the GMI.

## Example
An [example](../src/main.js) has been created using the
code above. Build the project (see [build.sh](../build-scripts/build.sh)) to
see the code running.

[Home](../README.md)
