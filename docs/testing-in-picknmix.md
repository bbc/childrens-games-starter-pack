# Testing in PickNMix

To test your game working in the app you will need to to do the following:

1. Host your .gdz file

   If you have enabled [automated builds](build-pipeline.md#building-for-apps) 
   of your .gdz file your .gdz should be hosted on our servers. You should find 
   the location [here](../README.md#important-links). 

   Alternatively you can generate the .gdz manually and host it yourself for local debugging:
   ````
   zip -r starterPack.gdz -Z store . --exclude=*.sh* --exclude=*.svn* --exclude=*.git* --exclude=*.DS_Store*
   ````
2. Download the PickNMix App in Test Mode here (You will need to request access via your BBC TPM):

   * [Hockeyapp](https://rink.hockeyapp.net/manage/dashboard)

3. Run the app and click on the 'Add Game' button; enter the url for your .gdz file 
and click download. Once it has finished downloading you can press play.

   _Note: To enable debugging on Apple (and also available on Android but not required) `window.gameSettings.debugEnable` should be set to true._
   

## Common Issues

1. *Testing/Debugging in iOS*
Unfortunately there is no way to debug problems within the iOS app due to restrictions/limitations in the Apple development ecosystem. Debugging on Android using Chrome is very easy and hopefully (in conjunction with testing on the Web), we will catch most problems that would also effect iOS. 

2. *Status Codes in Android*
XMLHttpRequests on Android don't return appropriate status codes i.e. 200. As a result we recommend you check for status 200 or 0 and treat 0 as a success code. 

3. *Audio*
Many android devices have issues playing mp3 audio in the app. One way around this is to provide ogg as the primary audio format with mp3 as the fallback. On iOS devices ogg will be ignored and mp3s will play, on android ogg will play sidestepping the mp3 problems.


[Home](../README.md)
