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

[Home](../README.md)
