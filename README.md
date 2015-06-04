# Children's Starter Pack
This is the Starter Pack for Children's games which contains some helpful bits and pieces a games developer might need to start building a HTML5 game for Children's. 

## Automated builds

Our automated build pipeline automatically runs the /build-scripts/build.sh file everytime you push changes to the repo. Therefore this file is a convenient location to place all the steps your game needs to compile.  

You'll see that right now it simply outputs a "Hello World!" gettingstarted.txt file - feel free to edit and push to see your changes work their way through our pipeline to our Test environment (your BBC TPM can show you where to find this file if you don't know where it can be viewed).
 
Please provide your BBC Technical Lead with any details of special software or plugins that are required to build your game otherwise your automated build may fail.

Everything in this Starter Pack can be deleted so you can start afresh, but we do recommend you keep the build.sh file itself (the contents can be replaced). 

If you do wish to replace the build.sh file with your own build script(s), please liaise with your BBC Technical Lead who can help implement any alternatives on the pipeline.

## Updating your pack

On some occassions you might want to update your Starter Pack. Our Starter Pack repo has been added as a remote upstream repository so you can simply run the following commands to update your Pack:

git fetch upstream

git merge upstream/master

Bear in mind this may cause some conflicts or previously deleted files to re-appear as with any merge. We don't recommend doing this once the project has made significant progress/changes.

