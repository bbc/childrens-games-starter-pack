# Game Delivery Definitions

**Updated - 07/10/2022** - All games contracted after this date must adhere to these Delivery Definitions. NB - change pertains to the creation of a build release in GitHub (Product Quality sections).

[Tech reviews](tech-review.md) take place at Alpha, Beta and Release Candidate
stages. Feedback should be acted upon for the next delivery as all checks
must pass.

> The BBC has a contractual right to evaluate and test each Deliverable in
accordance with the Acceptance Tests (to be agreed with the supplier and based
on the Game Delivery Definitions outlined below) to determine whether
Acceptance can be given, which may trigger any payment due in relation
to the tested Deliverable.

All games will be checked for adherence to the [Technical Specifications](game-specifications.md).

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

> A working Alpha game delivery has all the basic core concepts in place allowing for Technical and User Performance Testing to resolve any gameplay issues, minor defects and early game balancing..

### Alpha delivery of the Software for the Deliverables (including Source Code and Object Code)


Game;
 * Core functionality for gameplay in place (vertical slice)
 * Early game balancing in place
 * Graphics and audio (MP4 format) may contain placeholders
 * Scratch VO (if necessary)

Technical;
 * Initial game download size **MUST BE** under 15MB
 * **CBeebies games only** - total uncompressed game GDZ file size **MUST BE** under 55MB
 * Implementation of the [BBC Games Messaging Interface](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/gmi.md#gmi)
 * [GMI Centralised Settings screen](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/gmi.md#settings-screen) implemented
 * Deployed on CBBC, CBeebies or Education platform using [BBC GitHub build process](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/build-pipeline.md)

UI, UX, accessibility and Games GEL;
 * UI layout and full end-to-end screen flow implemented, as per [GEL Games Framework](http://www.bbc.co.uk/gel/guidelines/games-framework) across two breakpoints
 * A plan in in place to for the inclusion of the **‘Eight Requirements for Inclusive Design’** as per [GEL Games Framework](http://www.bbc.co.uk/gel/guidelines/games-framework)

Product quality;
 * Agreed User Testing and Stakeholder feedback from Pre-production phase addressed
 * Alpha build [release created in the GitHub repository](https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases), this must be accompanied by documented release notes including; evidence of testing on a set of representative devices from each manufacturer (Apple, Android, Amazon) and browsers, [P1/P2/P3 known issues](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/game-delivery-definitions.md#issue-prioritization) identified and the [Tech Review Tool](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/tech-review-tool.md) results, etc.
 * Test plan - a living document, describing what, how and when to test
 * **CBeebies games only** - evidence of game tested in Playtime Island App Test App

Analytics;
 * Mandatory BBC supplied [standardised game stats events](https://www.dropbox.com/s/109h149g3fahami/Alpha-Tier1-Mandatory-Stats.xlsx?dl=0) implemented (documentation can be found in the [Starter Pack](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/stats.md))


## Beta

> A working Beta game delivery has full game functionality, structure and assets in place and is ready for Technical and User Performance Testing to aid final gameplay balancing and final defect identification and fixing.

### Beta version of the Software for the Deliverables (including Source Code and Object Code)

Game;
 * Gameplay and core functionality complete, with full end-to-end play
 * Final game balancing underway
 * All final graphics and audio (MP4 format) **SHOULD BE** in place
 * Full VO script in place – this may be with talent or scratch depending on recording dates

Technical;
 * **Initial** game download size **MUST BE** under 15MB
 * **CBeebies games only** - total uncompressed game GDZ file size MUST BE under 55MB
 * Implementation of the [BBC Games Messaging Interface](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/gmi.md#gmi)
 * GMI [Centralised Settings screen](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/settings.md) implemented
 * Deployed on CBBC, CBeebies or Education platform using [BBC GitHub build process](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/build-pipeline.md)
 * Game must gracefully scale to ensure a good user experience on all supported devices, eg. asset resolutions, number of sound files loaded, Canvas fallback, etc (compromises to be discussed and agreed with BBC)
 * Meets [BBC Children’s and Education Games technical specifications](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/game-specifications.md), or plan in place to do so by RC
 * Draft documentation on any required dependencies/plug-ins/third party libraries used in the build (the purpose of this is so that the BBC can replicate the Game’s setup if the BBC wants to rebuild the Game).
 * Localisation functionality integrated and tested (if required)

UI, UX, accessibility and Games GEL;
 * Game-specific visual design is applied to GEL UI
 * **Fully** complies with [GEL Games Framework](https://www.bbc.co.uk/gel/guidelines/games-framework)
 * All **‘Eight Requirements for Inclusive Design’** have been implemented as per [GEL Games Framework](https://www.bbc.co.uk/gel/guidelines/games-framework)
 * ‘[Inclusive Gameplay](https://www.bbc.co.uk/gel/guidelines/how-to-design-accessible-games)’ features for agreed Accessibility Pillar(s) are in place
 * **CBeebies games only** - agency supplied draft assets for the Playtime Island Game Cards;
  * Game logo
  * Main protagonists of the game as individual character assets - in multiple poses ideally
  * Any key environments/level backgrounds from the game
  * Any antagonists key to the game - as individual character assets - in multiple poses ideally
  * Any key moments from the game referenced - including any iconic objects or props from the game

Product quality;
 * Agreed user testing outcomes and stakeholder feedback from Alpha addressed
 * Beta build [release created in the GitHub repository](https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases), this must be accompanied by documented release notes including; evidence of testing on a set of representative devices from each manufacturer (Apple, Android, Amazon) and browsers, P2/P3 known issues identified, device / browser test results, Tech Review Tool results, etc
 * Test cases - documentation describing the exact steps of a test case or script
 * **CBeebies games only** - evidence of game tested in Playtime Island App Test App
 * **No known [P1 issues](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/game-delivery-definitions.md#issue-prioritization)**
 * **Limited [P2 issues](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/game-delivery-definitions.md#issue-prioritization)** identified
 * **Limited [P3 issues](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/game-delivery-definitions.md#issue-prioritization)** identified

Analytics;
 * Mandatory BBC supplied [standardised game stats events](https://www.dropbox.com/s/109h149g3fahami/Alpha-Tier1-Mandatory-Stats.xlsx?dl=0) implemented (documentation can be found in the [Starter Pack](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/stats.md)
 * BBC supplied [game-specific statistics](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/stats.md) from Alpha review integrated


## Release Candidate

> A working Release Candidate game delivery is fully tested, content complete and ready for Certification and Technical Testing, meeting the below listed Deliverables. This will be delivered to the BBC one week before Certification testing is scheduled to be begin. Following delivery of the RC, the BBC project team have a week (Team Acceptance week) in which to do a final review to ensure it meets both the requirements and editorial standards before submitting it for Certification (which takes three weeks typically depending on the complexity of the project). This review may result in some changes being required. This week is NOT to be seen as an additional week for development.

### Release Candidate version of the Software for the Deliverables (including Source Code and Object Code)

Game;
 * Game meets the detailed specification as agreed between the BBC and supplier
 * Gameplay and core functionality complete, with full end-to-end play
 * All final graphics and audio, including VO (MP4 format) **MUST BE** in place

Technical;
 * **Initial** game download size **MUST BE** under 15MB
 * **CBeebies games only** -  total uncompressed game GDZ file size MUST BE under 55MB
 * Implementation of the [BBC Games Messaging Interface](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/gmi.md#gmi)
 * GMI [Centralised Settings screen](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/settings.md) implemented
 * Deployed on CBBC, CBeebies or Education platform using [BBC GitHub build process](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/build-pipeline.md)
 * Game must gracefully scale to ensure a good user experience on all supported devices, eg. asset resolutions, number of sound files loaded, Canvas fallback, etc (compromises to be discussed and agreed with BBC)
 * Fully meets [BBC Children’s and Education Games technical specifications](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/game-specifications.md)
 * Final documentation on any required dependencies/plug-ins/third party libraries used in the build (the purpose of this is so that the BBC can replicate the Game’s setup if the BBC wants to rebuild the Game).
 * Localisation functionality integrated and tested (if required)
 * **If required** - a 'vanilla version' of the game, free from any BBC provided code. It is expected to be free from any libraries, including GMI and stats tracking. The game should have all BBC branding and references to the BBC removed from the source code and associated documentation.

UI, UX, accessibility and Games GEL;
 * Game-specific visual design is applied to GEL UI
 * **Fully** complies with [GEL Games Framework](https://www.bbc.co.uk/gel/guidelines/games-framework)
 * All **‘Eight Requirements for Inclusive Design’** have been implemented as per [GEL Games Framework](https://www.bbc.co.uk/gel/guidelines/games-framework)
 * ‘[Inclusive Gameplay](https://www.bbc.co.uk/gel/guidelines/how-to-design-accessible-games)’ features for agreed Accessibility Pillar(s) **MUST BE** in place
 * **CBeebies games only** - agency supplied final assets for the Playtime Island Game Cards;
  * Game logo
  * Main protagonists of the game as individual character assets - in multiple poses ideally
  * Any key environments/level backgrounds from the game
  * Any antagonists key to the game - as individual character assets - in multiple poses ideally
  * Any key moments from the game referenced - including any iconic objects or props from the game

Product quality;
 * Agreed user testing outcomes and stakeholder feedback from Beta addressed
 * Release Candidate build [release created in the GitHub repository](https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases), this must be accompanied by documented release notes including; evidence of game fully tested against all supported devices and browsers, [P2/P3 known issues](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/game-delivery-definitions.md#issue-prioritization) identified and accepted by BBC, device / browser test results, Tech Review Tool results, etc
 * Test cases - documentation describing the exact steps of a test case or script
 * **CBeebies games only** - Agency evidence of game tested in Playtime Island App Test App
 * **No [P1 issues](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/game-delivery-definitions.md#issue-prioritization)**
 * **No or limited [P2 issues](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/game-delivery-definitions.md#issue-prioritization)** with an agreed fix schedule
 * **No or limited [P3 issues](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/game-delivery-definitions.md#issue-prioritization)** with and agreed fix schedule

Analytics;
 * Mandatory BBC supplied [standardised game stats events](https://www.dropbox.com/s/109h149g3fahami/Alpha-Tier1-Mandatory-Stats.xlsx?dl=0) implemented (documentation can be found in the [Starter Pack](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/stats.md))
 * BBC supplied [game-specific statistics](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/stats.md) from Beta review integrated

Asset Delivery;
 * All layered HD PSD and Illustrator files,
 * HD PSD / Illustrator files and / or PNGs of the below (where applicable);
   * All in-game characters - 5x multiple poses,
   * Logos,
   * In-game items - collectibles, tools, weapons, clothes, vehicles, etc,
   * Game world backgrounds,
   * Character rigs for animating,
   * Level select UI elements,
   * GEL UI buttons.
 * Fonts
 * Game music (where not provided by the BBC) with copyright details in WAV format
 * Game sound effect files in WAV format
 * In-game script and voice over files

Social Media Package - Education games only;
 * 1x 30 second 'coming soon' trailer for the game in two aspect ratios (9:16 and 1:1)
 * 1x 30 second 'launch' trailer for the game in two aspect ratios (9:16 and 1:1)
 * 3x 20 second gameplay videos in two aspect ratios (9:16 and 1:1)
 * 3 x GIF files of animated moments from within the Full Game
 * 5x PNG promo images (1:1)
 * Holding image for the game, layered PSD of AI format
 * All the above must include brand-specific branding, fonts and subtitles. Clean versions with no subtitles or branding must also be provided to the BBC

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


## Issue Prioritization

To enable us to provide the agreed quality gates between releases, please use
 the following guidelines for identifying issue priorities:

### P1 Issues:

  * Major performance issues
  * Broken / incomplete user journeys
  * Major UX issues
  * Embed issues
  * Stats issues
  * Lack of core functionality
  * App and / or platform integration issues (where appropriate)
  * Crashes / lock-ups
  * Unacceptable video performance
  * Unacceptable audio performance
  * Embed issues
  * Issues on devices that are INSIDE the scope of BBC / developer control
  * Editorial issues

### P2 Issues:

  * Issues on devices that are OUTSIDE the scope of BBC / developer control**
  * Crashes / lock-ups that cannot be reproduced
  * Missing images
  * Missing sounds
  * Minor user interaction issues
  * General UX issues
  * Accessibility issues

### P3 Issues:

  * Occasional audio / video glitches
  * Minor UX tweaks
  * Missing version numbers
  * Spelling mistakes and typos


\** Issues outside the scope of BBC / dev control include
iOS / Android / Browser limitations that are caused by the software vendor and
may or may not be addressed in future releases. This also covers hardware
limitations of devices.

[Home](../README.md)
