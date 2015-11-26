# Echo Stats

Echo is the interface to the BBC's analytics reporting. We are currently 
using version 2.0.0. The [echo documentation](http://bbc.github.io/echo-docs/) 
for later releases should be sufficient but contact us if you need earlier 
documentation.

## Implementing Echo
 
### Initialisation 

After requiring Echo, initialise a new client:

````
new EchoClient(appName, Echo.Enums.ApplicationType.WEB, echoConf);
````

where ````echoConf```` sets the following properties: 

````
Echo.ConfigKeys.COMSCORE.URL = "http://sa.bbc.co.uk/bbc/{env}/s"
echoConf[ConfigKeys.RUM.ENABLED] = disabled
````
Comscore is the primary analytics service where statistics should be sent. 
RUM is the BBC's internal analytics service which is no longer 
used and therefore must be disabled in the version of Echo being used.

### Sending Statistics

Statistics consist of key-value pairs called labels that are sent on 
certain events. To send a label with all echo calls: 

````
echo.addLabel("starter_pack", "echo_example");
````

Similarly, sending an initial page view event with the game's countername will
 add a label of ````name:countername```` to all echo calls:

````
echo.viewEvent(counterName);
````

To send a statistic: 

````
echo.userActionEvent(actionType, actionName, additionalLabels);
````

where ````actionName```` is the key, ````actionType```` is the value and 
````additionalLabels```` are any other key-value pairs to send.


### Example 
An [echo stats example](../src/echo-stats.js) has been created using the 
code above. Build the project (see [build.sh](./build-scripts/build.sh)) to 
see the code running. 