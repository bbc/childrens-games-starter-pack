# Using Local Storage/Cookies

If a game uses local storage or cookies it needs to check that the user has 
opted in to their usage on the BBC.  

## Opting In 

Opting in is via the the prompt that is shown to users when they visit any BBC 
page. Alternatively, the user can set their preferences at:
[Manage Cookie Settings (TEST)] or [Manage Cookie Settings (LIVE)].

Legally, opting in/out of cookies consequently means opting in/out of local 
storage.


## Abiding by Local Storage/Cookie Settings

The cookie that needs to be checked is the 'Functionality' cookie, not the 
'Performance' cookie. Any functionality cookie is identifiable by the prefix 
"ckps" i.e. "cookie personalisation". 

To check that cookies are enabled, first check the user is on a BBC page:

````
!window.bbccookies
````

then check if it would be possible to store a functionality cookie called 
"ckps_a_func_cookie":

````
window.bbccookies.isAllowed("ckps_a_func_cookie");
````

Together, this could create a helper function: 

````
    function cookiesAreAllowed() {
        // NOTE: Always allows saving data if not within a BBC Barlesque or Playpen page:
        return !window.bbccookies || window.bbccookies.isAllowed("ckps_a_func_cookie");
    }
````

### Example 
A [local storage example](../src/local-storage.js) has been created using the 
code above. Build the project (see [build.sh](./build-scripts/build.sh)) to 
see the code running. 

Change your preferences at [Manage Cookie Settings (TEST)] to see the demo 
behave differently. Specifically note that data will not be saved if the 
'Functionality' cookie is disabled.


[Manage Cookie Settings (TEST)]: http://www.test.bbc.co.uk/privacy/cookies/managing/cookie-settings
[Manage Cookie Settings (LIVE)]: http://www.bbc.co.uk/privacy/cookies/managing/cookie-settings
