# Game Delivery Specifications

List of technical specifications that games must meet to pass certification.

| Delivery | Description |
|---------------|-------------|
| Code submitted to Github must be source code | The BBC must be able to edit, build and maintain the game without requiring any seperate proprietary software |
| Code must include a build script that builds the game from source and runs optimisation steps | Code submitted must be pre-minification and all steps required to produce production builds must be included in the build script and/or documented |
| A functional GDZ must be output as part of the build steps | GDZ's enable the BBC to run the game on all it's platforms. |
| CBeebies games only - the GDZ filesize must be less than 45MB | CBeebies games going into Playtime Island must adhere to filesize restrictions |
| CBeebies games only - the GDZ must load in the Playtime Island Test App  | Link to instructions |
| Test Plans must be included | The BBC requires a Test Plan to be delivered with each game  |
| Must be GMI compliant | Link to GMI compliance  |
| Must be GEL compliant | Link to GEL compiance |

| Performance | Description |
|---------------|-------------|
| Home screen loads and is interactive within 8 seconds | The play button should be interactive within 8 seconds to reduce idle time for children |
| No loading bar should apears on screen for longer than 4 seconds | Loading strategies should be employed to minimise in-game load times |
| Consistent framerate of at least 24fps on supported devices | The game should maintain an acceptable framerate |
| No single file should be larger than 10MB | Files should be optimised appropriately |

| Audio | Description |
|---------------|-------------|
| Game must supply 2 audio formats: OGG as default with MP3 fallback | OGG format is used for Android and MP3 for iOS |
| Audio bitrate for SFX should be 32k maximum | |
| Audio bitrate for music should be 64k maximum | |

## Guidance

### Loading
Info on: 
background loading? 

### Optimisation
Info on:
Texture compression
Image optimisation 
Audio optimisation
