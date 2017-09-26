# Testing your game in the Live environment

While we provide a Game Embed Page as an area to test games in a fullscreen context, 
we recommend that you test your game when embedded on a CBBC/CBeebies webpage at the
earliest opportunity to verify behaviour in-situ.

To help facilitate this, we have created a bookmarklet, to be used on this
[live game testing page](https://www.bbc.co.uk/cbbc/games/embed-test-v1). It essentially replaces the source of the current
(non-existent) game with your own:

```javascript
javascript:(function () {
    var game = "https://www.bbc.co.uk/cbeebies/embed/game/<gid>";
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
