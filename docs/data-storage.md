# Using Local Storage/Cookies

Saving data must go through the [GMI](working-with-gmi.md), 
this ensures all data access complies with BBC data policies.

## Cookies/Local Storage disabled

In the event a user has disabled cookies/local storage, any attempt to 
save data will be ignored and any attempt to retrieve data will 
return the global settings with default values.

Games also adhere to the BBC 'Functional' Cookie so a user can opt out of these features. 
Users can manage preferences here: [Manage Cookie Settings (Live)].

*All games must be prepared to handle this scenario.*

## Saving data

````
gmi.setGameData(key, value);
````

Stores a JSON key-value pair that can then be retrieved with getAllSettings().

The exceptions to this are the [global settings](gmi.md#global-game-settings): audio, subtitles, and motion:

````
gmi.setAudio(true/false)
gmi.setSubtitles(true/false)
gmi.setMotion(true/false)
````

## Loading data

````
gmi.getAllSettings();
````

Returns a JSON object with [global settings](gmi.md#global-game-settings) and specific gameData.

Specific game data is stored under gameData:

````
gmi.getAllSettings().gameData
````

This object will contain all of the properties set by this game using setGameData.

[Global settings](gmi.md#global-game-settings) can be accessed like so:

````
gmi.getAllSettings().audio
gmi.getAllSettings().subtitles
gmi.getAllSettings().motion
````

## Example
[Code Example](../src/main.js) - open [index.html](../src/index.html) in your browser to see this in action.

This is also available to see in [CAGE](https://www.bbc.co.uk/cbeebies/embed/game/childrens-games-starter-pack).

## Testing

### CAGE
Change your 'Functional' cookie preferences at [Manage Cookie Settings (Live)] to see the [CAGE demo](https://www.bbc.co.uk/cbeebies/embed/game/childrens-games-starter-pack)
behave differently.

### Local
Edit your index.html so that gmi.areCookiesAllowed() returns true/false to observe how your game behaves. 


[Manage Cookie Settings (TEST)]: http://www.test.bbc.co.uk/privacy/cookies/managing/cookie-settings
[Manage Cookie Settings (LIVE)]: http://www.bbc.co.uk/privacy/cookies/managing/cookie-settings

[Home](../README.md)
