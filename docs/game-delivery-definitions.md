# Game Delivery Definitions

Updated - 26/09/2019

[Tech reviews](tech-review.md) take place at Alpha, Beta and Release Candidate
stages. Feedback should be acted upon for the next delivery as all checks
must pass.

> The BBC has a contractual right to evaluate and test each Deliverable in
accordance with the Acceptance Tests (to be agreed with the supplier and based
on the Game Delivery Definitions outlined below) to determine whether
Acceptance can be given, which may trigger any payment due in relation
to the tested Deliverable.

All games will be checked for adherence to the [Technical Specifications](docs/game-specifications.md).

## Pre-production

>Pre-production is a phase focused on proving out the main features and / or risks of the particular game. The deliverables for this phase will be agreed between the BBC and the agency.

### Pre-production delivery of the Software for the Deliverables

Deliverables are dependent on agreed Pre-Production plan, but could include include key features such as:
  * Clickable wireframes
  * Working prototype
  * Gameplay mechanic
  * Onboarding
  * Gameplay controls
  * Game engine technology
  * Example gameplay goals 
  * Example artwork style

This phase will also require;
  * Agreed with the BBC which of the [‘Inclusive Gameplay’](https://www.bbc.co.uk/gel/guidelines/how-to-design-accessible-games) features for agreed Accessibility Pillar(s) will be implemented and at which stage of delivery
  * Production of a schedule for the full game development


## Alpha

> A working Alpha game delivery has all the basic core concepts in place allowing for technical and user performance testing to resolve any gameplay issues, small bugs and early game balancing.

### Alpha delivery of the Software for the Deliverables (including Source Code and Object Code)

  * Core functionality for gameplay in place
  * Early game balancing in place
  * Graphics may contain placeholders
  * Documented release notes including [P1/P2/P3](#issue-prioritization) known issues identified, device / browser test results, [Tech Review Tool](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/tech-review-tool.md) results, etc
  * **Initial** game download size **MUST BE** under 15MB
  * **CBeebies** games **total** uncompressed game GDZ file size **MUST** BE under 55MB
  * Test plan - a living document, describing what, how and when to test
  * **CBeebies** games - Agency evidence of game smoke tested in Playtime Island App Test App
  * UI layout and full end-to-end screen flow implemented, as per [GEL Games Framework](http://www.bbc.co.uk/gel/guidelines/games-framework) across two breakpoints
  * Consideration has been given to **‘Eight Requirements for Inclusive Design’** as per [GEL Games Framework](http://www.bbc.co.uk/gel/guidelines/games-framework)
  * [GMI Centralised Settings screen](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/gmi.md#settings-screen) implemented
  * Implementation of the [BBC Games Messaging Interface](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/gmi.md#gmi)
  * [Mandatory BBC supplied standardised game stats](https://www.dropbox.com/s/109h149g3fahami/Alpha-Tier1-Mandatory-Stats.xlsx?dl=0) events implemented (documentation can be found in the [Starter Pack](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/stats.md))
  * Deployed on CBBC or CBeebies platform using [BBC GitHub build process](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/build-pipeline.md)
  * Agreed User Testing and Stakeholder feedback from Pre-production phase addressed


## Beta

> A working Beta game delivery has full game functionality, structure and assets in place and is ready for Technical and User Testing to aid final gameplay balancing and bug final bug identification and fixing.

### Beta version of the Software for the Deliverables (including Source Code and Object Code)

  * Gameplay and core functionality complete, with full end-to-end play 
  * Final game balancing underway
  * All final assets **SHOULD BE** in place
  * Documented release notes including [P2/P3](#issue-prioritization) known issues identified, device / browser test results, [Tech Review Tool](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/tech-review-tool.md) results, etc
  * Game must gracefully scale to ensure a good user experience on all supported devices, eg. asset resolutions, number of sound files loaded, etc (compromises to be discussed and agreed with BBC)
  * **CBeebies** games (that are on the Playtime Island roadmap) - agency supplied draft assets for the Playtime Island menu - [as specified here](https://www.dropbox.com/sh/nyj1edxexpjhguw/AADOpJz3yWX6EJ_imwTqaX-Ua?dl=0)
  * **Initial** game download size **MUST BE** under 15MB
  * **CBeebies** games **total** uncompressed game GDZ file size **MUST BE** under 55MB
  * Agency evidence of testing of a set of representative devices from each manufacturer (Apple, Android, Amazon 2015 5th Gen) and browsers
  * Test cases - documentation describing the exact steps of a test case or script
  * **CBeebies** games - Agency evidence of game smoke tested in Playtime Island App Test App
  * Game-specific visual design is applied to GEL UI
  * **Fully** complies with [GEL Games Framework](http://www.bbc.co.uk/gel/guidelines/games-framework)
  * All **‘Eight Requirements for Inclusive Design’** have been implemented as per [GEL Games Framework](http://www.bbc.co.uk/gel/guidelines/games-framework)
  * [‘Inclusive Gameplay’](https://www.bbc.co.uk/gel/guidelines/how-to-design-accessible-games) features for agreed Accessibility Pillar(s) are in place
  * [GMI Centralised Settings screen](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/gmi.md#settings-screen) implemented
  * Implementation of the [BBC Games Messaging Interface](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/gmi.md#gmi)
  * [Mandatory BBC supplied standardised game stats](https://www.dropbox.com/s/109h149g3fahami/Alpha-Tier1-Mandatory-Stats.xlsx?dl=0) events implemented (documentation can be found in the [Starter Pack](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/stats.md))
  * [BBC supplied game-specific statistics](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/stats.md) from Alpha review integrated
  * Localisation functionality integrated and tested (if required)
  * Deployed on CBBC or CBeebies platform using [BBC GitHub build process](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/build-pipeline.md)
  * Agreed User Testing outcomes and Stakeholder feedback from Alpha addressed
  * [**No known P1 issues**](#issue-prioritization)
  * [**Limited P2 issues**](#issue-prioritization) identified
  * [**Limited P3 issues**](#issue-prioritization) identified


## Release Candidate

> A working Release Candidate game delivery that is fully tested, content complete and ready for Certification and Technical Testing, meeting the below listed Definitions. This will be delivered to the BBC one week before Certification testing is scheduled to be begin. When this is delivered, the game team have a week (Team Acceptance week) in which to do a final review to ensure it meets both the technical and editorial standards before submitting it for Certification (which takes three weeks typically). This review may result in some minor changes being required. This week is NOT to be seen as an additional week for development.

### Release Candidate version of the Software for the Deliverables (including Source Code and Object Code)

  * Game meets the detailed specification set out in Schedule 1 in the contract
  * Gameplay and core functionality complete, with full end-to-end play
  * All final assets in place 
  * Documented release notes including [P2/P3](#issue-prioritization) known issues identified and accepted by BBC, device / browser test results, [Tech Review Tool](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/tech-review-tool.md) results, etc
  * Game must gracefully scale to ensure a good user experience on all supported devices, eg. asset resolutions, number of sound files loaded, etc (compromises to be discussed and agreed with BBC)
  * **CBeebies** games (that are on the Playtime Island roadmap) - agency supplied draft assets for the Playtime Island menu  - [as specified here](https://www.dropbox.com/sh/nyj1edxexpjhguw/AADOpJz3yWX6EJ_imwTqaX-Ua?dl=0)
  * **Initial** game download size **MUST BE** under 15MB
  * **CBeebies** games **total** uncompressed game GDZ file size **MUST BE** under 55MB
  * Agency evidence of game fully tested against all supported devices and browsers 
  * Test cases - documentation describing the exact steps of a test case or script
  * **CBeebies** games - Agency evidence of game smoke tested in Playtime Island App Test App
  * Game-specific visual design is applied to GEL UI
  * **Fully** complies with [GEL Games Framework](http://www.bbc.co.uk/gel/guidelines/games-framework)
  * All **‘Eight Requirements for Inclusive Design’** have been implemented as per [GEL Games Framework](http://www.bbc.co.uk/gel/guidelines/games-framework)
  * [‘Inclusive Gameplay’](https://www.bbc.co.uk/gel/guidelines/how-to-design-accessible-games) features for agreed Accessibility Pillar(s) are in place
  * [GMI Centralised Settings screen](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/gmi.md#settings-screen) implemented
  * Implementation of the [BBC Games Messaging Interface](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/gmi.md#gmi)
  * [Mandatory BBC supplied standardised game stats](https://www.dropbox.com/s/109h149g3fahami/Alpha-Tier1-Mandatory-Stats.xlsx?dl=0) events implemented (documentation can be found in the [Starter Pack](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/stats.md))
  * [BBC supplied game-specific statistics](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/stats.md) from Beta review integrated
  * Localisation functionality integrated and tested (if required)
  * Deployed on CBBC or CBeebies platform using [BBC GitHub build process](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/build-pipeline.md)
  * Agreed user testing outcomes and stakeholder feedback from Beta addressed
  * If required - a 'vanilla version' of the game, free from any BBC provided code. It is expected to be free from any libraries, including GMI and stats tracking. The game should have all BBC branding and references to the BBC removed from the source code and associated documentation.
  * [**No known P1 issues**](#issue-prioritization)
  * [**No or limited P2 issues**](#issue-prioritization) with an agreed fix schedule
  * [**No or limited P3 issues**](#issue-prioritization) with an agreed fix schedule


##  Project Closedown

> Following game release all final game code, assets and documentation should be submitted for the Deliverable Review. This phase also includes any planned game updates, game data analysis, game maintenance and project closedown.

This should include, but not limited to:
  * Post Project Review - a face to face meeting to be held with agency and BBC representatives
  * **Version 1.1** – a post-launch update to address any gameplay issues indicated as required from BBC analytics (likely to be changes to difficulty or tweaks to level design)
  * Build notes
  * Asset source files (e.g PSDs, AIs, animations, sound files, fonts etc)
  * Any licenses associated with assets for use by the BBC across all media
  * [Deliverable and Code Review](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/deliverable-review.md#deliverable-review) pass
  * Post Project Review notes


### #Issue Prioritization

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
   controls\**
  * Issues on Tertiary devices that are OUTSIDE the scope of BBC / developer
  control\**
  * Occasional audio / video glitches
  * Minor UX tweaks
  * Missing version numbers

\** Issues outside the scope of BBC / dev control include
iOS / Android / Browser limitations that are caused by the software vendor and
may or may not be addressed in future releases. This also covers hardware
limitations of devices.

[Home](../README.md)
