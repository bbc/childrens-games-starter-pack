# Testing your game in the Live environment

While we provide Playpen as an area to test games, we recommend that you test
your game works correctly when embedded on a CBBC/CBeebies webpage at the
earliest opportunity. This will indicate any issues and allow time for fixes
e.g. we have previously seen issues with the game gaining focus resulting in
problems such as keyboard controls not responding in game.

To help facilitate this, we have created a bookmarklet, to be used on this
[live game testing page]. It essentially replaces the source of the current 
(non-existent) game with your own:

```javascript
javascript:(function () {
    var game = "http://play.test.bbc.co.uk/play/pen/<gid>";
    var frameHolder = document.getElementById("og-frame-holder");
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
    use your browsers bookmark manager
- visit http://www.bbc.co.uk/cbbc/games/embed-test-v1
- click your new bookmark

[Home](../README.md)

[live game testing page]: http://www.bbc.co.uk/cbbc/games/embed-test-v1