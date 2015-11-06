# Automated builds

Our automated build pipeline automatically runs the /build-scripts/build.sh file
everytime you push changes to the repo. Therefore this file is a convenient
location to place all the steps your game needs to compile.

You'll see that right now it simply outputs a "Hello World!" main.js
file - feel free to edit and push to see your changes work their way through our
pipeline to our Test environment (your BBC TPM can show you where to find this
file if you don't know where it can be viewed).

By default our build jobs will run the build script and then transfer the
/output folder to the Test environment. If you wish to transfer different files
contact your BBC Technical Lead.

Please provide your BBC Technical Lead with any details of special software or
plugins that are required to build your game otherwise your automated build may
fail.

Everything in this Starter Pack can be deleted so you can start afresh, but we
do recommend you keep the build.sh file itself (the contents can be replaced).

If you do wish to replace the build.sh file with your own build script(s),
please liaise with your BBC Technical Lead who can help implement any
alternatives on the pipeline.

[Home](../README.md)