# Game Specifications

List of technical specifications that games must meet to pass certification.

| Delivery | Description |
|---------------|-------------|
| Code submitted to Github must be source code | The BBC must be able to edit, build and maintain the game without requiring any seperate proprietary software |
| Code must include a build script that builds the game from source and runs optimisation steps | Code submitted must be pre-minification and all steps required to produce production builds must be included in the build script and/or documented |
| A functional GDZ must be output as part of the build steps | GDZ's enable the BBC to run the game on all BBC platforms. |
| CBeebies games only - the GDZ filesize must be less than 55MB | CBeebies games going into Playtime Island must adhere to filesize restrictions |
| CBeebies games only - the GDZ must load in the Playtime Island Test App  | [Instructions](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/testing-in-a-mobile-app.md#testing-in-a-mobile-app) |
| Test Plans must be included | The BBC requires a Test Plan to be delivered with each game  |
| Must be GMI compliant | [GMI compliance](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/working-with-gmi.md)  |
| Must be GEL compliant | [GEL compliance](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/gel-guidelines.md#gel-guidelines-accessibility-and-icon-assets) |

| Performance/Behaviour | Description |
|---------------|-------------|
| Home screen loads and is interactive within 8 seconds | The play button should be interactive within 8 seconds to reduce idle time for children |
| No loading bar should appear on screen for longer than 4 seconds | Loading strategies should be employed to minimise in-game load times |
| Consistent framerate of at least 24fps on supported devices | The game should maintain an acceptable framerate |
| No single file should be larger than 10MB | Files should be optimised appropriately |
| Game must pause all functionality when it loses visibility | All gameplay, background processes, animations and audio should be paused if game loses visibility/focus ie tab switched or window minimised |

| Audio | Description |
|---------------|-------------|
| Game must supply audio in AAC in MP4 format | AAC MP4 audio should work on all supported devices and browsers |
| Audio bitrate for SFX should be 32k maximum | Audio sound effects to have a lower bitrate than regular audio |
| Audio bitrate for music should be 64k maximum | Audio to be capped at 64k to reduce filesize |

## Guidance

### Pausing the game
* The [Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API) is recommended for detecting when to pause functionality.
* Exceptional situations should still take Page Visibility into account and behave accordingly i.e. online games can remain active but audio should not be heard when switching tabs

### Loading
We should employ techniques to reduce the amount of idle time a user faces a loading bar. These include: 
* Background loading - pre-emptively load assets in the background while the user is interacting with loaded content
* Reduce number of network requests - use image/audio sprites where they make sense
* Employ optimisation techniques to reduce asset sizes
* Only load required assets - remove old or unused assets from the loading process
* Unload assets when no longer needed to reduce memory footprint

