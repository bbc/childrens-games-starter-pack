# Tech Review

The tech review is carried out on release files (not source files) at Alpha, 
Beta and Release Candidate stages. 

## Checks on release files
   
* **No commented out code**: The game should not contain commented out code 
or TODOs. If something is marked as "TODO" then it either legitimately needs 
doing in which case the project isn't finished, or it's none-essential and 
should be removed

* **Relative paths**: All paths everywhere in the project must be relative so
 that the project compiles on any machine.

* **No unused files or backups** 
  * unused files e.g. 'test_level.js'
  * backups e.g. 'loading.js.BU'
  * versioned files e.g. 'boy_v2_final.png'
  * arbitrarily-named files e.g. "assets_dan.json"
  * hangover files i.e. if the game is based on an existing framework, 
  no 'old' assets or config should remain
 
* **No hidden files**: The project shouldn't contain any hidden files 
(DS_STORE's or similar).

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
  * og.gameContainerId
 
* **Assets should not contain text**:
Assets containing text/sentences/paragraphs should be avoided except for 
cases where single characters or digits are e.g. used for titles.

* **Library versions**:
  * Libraries used should be versioned and not modified by the agency. If 
modified, the base version and changes made must be documented before the 
[Deliverable Review](deliverable-review.md)
  * Either an unminfied or a minified library should be included at release, 
  but not both

 
## Web browser checks

When gathering statistics, make sure to do a hard reload and ensure 'disable 
cache' is not ticked in dev tools if it is open.

* **Appropriate use of SD/HD assets**:
The game should request SD/HD assets appropriately based on device.

* **Initial download speed**:
The game must load in under 15 seconds when emulating the average 3G 
connection with custom 3G emulation. The throttling values should be set to:
 Throughput: 5120Kb/s (=5Mb/s), Latency: 64ms.

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

* **Language use**
Automated check will check source code against a list of disallowed words and 
flag up lines and words used. A manual check of code should be used in case unlisted
words are present.
  * no inappropriate language such as swear words
  * no advertising including
    * links to products in software licenses
  * (check manually) no names of people or companies

[Home](../README.md)




