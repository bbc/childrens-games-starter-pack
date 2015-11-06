# You should place all your build steps in this script which will be run by our automated build pipeline
# This script is run from the project root - you can cd around as you need to
# Your build steps should build your game to a root-level output folder as demonstrated below, this folder is then uploaded to our servers
# If you require any specific software to be installed please consult your BBC Technical Lead/TPM
# If the build fails you should receive an email with failure information
# When you commit the following code, you can check the pipeline is working by checking the main.js file on the Test environment or by
# viewing the play.test page for your project (get the URLs from the TPM)


# The following code outputs a short script to output/main.js that adds a hello world message to the DOM on load
cat <<EOT >> output/main.js
(function()
{
	var container = document.getElementById(og.gameContainerId);
	var content = document.createElement("span");
	content.style.color = "white";
	content.innerHTML = "Hello World! Edit me and commit to Git to see the automated build pipeline in action!";
	container.appendChild(content);
}());
EOT