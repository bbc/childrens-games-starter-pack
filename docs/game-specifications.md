# Game Specifications

List of technical specifications that games must meet to pass certification.

| Delivery | Description |
|---------------|-------------|
| Code submitted to Github must be source code | The BBC must be able to edit, build and maintain the game without requiring any seperate proprietary software |
| Code must include a build script that builds the game from source and runs optimisation steps | Code submitted must be pre-minification and all steps required to produce production builds must be included in the build script and/or documented |
| Dependency Management | All dependencies must be stored in the game repo or hosted in public/open sources such as NPM. Proprietary/privately owned sources are not acceptable including private servers and Github accounts |
| A functional GDZ must be output as part of the build steps | GDZ's enable the BBC to run the game on all BBC platforms. |
| CBeebies games only - the GDZ filesize must be less than 55MB | CBeebies games going into Playtime Island must adhere to filesize restrictions |
| Test Plans must be included | The BBC requires a Test Plan to be delivered with each game  |
| Must be GMI compliant | [GMI compliance](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/working-with-gmi.md)  |
| Must be GEL compliant | [GEL compliance](https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/gel-guidelines.md#gel-guidelines-accessibility-and-icon-assets) |

| Performance/Behaviour | Description |
|---------------|-------------|
| Must implement the Interactive Home Screen Principle | See [Guidance - Interactive Home Screen](#interactive-home-screen) |
| Must implement appropriate loading strategies throughout experience | See [Guidance - Loading](#loading) |
| Consistent framerate of at least 24fps on supported devices | The game should maintain an acceptable framerate |
| No single file should be larger than 10MB | Files should be optimised appropriately |
| Game must pause all functionality when it loses visibility | See [Guidance - Pausing the game](#pausing-the-game) |

| Audio | Description |
|---------------|-------------|
| Game must supply audio in AAC in MP4 format | AAC MP4 audio should work on all supported devices and browsers. If your chosen game framework does not support this format, supply all audio as MP3. |
| Audio bitrate for SFX should be 32k maximum | Audio sound effects to have a lower bitrate than regular audio |
| Audio bitrate for music should be 64k maximum | Audio to be capped at 64k to reduce filesize |

| CSS | Description |
|---------------|-------------|
| CSS should be namespaced to game specific HTML elements | There should be no CSS applied by the game code to the containing page or any BBC elements |

| WEBGL | Description |
|---------------|-------------|
| All games that run in WebGL should enables CORS images | Game should check if the domain of the asset (gmi.gameDir) is the same as the window and if not add "anonymous" crossOrigin attribute on all image requests, ref: https://webglfundamentals.org/webgl/lessons/webgl-cors-permission.html |


## Guidance

### Pausing the game
* All gameplay, background processes, animations and audio should be paused if game loses visibility/focus ie tab switched or window minimised
* The [Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API) is recommended for detecting when to pause functionality.
* Exceptional situations should still take Page Visibility into account and behave accordingly i.e. online games can remain active but audio should not be heard when switching tabs

### Interactive Home Screen
According to the GEL Guidelines the first thing a user sees should be the Home Screen. Developers should ensure that this initial load is an optimised process:
* First load should only load assets required to render the Home Screen (should not exceed 15MB)
* Assets used to render Home Screen should be kept light and optimised
* Fire game_loaded stat upon succesful render
* Employ loading strategies such as thhose described below to load the rest of the game appropriately

### Loading
We should employ techniques to reduce the amount of idle time a user faces a loading bar. These include: 
* Background loading - pre-emptively load assets in the background while the user is interacting with loaded content
* Reduce number of network requests - use image/audio sprites where they make sense
* Employ optimisation techniques to reduce asset sizes
* Only load required assets - remove old or unused assets from the loading process
* Unload assets when no longer needed to reduce memory footprint

