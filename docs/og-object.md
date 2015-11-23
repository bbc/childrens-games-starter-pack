# og Object

The og object is used to access globally available data and functions.

It is accessible from the window.og object and are therefore easily accessible from JavaScript.
If you are using Unity you can use the Application.ExternalCall() function or in Flash use ExternalInterface.call().

## Data fields

##### og.embedVars
Contains the JavaScript object that was entered as JSON in the 'Set-up Data'
field in the GamesGrid CMS.

##### og.environment
Returns the environment name that the game is being served from. This will be
 "test" or "live".

##### og.exitGameUrl
The game's exit button should navigate to the URL provided by this field. The
 URL can be provided by setting the 'Exit Game URL' field in the GamesGrid 
 CMS or as an escaped query string on the games URL. The exit URL is usually set
  to the game page where the game is embedded.

##### og.gameContainerId
Specifies the ID of the HTML div that your game should fill (only relevant 
to JavaScript games).

##### og.gameUrl
The URL of your main game file as entered into the GamesGrid CMS.

##### og.gameDir
The URL of the directory containing your main game file. This is convenient for
converting relative asset paths into absolute ones.

##### og.isFullScreen
The game should use this flag to decide whether to show the exit button
(and potentially other full-screen-related functionality) rather than detecting
full screen status itself. This flag will be false if the game is currently
embedded in an iframe or true if the page has been redirected to the Playpen.

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

## JavaScript Games
Your game should fill the HTML element with the ID specified in
*og.gameContainerId*. If the game has particular size or aspect ratio
requirements these should be specified in the GamesGrid CMS so that this
element is automatically sized appropriately.

Your main script (path specified in the GamesGrid CMS) will be loaded by 
RequireJS, but this does not mean that you have to use RequireJS in your 
implementation. If you do, you can define a module that returns an object 
containing an init function and this will be called to start your game, 
passing og as a parameter. Otherwise just start your game in your main script.

### RequireJS Example
````
define(function(require) {
    var Submodule = require("./Submodule"); // relative module
    var cssUrl = require.toUrl("./css/style.css"); // relative resource

    function init(og) {
        var container = document.getElementById(og.gameContainerId);
        container.innerHTML = (
            '<div style="width:100%; height:100%; padding:1em; background-color:powderblue;">'
            +   '<pre style="font-family: monospace;">'
            +       'og = ' + JSON.stringify(og, null, 4)
            +       '\n\ncssUrl = ' + cssUrl
            +   '</pre>'
            +'</div>');
    }

    return {
        init: init
    }
});
````

### Plain JS Example
````
var cssUrl = og.gameDir + "css/style.css"; // relative resource

var container = document.getElementById(og.gameContainerId);
container.innerHTML = (
    '<div style="width:100%; height:100%; padding:1em; background-color:moccasin;">'
    +   '<pre style="font-family: monospace;">'
    +       'og = ' + JSON.stringify(og, null, 4)
    +       '\n\ncssUrl = ' + cssUrl
    +   '</pre>'
    +'</div>');
````