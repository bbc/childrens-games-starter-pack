# Tech Review

The tech review is carried out on release files (not source files) at Alpha, 
Beta and Release Candidate stages. 

## Code checks

* **No defamatory code**
  * no inappropriate language such as swear words
  * no advertising including
    * links to products in software licenses
   
* **No commented out code**:
The game should not contain commented out code or TODOs.
  * release files: none
  * source files: odd lines acceptable. Longer blocks allowed if it is helpful 
for debugging in the future

* **No unused files or backups**:
e.g. dummy_game.js, loading.js.BU

* **Minification**:
Ideally, release files should be minified (though it is optional) but source 
files must not be.

* **og. usage**:
This is enforced as of the start of February 2015. See [og Object](og-object.md) 
for details on how variables should be used. At a minimum, 
the following should be used: 
  * og.isFullScreen
  * og.exitGameUrl
  * og.environment
  * og.gameDir


## Web browser checks

When gathering statistics, make sure to do a hard reload and ensure 'disable 
cache' is not ticked in dev tools if it is open.

* **Appropriate use of SD/HD assets**:
The game should request SD/HD assets appropriately based on device.

* **Initial download speed**:
Ideally, the game should load in under 15 seconds when emulating a Good 3G 
connection.

* **No asset loading errors**
  * no assets should fail to load
  * CSS should contain no errors

* **No console output**:
The console should contain no console.log or errors from the game. It should 
also suppress any logs from libraries. 

* **Cookies and Local Storage**:
Ideally, data should not be stored. If it is, data should not be personal and
 should adhere to the cookie policy of the browser. If the game contains sign
  in, it must respect the privacy settings on the user's account.

### Tech Review Tool

The automated [Tech Review Tool](tech-review-tool.md) is run against the game
 on play.test and helps to identify: 
 
* **No unauthorised network requests**:
All dependencies should be relative to the project or part of the BBC's 
offerings (via Barlesque for example). BBC libraries such as Echo, Bump, etc.
 must be loaded from the Live environment

* **No cachebusting**:
No assets should be cachebusted in released files.

* **Correctly formatted file names**:
Assests and release files must be lowercase and only contain alphanumerical 
characters, underscores ( _ ) and dashes ( - ).

* **og. usage**:
An automated check to compliment the manual code check. It may fail if the 
release files are minfiied and the og. variable has been obscured.

* **iStats calls**:
The game must send 'action_name=game_loaded' once, when the game is loaded.

* **Initial download size and file sizes**:
The download size is used as an early indicator for how long the game will take
 to download. To help identidy large files, files over 500KB are listed. The 
 statisitc to fail the tech review is the initial download speed.
 
[Home](../README.md)




