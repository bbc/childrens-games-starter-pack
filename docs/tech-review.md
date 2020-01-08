# Tech Review

All games will be checked for adherence to the [Technical Specifications](docs/game-specifications.md).

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
(.DS_STORE or similar).

* **Minification**:
Ideally, release files should be minified (though it is optional) but source
files should not.

* **Assets should not contain text**:
Assets containing text/sentences/paragraphs should be avoided except for
cases where single characters or digits are used (e.g. for titles).

* **Library versions**:
  * Libraries used should be versioned and not modified by the agency. If
modified, the base version and changes made must be documented before the
[Deliverable Review](deliverable-review.md).
  * Either an unminfied or a minified version of a library should be included at release,
  but not both.


## Web browser checks

When gathering statistics make sure to do a hard reload, and if the dev tools are open, ensure 'disable cache' is not ticked.

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

### Tech Review Tool

The automated [Tech Review Tool](tech-review-tool.md) is run against the game
 on play.test and helps to identify:

* **No unauthorised network requests**:
All network requests made by the game must be within the game's root
directory. No requests to other domains, or other top-level directories are
allowed. This is to enable the game to function offline in the Pick&Mix app.

* **No cachebusting**:
No assets should be cachebusted in released files.

* **Correctly formatted file names**:
Assets and release files must be lowercase and only contain alphanumerical
characters, underscores ( _ ) and dashes ( - ).

* **iStats calls**:
The game must send 'action_name=game_loaded' once, when the game is loaded. (See [Stats](stats.md) for more information).

* **Language use**
An automated check will scan the source code for a list of disallowed words, and
flag up any words used with their line numbers. Code should also be manually checked for any unlisted words.

  * no inappropriate language such as swear words
  * no advertising
  * no links to products in software licenses
  * no names of people or companies (this may need checking manually)

[Home](../README.md)
