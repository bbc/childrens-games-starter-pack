# og Object

The og object used to be used to access globally available data and functions.

This is no longer the case- these values are now read-only properties in the [GMI](gmi.md#variables).

If you are using Unity you can use the Application.ExternalCall() function or in Flash use ExternalInterface.call().

### Functions

##### og.resizeFrame(width, height)
Allows the game to change the size of its containing iframe when the game needs
more space. This will have no effect if the game is running full screen, where
there is no iframe. A falsey value for width or height will be ignored,
allowing a single dimension to be updated. Most games will not need this
function as the Playpen will maintain the aspect ratio of the iframe
automatically. This function is intended for games that change their aspect
ratio dynamically.

##### og.goFullScreen()
Directs the browser to load the Playpen page directly, resulting in the game
reloading and filling the browser window. This is only useful if the game is
currently embedded in an iframe.


[Home](../README.md)
