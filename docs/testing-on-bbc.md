# Testing your game in a Live CAGE enviroment

Once your game has successfully gone through the automated [build pipeline](build-pipeline.md) 
it will be available to view on a CAGE URL for example:

[https://www.bbc.co.uk/games/embed/childrens-games-starter-pack](https://www.bbc.co.uk/games/embed/childrens-games-starter-pack)

Your project manager can provide you with the correct URL for your game 
and it should be reflected in your [README](../README.md)

### viewNonPublished & versionOverride querystrings
Before your game has gone live the plain URL provided will 404 until a BBC 
staff member makes it audience facing by publishing it. 

Until then you can use `viewNonPublished=true` to view unpublished games 
and `versionOverride=#` to point at specific build versions, for example:

* versionOverride - specify a specific build number. Our build pipeline will 
always show you your latest build when `latest` is specified: 
[https://www.bbc.co.uk/games/embed/childrens-games-starter-pack?versionOverride=latest](https://www.bbc.co.uk/games/embed/childrens-games-starter-pack?versionOverride=latest)

* viewNonPublished - this is a boolean value which is useful if your game is 
not yet audience facing. If your game is already audience facing it won't 
do much unless there are configuration/metadata changes:
[https://www.bbc.co.uk/games/embed/childrens-games-starter-pack?viewNonPublished=true](https://www.bbc.co.uk/games/embed/childrens-games-starter-pack?viewNonPublished=true)

### in-situ iframe
In order to see your work in progress game in-situ in an iframe you can follow
the instructions on this page: [testing-on-cbbc-page](testing-on-cbbc-page.md).
