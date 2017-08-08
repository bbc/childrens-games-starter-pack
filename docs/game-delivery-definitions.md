# Game Delivery Definitions

[Tech reviews](tech-review.md) take place at Alpha, Beta and Release Candidate
stages. Feedback should be acted upon for the next delivery as all checks
must pass.

> The BBC has a contractual right to evaluate and test each Deliverable in
accordance with the Acceptance Tests (to be agreed with the supplier and based
on the Game Delivery Definitions outlined below) to determine whether
Acceptance can be given, which may trigger any payment due in relation
to the tested Deliverable.

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
  * Accessibility 
  * Agreed with the BBC which of the 'Inclusive Gameplay' features will be implemented and at which stage of deliveryClickable wireframes

NB - This phase will also require the production of a schedule for the full game development and also agreed with the BBC which of the ‘Inclusive Gameplay’ features (see Games GEL documentation) will be implemented and at which stage of delivery.


## Alpha

> A working Alpha game delivery has all the basic core concepts in place allowing for technical and user performance testing to resolve any gameplay issues, small bugs and early game balancing.

### Alpha delivery of the Software for the Deliverables (including Source Code and Object Code)

  * Core functionality for gameplay in place
  * Early game balancing in place
  * Graphics may be placeholders
  * Initial game download size MUST BE under 15MB
  * Total uncompressed game GDZ file size MUST BE under 45MB (with prior BBC agreement, occasional exceptions can be made)
  * Agency evidence of game smoke tested against primary, secondary and tertiary devices/browsers and in App Test harness  (Playtime Island for CBeebies, Pick n Mix for CBBC) via Hockey app (iOS, Android Crosswalk and Webview)
  * Documented release notes including P1/P2/P3 known issues identified and accepted
  * UI layout and full end-to-end screen flow implemented, as per Games GEL across two breakpoints
  * Consideration has been given to ‘Baseline Accessibility’ as per Games GEL
  * Settings screens implemented across two breakpoints and compliant with Games GEL.
  * Implementation of the BBC Games Messaging Interface
  * Initial BBC supplied standardised game stats event implemented: game_loaded, game_first_click, game_click, timer
  * Deployed on CBBC or CBeebies platform using BBC GitHub build process
  * Agreed User Testing and Stakeholder feedback from Pre-production phase addressed


## Beta

> A working Beta game delivery has full game functionality, structure and assets in place and is ready for Technical and User Testing to aid final gameplay balancing and bug final bug identification and fixing.

### Beta version of the Software for the Deliverables (including Source Code and Object Code)

  * Gameplay and core functionality complete, with full end-to-end play 
  * Final game balancing underway
  * All final assets SHOULD BE in place
  * Game must gracefully scale to ensure a good user experience on all supported devices, eg. asset resolutions, number of sound files loaded, etc (to be discussed and agreed with BBC)
  * If the game is being packaged into a Pick n Mix app, agency supplied app specific graphics (e.g. splash screen, loading page) as described here: https://myshare.box.com/s/urmavwev77q063s5fzussov3fg7eexhc 
  * If the game is being launched in Playtime Island, agency supplied draft assets for the Playtime Island menu, as specified here: https://myshare.box.com/s/8mh7xp2u1qnmtw6u4ra7xyjtprkdxfn3
  * Initial game download size MUST BE under 15MB
  * Total uncompressed game GDZ file size MUST BE under 45MB (with prior BBC agreement, occasional exceptions can be made)
  * Agency evidence of game fully tested against primary, secondary and tertiary devices/browsers and in App Test harness  (Playtime Island for CBeebies, Pick n Mix for CBBC) via Hockey app (iOS, Android Crosswalk and Webview)
  * Documented release notes (including P1/P2/P3 known issues identified)
  * Visual design is applied to GEL UI
  * All ‘Baseline Accessibility’ has been implemented (see Games GEL section '8 Requirements For Inclusive Design')
  * Any agreed ‘Inclusive Gameplay’ features are in place
  * All BBC supplied standardised game stats events implemented: game_loaded, game_first_click, game_level, etc
  * All BBC supplied game specific statistics integrated
  * Localisation functionality integrated and tested (if required)
  * Deployed on CBBC or CBeebies platform using BBC GitHub build process
  * Agreed User Testing outcomes and Stakeholder feedback from Alpha addressed
  * No known P1 issues
  * Limited P2 issues identified
  * Limited P3 issues identified


