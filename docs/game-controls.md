# Game Controls Guidance

Touch controls, such as onscreen joysticks and buttons, should be shown on games to aid users who are playing on devices that cannot use keyboard and mice controls.

Detecting whether a user is using a touchscreen is problematic. It is recommended that detecting whether or not a user is using a touchscreen device is **not** calculated based on the browser's useragent string.

Touch controls should show on touchscreen devices when users request both **mobile** and **desktop** versions of the website. This is the main reason why detection based on useragent is not recommended, as the useragent is typically spoofed to look like a desktop device.

Our current recommendation is to base whether or not a game has a touchscreen or not is to check to see whether a `touchstart` event has been fired or whether the `ontouchstart` API exists.

Games should still continue to listen for keyboard and mice control events on touchscreen devices, incase the user has a keyboard and/or mouse connected.
