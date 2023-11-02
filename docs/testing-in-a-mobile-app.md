# Testing in a mobile app

To test your game on mobile you will need to to do the following:

1. Visit the following URL on the mobile device on the supported device list (check with the BBC PM for the correct brand/url):
https://baseplates.uap.int.api.bbci.co.uk/playtime-island/test/index.html?animations=off#/brand/[insert brand here]

2. Select and download the game that needs testing onto the device from the on screen prompts.

3. Carry out game testing. 

The test site url is always set to "latest" so when you upload a new build to Github, you will need to delete the build on your device and re-download the "latest" build.

To do this, go to the "My Games" section on the Island carousel, find your game and click on the red dustbin icon - the game will be deleted. Then go back to the brand page and re-download your latest build.

## Common Issues

1. *Status Codes in Android*
XMLHttpRequests on Android don't return appropriate status codes i.e. 200. As a
result we recommend you check for status 200 or 0 and treat 0 as a success code.

3. *Audio*
Many Android devices have issues playing mp3 audio in the app. One way around
this is to provide ogg as the primary audio format with mp3 as the fallback.
On iOS devices ogg will be ignored and mp3s will play, on android ogg will
play sidestepping the mp3 problems.


[Home](../README.md)
