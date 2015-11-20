# Deliverable Review

This brief guide outlines our requirements for post-release delivery of game code and assets. This isn't an exhaustive list, and not all points are applicable to all games. The objective is to ensure our game deliveries are in the best and most future-proof state possible: we don't dictate how agencies should structure their projects but we do need them to be in a state where another developer can pick it up easily.

For further info on what we consider "finished", please see: Definition of Done and Delivery Definitions for Childrens Games

Points marked in bold are what we consider blockers to acceptance, and must be rectified before final delivery.

## Documentation

* **The project must contain a readme or instructional file** containing detailed instructions and all information necessary for a new developer to compile the project
* **The documentation should be environment agnostic** i.e the compilation instructions should not require a particular platform, IDE or program
* **There should not be any names (of people or companies) in in-line documentation**
* The documentation should indicate how to run the game for debug/testing and then for release
* The documentation should outline the project structure and workflow to aid with future maintenance and deployments
* The compile/build step should be documented including an explanation of each build script and an outline of the build process i.e. on fresh build an audiosprite is generated via audio.json config and output to /compiledaudio
* The documentation should describe any data that is saved by the game locally or otherwise

## Project Structure

* **The project must not contain any none-essential files.** This extends to versioned or arbitrarily-named files, i.e. "boy_v2_final.fla" or "assets_dan.swc"
* **All paths everywhere in the project must be relative:** the project should compile on any machine without having to change paths
* **If based on an existing framework (a templated game for example), the project must absolutely not contain any 'old' assets** - assets from another game/brand, config referencing old games etc.
* The project shouldn't contain any hidden files (DS_STORE's or similar), with the exception of things like required FlashBuilder project files which should be documented

## Assets

* **The project must contain all assets required to compile and run the game** - all paths used during build should be relative
* Assets should live in a sensible, organised location not scattered around the project
* Filenames need to be in lower-case: "myfile.swf" and not "MyFile.swf" - this is an apache restriction on some BBC servers
* Asset names should clearly indicate their function: "confirmscreenclosebutton.png" and not "button38.png"

## Code

* **The code must make sense to a new developer.** We don't mind how you structure the project at all, but a new developer must be able to pick up the project and work on it without days of exploration.
* The code should leverage the PlayPen functionality where possible e.g accessing container ID with og.gameContainerId: HOWTO - Develop a Game for the Playpen
* The game must be entirely externally-configurable, including localisation details. No game text must be kept in the code or assets unless absolutely unavoidable (in which case, document it)
* The code shouldn't contain any commented-out, old, disused or otherwise none-essential code, unless it's a reference/example for current code
* The code shouldn't contain TODO's or tasks. If something is marked as "TODO" then it either legitimately needs doing in which case the project isn't finished, or it's none-essential and should be removed
* Comment everything that isn't immediately clear to new developers. We understand that theoretically "good code is self-documenting", in practice we'd rather you explain things clearly in words.
* Libraries used should be versioned and not modified by the agency. If modified, it must have documentation. If minified, the unminified source should be included in a dev directory, but not for release.