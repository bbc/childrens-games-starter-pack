# Brim

Brim is the name given to a [technique](https://github.com/gajus/brim) widely 
adopted by the web industry to workaround issues with Safari's UI 
intruding into the screen during game play. It allows the user to swipe up, 
tap the screen or rotate the device to dismiss the browser UI and return the 
game to full screen.

## BBC's example

Included in the Starter Pack is a version of Brim developed by the BBC Games 
Team. It is a streamlined version of the typical industry implementation and 
designed to minimise dependencies and simplify functionality/use. You may adopt 
this approach if you want a quick and easy solution. 

We've included an example in our [demo](../src/main.js). You will need some CSS 
to accompany the JS, example [here](../src/brim.css).
 
This implementation only works with devices that match the current iOS screen 
sizes (320x480, 320x568, 375x667, 414x736) and will have no effect on other sizes.

## Accessible

The BBC implementation also differs from the standard implementation in that it 
is accessible for screen readers. Since swipe is not available to VoiceOver users 
they can get stuck on the Brim screen. As a result we've added the ability to 
dismiss Brim by tapping on the screen. It is important that any messaging captures this. 