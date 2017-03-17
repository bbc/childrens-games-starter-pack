# Main.js Structure

The main.js file should require the [GMI](./gmi.md) platform:

```
define(['gmi-platform'], function(gmi_platform) {
   // ...
});
```

Then get the GMI instance. This should only be called once throughout the entire game, and will be checked by the [Tech Review Tool](./tech-review-tool.md).

```
var gmi = gmi_platform.getGMI();
```

Find the `<div>` to contain the game, and inject the canvas and other required game elements inside.

```
var container = document.getElementById(gmi.gameContainerId);
```
