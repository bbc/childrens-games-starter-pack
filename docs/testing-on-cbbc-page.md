# Testing your game in-situ on the Children's Websites

While we provide a Game Embed Page as an area to test games in a fullscreen context, 
we recommend that you test your game in-situ on a CBBC/CBeebies webpage at the
earliest opportunity.

If you are are updating an existing game you can simply visit the existing page and 
append a querystring to see the latest build:

`https://www.bbc.co.uk/cbbc/games/embed-test-v1?versionOverride=latest`

If it's a brand new game and doesn't have a page, you can use the technique described below.

We have created a bookmarklet, to be used on this [live game testing page](https://www.bbc.co.uk/cbbc/games/embed-test-v1). It essentially replaces the source of the current game with your own:

```javascript
javascript:(function () {
    var game = "https://www.bbc.co.uk/cbbc/embed/game/<gid>";
    var frameHolder = document.getElementsByClassName("game-wrapper")[0];
    var iframe = frameHolder.getElementsByTagName("iframe");
    if (iframe.length === 0) {
        var loadBtn = frameHolder.getElementsByTagName("button")[0];
        loadBtn.click();
    }
    iframe[0].setAttribute("src", game);
 }());
 ```

- fill in your games ID (gid)
- in your browser, add a new bookmark with the URL set to the code above
  - Note: you can not copy javascript code directly into the URL bar. You must
    use your browser's bookmark manager
- visit http://www.bbc.co.uk/cbbc/games/embed-test-v1
- click your new bookmark

[Home](../README.md)
