# You should place all your build steps in this script which will be run by our automated build pipeline
# This script is run from the project root - you can cd around as you need to
# Your build steps should build your game to a root-level output folder as demonstrated below, this folder is then uploaded to our servers
# If you require any specific software to be installed please consult your BBC Technical Lead/TPM
# If the build fails you should receive an email with failure information
# When you commit the following code, you can check the pipeline is working by checking the main.js file on the Test environment or by
# viewing the play.test page for your project (get the URLs from the TPM)

# Make a change to this file (the hello world string) and commit it to kick
# off the automated build pipline. The resulting page on TEST shows
# examples of using echo stats and local storage with an external configuration
# file (from src/*).

# 'build' the src files to output directory
mkdir output
cp src/* output

# edit the string below and commit to see your changes reflected
helloWorldFunc="function appendHelloWorld() { \
	var content = document.createElement('div'); \
	content.innerHTML = 'Hello World! Edit me in build.sh and commit to Git to see the automated build pipeline in action!'; \
	container.appendChild(content); \
}"

# replaces the appendHelloWorld function in main.js with the one above
sed "s/function appendHelloWorld() {}/$helloWorldFunc/g" output/main.js > output/main.tmp && mv output/main.tmp output/main.js