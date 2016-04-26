# Tech Review Tool

# Information for Users

## A note on caching
Chrome cache MUST be enabled in order to accurately test with this tool. In order to do this, please ensure that 'Disable cache' is NOT checked within the network tab in your developer tools.

## Installation

Install the [BBC Digital Children's Games Tech Review Tool](https://chrome.google.com/webstore/detail/bbc-digital-childrens-gam/obhojgkahkhapohjnijhehgfkpceogcb) from the Google Web Store.


## Using the Extension

* Visit a game webpage that requires a technical review (such as http://play.test.bbc.co.uk/play/pen/{GID})
* Open developer tools and click on Tech Review tab

For accurate results:

* Ensure cache is not disabled in dev tools.
* Click the "Reload and Run" button. This will clear the cache, reload the page and run the checks on every request that comes in.

####Note about og/GMI checks:

If a game is found to be using GMI (makes a call to .getGMI), then the og checks are removed from the results table and replaced with GMI related checks.

Both og and GMI checks search for the presence of variables and functions. To accommodate minified code or naming of variables, the tool does not search for 'og.xyz' or 'gmi.xzy'. Instead, it simply searches for '.xyz'. For this reason, the tool may result in false positives or negatives. Therefore it is advisable to take these results as an indication and  perform manual checks in addition to using the tool.

[Home](../README.md)
