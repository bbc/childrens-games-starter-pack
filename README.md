# Children's Starter Pack
This is the Starter Pack for Children's games which contains some helpful bits and pieces a games developer might need to start building a HTML5 game for Children's.

## Automated builds

Our automated build pipeline automatically runs the /build-scripts/build.sh file everytime you push changes to the repo. Therefore this file is a convenient location to place all the steps your game needs to compile.

You'll see that right now it simply outputs a "Hello World!" gettingstarted.txt file - feel free to edit and push to see your changes work their way through our pipeline to our Test environment (your BBC TPM can show you where to find this file if you don't know where it can be viewed).

By default our build jobs will run the build script and then transfer the /output folder to the Test environment. If you wish to transfer different files contact your BBC Technical Lead.

Please provide your BBC Technical Lead with any details of special software or plugins that are required to build your game otherwise your automated build may fail.

Everything in this Starter Pack can be deleted so you can start afresh, but we do recommend you keep the build.sh file itself (the contents can be replaced).

If you do wish to replace the build.sh file with your own build script(s), please liaise with your BBC Technical Lead who can help implement any alternatives on the pipeline.

## Testing your game in the Live environment

We recommend that you test the game works correctly when embedded on a CBBC/Cbeebies webpage, at the earliest opportunity. This will indicate any issues and allow time for fixes e.g. we have previously seen pressing the space bar scroll the webpage instead of react in game.

To do this, we have created a bookmarklet, to be used on this [live game testing page](http://www.bbc.co.uk/cbbc/games/embed-test-v1). It essentially replaces the source of the current (non-existent) game with your own:

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
  - Note: you can not copy javascript code directly into the URL bar. You must use your browsers bookmark manager
- visit http://www.bbc.co.uk/cbbc/games/embed-test-v1
- click your new bookmark

## Updating your pack

On some occassions you might want to update your Starter Pack. Our Starter Pack repo has been added as a remote upstream repository so you can simply run the following commands to update your Pack:

git fetch upstream

git merge upstream/master

Bear in mind this may cause some conflicts or previously deleted files to re-appear as with any merge. We don't recommend doing this once the project has made significant progress/changes.

