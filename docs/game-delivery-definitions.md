# Game Delivery Definitions

[Tech reviews](tech-review.md) take place at Alpha, Beta and Release Candidate 
stages. Feedback should be acted upon for the next delivery as all checks 
must pass. 

## Prototype

> A working Prototype game delivery has functional gameplay elements and 
representative assets which are used to demonstrate if a game, part of a game
 or a technology is feasible or not.

### Prototype delivery of the Software for the Deliverables (including Source Code and Object Code)

Dependant on game, but may include key features such as:
  * Gameplay mechanic
  * Gameplay controls
  * Game engine technology
  * Example gameplay goals 
  * Accessibility
  * Art style

## Alpha

> A working Alpha game delivery has all the basic core concepts in place 
allowing for technical and user performance testing to resolve any gameplay 
issues, small bugs and early game balancing.

### Alpha delivery of the Software for the Deliverables (including Source Code and Object Code)

  * Complete user journey through menus, help screens etc including any 
  transitions and pre-loaders
  * Core functionality for gameplay
  * Early game balancing in place
  * Graphics may be placeholders
  * Initial standardised game statistics integrated (e.g. game_loaded, 
  game_first_click, game_level)
  * Full download weight of assets (including audio and graphical elements)
  * Deployed on CBBC or CBeebies platform using BBC GitHub build process
  * Hosted on http://play.test.bbc.co.uk/play/pen/**GID**
  * Initial functionality for any agreed integrated systems in place (e.g. 
  sign in, high-scores etc)
  * Adheres to BBC Digital Children's Accessibility Guidelines
  * **Agency** tested game against primary devices and browsers P1/P2/P3 issues 
  identified and accepted 

### Testing Deliverables

  * Test plan (including scope of devices and browsers the developers will 
  be using for testing)
  * Draft test script

## Beta

> A working Beta game delivery has full game functionality, structure and 
assets in place and is ready to go into thorough Certification, Technical and
 User Testing to aid final gameplay balancing and bug identification.

### Beta version of the Software for the Deliverables (including Source Code and Object Code)

  * Gameplay and core functionality complete, with full end-to-end play 
  * All final assets in place
  * All BBC supplied game statistics integrated 
  * Localisation functionality integrated and tested (if required)
  * Deployed on CBBC or CBeebies platform using BBC GitHub build process
  * Hosted on http://play.test.bbc.co.uk/play/pen/**GID**
  * Full functionality for any agreed integrated systems in place (e.g. sign 
  in, high-scores etc)
  * Fully adheres to BBC Digital Children's Accessibility Guidelines
  * **Agency** tested game against primary, secondary and tertiary devices/browsers
  * No P1 issues
  * Limited P2 issues identified and accepted by BBC
  * Limited P3 issues identified and accepted by BBC

### Testing Deliverables

  * Test results with a full list of all issues discovered so far
  * Any updates to the test plan and test script

## Release Candidate

> A working Release Candidate game delivery is fully complete and ready for 
Certification and Technical Testing.

### Release Candidate version of the Software for the Deliverables (including Source Code and Object Code)

  * Gameplay and core functionality complete, with full end-to-end play
 
  * All final assets in place 
  * All BBC supplied game statistics integrated
  * Game meets the detailed specification set out in Schedule 1
  * Deployed on BBC Live server
  * Hosted on http://play.bbc.co.uk/play/pen/**GID**
  * Game located on a BBC Live Preview link
  * Full functionality for any agreed integrated systems in place (e.g. sign 
  in, high-scores etc)
  * Fully adheres to BBC Digital Children's Accessibility Guidelines
  * BBC Certification ready 
  * No P1 issues
  * No or limited P2 issues with an agreed fix schedule
  * No or limited P3 issues with and agreed fix schedule

### Testing Deliverables

  * Test results with a full list of all open issues

## Gold Master

> A working Gold Master game delivery is the final fully Certified build ready for live.

### Gold Master version of the Software for the Deliverables (including Source Code and Object Code)

  * No P1, P2 or P3 issues as identified in Certification
  * Game meets the detailed specification set out in Schedule 1
  * Delivered with full regression on primary, secondary and tertiary devices
  * Ready for live

##  Post release

All final game code, assets and documentation should be submitted following 
the Gold Master delivery for [Deliverable Review](deliverable-review.md).

This should include, but not limited to:
  * Game source files including Source and Object Code
  * Configuration files and scripts
  * Build scripts
  * Build notes
  * Fonts and any licenses


### Issue Prioritization

To enable us to provide the agreed quality gates between releases, please use
 the following guidelines for identifying issue priorities:

### P1 Issues:

  * Broken / incomplete user journeys
  * Stats issues
  * Lack of core functionality
  * Crashes / lock-ups
  * Major user interaction issues
  * Unacceptable video performance
  * Unacceptable audio performance
  * GAPI integration issues
  * Embed issues
  * Issues on Primary devices that are INSIDE the scope of BBC / developer control
  * Games Grid issues
  * Accessibility issues
  * Editorial issues
  * Major UX issues
  * Excessive load sizes

### P2 Issues:

  * Issues on Primary devices that are OUTSIDE the scope of BBC / developer control**
  * Crashes / lock-ups that cannot be reproduced
  * Missing images
  * Missing sounds
  * Minor user interaction issues
  * Issues on Secondary devices that are INSIDE the scope of BBC / developer control
  * Issues on Tertiary devices that are INSIDE the scope of BBC / developer control
  * General UX issues

### P3 Issues:

  * Issues on Secondary devices that are OUTSIDE the scope of BBC / developer
   controls\*
  * Issues on Tertiary devices that are OUTSIDE the scope of BBC / developer 
  control\*
  * Occasional audio / video glitches
  * Minor UX tweaks
  * Missing version numbers

\* Issues outside the scope of BBC / dev control include iOS / Android / 
Browser limitations that are caused by the software vendor and may or may not
be addressed in future releases. This also covers hardware limitations of 
devices.

[Home](../README.md)