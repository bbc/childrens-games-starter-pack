# Known issues

This document contains technical notes detailing any known issues.

## Slow loading / crashing while loading in mobile app on android

When using howler.js for audio, there have been multiple games having slow loading issues on Android devices in crosswalk (Android app web browser). The solution to this issue has been to incrementally load in audio, rather than loading it all up front. This can be done by using multiple smaller audio sprite sheets instead of one large one.