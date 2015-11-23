# Deliverable Review

This brief guide outlines our requirements for post-release delivery of game 
code and assets. This isn't an exhaustive list, and not all points are 
applicable to all games. The objective is to ensure our game deliveries are 
in the best and most future-proof state possible: we don't dictate how 
agencies should structure their projects but we do need them to be in a state
 where another developer can pick it up easily.

For further info on what we consider "finished", please see: [Definition of 
Done and Delivery Definitions](definition-of-done.md).

Points marked in bold are what we consider blockers to acceptance, and must 
be rectified before final delivery.

During a deliverable review, the same checks from the [Tech Review](tech-review.md)  
are now performed against the source code (instead of the release files) with
 some slight differences (in *italics*) and additions listed below:

## Documentation

* **README**: The project should include documentation in the form of a README, 
which should:
  * outline the project structure to aid with future maintenance
  * indicate how to run the game locally
    * including how to enable debugging/testing
  * describe the build steps in build.sh if they are complex and not already 
inline
  * describe any other build scripts
  * describe any data that is saved by the game locally or otherwise

## Project Structure

* **No _none-essential_ files or backups**: it is acceptable to include files
 in the source that are unused in the release such as level builders. Other 
 unused files and backups are not allowed as described in the [Tech Review](tech-review.md).

* **No hidden files _with an exception_**: The project should contain no 
hidden files as in the [Tech Review](tech-review.md), with the *exception* of
 things like required FlashBuilder project files which should be documented.

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