# Definition of Done

A game isn't defined as "done" unless it meets all of the following criteria (where applicable):

# Delivery definitions

[Tech reviews](tech-review.md) take place at Alpha, Beta and Release Candidate 
stages. Feedback should be acted upon for the next delivery as all checks 
must pass. 

##Alpha

Alpha version of the Software for the Deliverables (including Source Code and Object Code) Core GamePlay Prototype for technical and user performance testing

* Complete user journey through menus, help screens, etc including any transitions and preloaders
* Core functionality for gameplay
* Graphics may be placeholders
* Full download weight of assets  (including audio and graphical elements)
* GAPI authentication and services to be implemented (if applicable).
* Deployed on platform and hosted from play.test.bbc.co.uk/play/pen/*[GID]*
* Agency Developer/QA  tested against primary devices and browsers

###Testing Deliverables

* Test plan (including scope of devices and browsers the developers will be using for testing)
* Draft test script

##Beta

Beta version of the Software for the Deliverables (including Source Code and Object Code)   Full game structure, suitable for thorough quality assurance, user and technical testing

* All final graphic elements in place
* Gameplay and core functionality complete, with full end to end play.
* Full functionality for integrated systems; Games Grid, Echo/iStats, Sign in, High scores, etc. (if applicable).
* Deployed on platform and hosted from play.test.bbc.co.uk/play/pen/**GID**
* Agency Developer/QA tested against primary, secondary and tertiary devices/browsers
* P1 issues, P2 issues, P3 issues acceptable

###Testing Deliverables

* Test results with a full list of all issues discovered so far
* Any updates to the test plan and test script

##Release Candidate

RC version of the Software for the Deliverables (including Source Code and Object Code)

* Release Candidate
* This should meet the detailed specification set out in Schedule 1
* Deployed on platform and hosted from play.stage.bbc.co.uk/play/pen/**GID**
* BBC QA certification to be performed
* No P1 issues, limited P2 issues with an agreed fix schedule, limited P3 issues with and agreed fix schedule

###Testing Deliverables

* Test results with a full list of all open issues

##Gold

Gold version of the Software for the Deliverables (including Source Code and Object Code)

* Release Candidate with no P1, P2 or P3 issues as identified in QA Certification
* BBC Tech Review to take place at this stage
* This should meet the detailed specification set out in Schedule 1
* Delivered with full regression on primary, secondary and tertiary devices

##Post release

All game code, assets and documentation should be submitted following the RC version delivery (see checklist). The game and docs should be compile-ready as is possible, with complete documentation.
Issue Prioritization

To enable us to provide the agreed quality gates between releases, please use the following guidelines for identifying issue priority:

###P1 Issues:

* Broken / incomplete user journeys
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

###P2 Issues:

* Issues on Primary devices that are OUTSIDE the scope of BBC / developer control**
* Crashes / lock-ups that cannot be reproduced
* Missing images
* Missing sounds
* Minor user interaction issues
* Issues on Secondary devices that are INSIDE the scope of BBC / developer control
* Issues on Tertiary devices that are INSIDE the scope of BBC / developer control
* General UX issues

###P3 Issues:

* Issues on Secondary devices that are OUTSIDE the scope of BBC / developer controls**
* Issues on Tertiary devices that are OUTSIDE the scope of BBC / developer control**
* Occasional audio / video glitches
* Minor UX tweaks
* Missing version numbers

** Issues outside the scope of BBC / dev control include iOS / Android / Browser limitations that are caused by the software vendor and may or may not be addressed in future releases. This also covers hardware limitations of devices.