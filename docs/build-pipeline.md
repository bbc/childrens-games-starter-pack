# Build Pipeline

## Automated builds

This section outlines how you can get your game building to BBC Test servers for
testing and delivery. This covers both game code and .gdz files for use with mobile apps.

### Building your game

Our build servers make nvm and npm available to games. 

Our automated build pipeline automatically runs the [build.sh](../build-scripts/build.sh) file
every time you push changes to the Git repo. You should place all your necessary
compilation steps in here.

The build script should put all necessary files into a top level 'output' folder for
uploading to our servers once the script has finished running.

Please provide your BBC Technical Contact with any details of special software or
plugins that are required to build your game in the event our servers don't
already have them.

### Building for mobile apps

To automate the production of a .gdz file to be downloaded into an app, your
build steps should include a zip command that zips up the contents of the 'output' folder:
````
cd 'output'
zip -r starterpack.gdz -Z store . --exclude=*.sh* --exclude=*.svn* --exclude=*.git* --exclude=*.DS_Store*
````

This command can also be run locally to manually generate a .gdz file for local development.

We also request that you provide a method of building the .gdz with either minified
or un-minified code to assist with any debugging process, and provide some
documentation on how to do this.

See [Testing your game in a mobile app](testing-in-a-mobile-app.md#testing-in-a-mobile-app)
page to see how to test your game in an app.

#### Configuration.json

This file is required to initialise your game in an app environment. It should
be placed in the root directory and include the following fields:

* gameUrl: path to the main js file
* embedVars: this should equal the embedVars stored in our CMS, this must contain as a minimum:
  * statsAppName: cbeebies/cbbc as appropriate
  * statsCounterName: your TPM can provide you this value

We've included an [example file](../src/configuration.json) for reference.

### Build Complete

You will get email notifications with status reports on success/failure of any automated
builds. In the event of a failure you should get an error report with debug information.

On success your game code should now be on our servers and a .gdz file available for download.
The locations for these should be recorded in your individual Git repo's [Home README](../README.md)

[Home](../README.md)
