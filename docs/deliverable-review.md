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

## Build
Each game should include all necessary files and steps to be hosted locally, 
in the form of instructions and/or build scripts.

## Documentation

* **README**: The project should include documentation in the form of a README, 
which should:
  * outline the project structure to aid with future maintenance
  * document the use of configuration files in case they need updating
  * include instructions or scripts to run the game locally
    * including how to enable debugging/testing
  * describe the build steps in build.sh if they are complex and not already 
  commented inline
  * describe any other build scripts
  * describe any data that is saved by the game locally or otherwise
  * list library versions (if not indicated by e.g. a 'project.json') 
  * text that has been hard coded in game code or assets instead of in 
  configuration files, and why

  
[Home](../README.md)
