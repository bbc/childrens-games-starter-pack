# Deliverable Review

A deliverable review is carried out after the game is released, on the final 
game source code and assets. For further info on what we consider "finished", 
please see: [Delivery Definitions](game-delivery-definitions.md).

During a deliverable review, the same checks from the **release files 
section** of the [Tech Review](tech-review.md) are performed against the 
source code (instead of the release files) with some slight differences (in 
*italics*) and additions listed below.

This isn't an exhaustive list, and not all points are applicable to all games. 
The objective is to ensure our game deliveries are in the best and most 
future-proof state possible.

## Documentation

* **README**: The project should include documentation in the form of a README, 
which should:
  * outline the project structure to aid with future maintenance
  * explain any configuration files
  * indicate how to run the game locally
    * including how to enable debugging/testing
  * describe the build steps in build.sh if they are complex and not already 
  commented inline
  * describe any other build scripts
  * describe any data that is saved by the game locally or otherwise
  * list library versions (if not indicated by e.g. a 'project.json') 
  * text that has been hard coded in game code or assets instead of in 
  configuration files, and why

## Project Structure

* **No _non-essential_ files or backups**: it is acceptable to include files
 in the source that are unused in the release such as level builders. Other 
 unused files and backups are not allowed as described in the 
 [Tech Review](tech-review.md).

* **No hidden files _with an exception_**: The project should contain no 
hidden files as in the [Tech Review](tech-review.md), with the *exception* of
 things like required FlashBuilder project files which should be documented.

## Assets

* **Organisation**: Assets should live in a sensible, organised location not 
scattered around the project
  * SD and HD assets should live in different directories
  
* **Raw assets**: 
  * Any raw assets that are not processed during the build should not be 
  saved in Github
    * Instead, they should be saved in the appropriate Box folder and 
    referenced in the documentation
  * Any raw assets that are required during the build step should live in 
  their own directory

* **Sensible naming**: Asset names should clearly indicate their function e.g. 
"confirmscreenclosebutton.png" and not "button38.png".


## Code

* **Understandable**:
  * We would expect a logical structure that would be quick for a new developer to 
  grasp and navigate.
  * Make appropriate use of in-line comments, particularly for any configurable 
  or particularly complex code. 
 
* **Externally configurable**:
  * The game must be entirely externally configurable, including localisation
  details. An example of an external configuration file is [config.js](../src/config.js)
  which can be seen being utilised used when the project is built (see [build.sh](../build-scripts/build.sh)).
  * In addition, no game text must be kept in the code or assets (checked 
  during [Tech Review](tech-review.md)) unless absolutely unavoidable (in 
  which case, document it). 
  * The deliverable is expected to be ready for Live environment or at least 
  include relevant documentation/instructions to get the game Live-ready.

* **_Minimal_ commented out code**:
  * Odd lines (1-2) are acceptable
  * Longer blocks are only allowed if it is a reference or example for the 
  current code or it is helpful for debugging in the future

* **No uncalled or empty functions**

* **Library versions**:
  * All library versions should be documented or easily identifiable from e.g.
   a 'project.json'
  * As stated in the [Tech Review](tech-review.md), any changes to libraries 
  should be documented
  * If minified, the unminified source should be included in a dev directory
  
[Home](../README.md)