## Release Candidate

> A working Release Candidate game delivery is fully complete and ready for Certification and Technical Testing. When this is delivered to the BBC, the game team have a week in which to do a final review before submitting it for Certification.

### Release Candidate version of the Software for the Deliverables (including Source Code and Object Code)

  * Game meets the detailed specification set out in Schedule 1
  * Gameplay and core functionality complete, with full end-to-end play
  * All final assets in place 
  * Game must gracefully scale to ensure a good user experience on all supported devices, eg. asset resolutions, number of sound files loaded, etc (to be discussed and agreed with BBC)
  * If the game is being wrapped into an app, agency supplied final graphics for submission to app stores as described here: https://myshare.box.com/s/urmavwev77q063s5fzussov3fg7eexhc 
  * If the game is being added to Playtime Island, final graphics for the menu as described here: https://myshare.box.com/s/8mh7xp2u1qnmtw6u4ra7xyjtprkdxfn3
  * Initial game download size MUST BE under 15MB
  * Total uncompressed game GDZ file size MUST BE under 45MB (with prior BBC agreement, occasional exceptions can be made)
  * Implementation of the BBC Games Messaging Interface
  * Agency evidence of game fully tested against primary, secondary and tertiary devices/browsers and in App Test harness  (Playtime Island for CBeebies, Pick n Mix for CBBC) via Hockey app (iOS, Android Crosswalk and Webview)
  * Documented release notes (including P1/P2/P3 known issues identified and accepted)
  * Visual design is applied to GEL UI
  * All ‘Baseline Accessibility’ has been implemented (see Games GEL section '8 Requirements For Inclusive Design')
  * Any agreed ‘Inclusive Gameplay’ features are in place
  * All BBC supplied game stats events implemented (standard and game specific)
  * Deployed on CBBC or CBeebies platform using BBC GitHub build process
  * Agreed user testing outcomes and stakeholder feedback from Beta addressed
  * No P1 issues
  * No or limited P2 issues with an agreed fix schedule
  * No or limited P3 issues with and agreed fix schedule
 

## Gold Master

> Gold Master is a term used to describe the build of a game that has passed Certification. It is not actually a specific delivery.

### Gold Master version of the Software for the Deliverables (including Source Code and Object Code)

  * No P1, P2 or P3 issues as identified and accepted during Certification
  * Game meets the detailed specification set out in Schedule 1
  * Delivered with full regression on primary, secondary and tertiary devices
  * Release notes
  * Final build has been tagged in GitHub
  * Has passed Certification
  * Ready for live


##  Post-production

> Following game release all final game code, assets and documentation should be submitted for the Deliverable Review. This phase also includes any planned game updates, game data analysis, game maintenance and project closedown.

This should include, but not limited to:
  * Post Project Review - a face to face meeting to be held with agency and BBC representatives
  * Vanilla game version free of any BBC specific deliverables (e.g. GMI, game stat events, branding, etc)
  * Version 1.1 – a post-launch update to address any gameplay issues indicated as required from BBC analytics (likely to be changes to difficulty or tweaks to level design)
  * Final game source
  * Build scripts
  * Build notes
  * Configuration files and scripts
  * Asset source files (e.g PSDs, AIs, animations, sound files, fonts etc)
  * Any licenses associated with assets for use by the BBC across all media
  * Deliverable and Code Review pass
  * Closedown of JIRA project tickets
  * Post Project Review notes


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
