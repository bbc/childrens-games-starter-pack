# Stats

Stats are handled by the [GMI](gmi.md#gmi). The specifics have been
abstracted away to ensure that stats usage is uniform across all games
and platforms- developers are no longer required to call Echo themselves.

## Sending Statistics

Any function that sends stats must have visibility of the GMI.

Statistics consist of key-value pairs called labels that are sent on
certain events.

To send a statistic:

````
gmi.sendStatsEvent(actionName, actionType, additionalLabels);
````

where ````actionName```` is the key, ````actionType```` is the value and
````additionalLabels```` are any other key-value pairs to send.

## Counternames

Ensure the in-game counter name follow the following format;

````
<product>.games.<game name>.page
````
It is essential that countername starts with either cbbc.games or cbeebies.games in order for the stats to fire into the correct virtual site.

The in-game countername must match the game page countername to avoid duplication in reporting.

Example counternames;
````
Danger Mouse Game - cbbc.games.danger_mouse_game.page
Go Jetters Jigsaw - cbeebies.games.go_jetters_jigsaw.page
````

## What can we measure?

| Standard Data Items        | Bespoke Data items |
| ------------- |:-----:|
| *Some or all of the following items may be used, and will typically be included  per day, per week, or for the total life of the game so far:*| *These might include:* |
| Unique browsers      | Death co-ordinates |
| Visits     | Scores|
| Page views | Achievement details |
| Time periods (hours, weeks, weekends etc)     | Character customisation selections |
| Total dwell time     | Shop interactions |
| Average dwell time per browser | Button/link clicks e.g. skip level |
| Average dwell time per visit     | Average dwell time per named level |
| Average first visit dwell time     |  |
| Visits per browser    | *See below for custom events and labels relating to these* |
| Browsers per visits (segmented)    | |
| New/returning browsers |  |
| Cohorts (e.g. browsers who did x) |  |
| Sticky factor (likelihood of return within a period) |  |
| Loyalty (days visited per browser) |  |
| Recency (time between visits) |  |
| Games loaded|  |
| Games loaded per browser |  |
| Games loaded per visit |  |
| Progress through game |  |
| Level starts per level |  |
| Level completes per level |  |
| Platform split |  |
| Previous/next pages |  |

## Basics

Games tracking consists of action names, action types and labels.

| Action_name        | Description |
| ------------- |:-----:|
| game_click| relates to any subsequent click action taken by the user |
| game_first_click      | relates only to the first click action taken by the user |
| game_level    | relates to level activity e.g. starting, completing, replaying, achievements |
| game_loaded | fires when the game has loaded |
| Timer     | relates to the heartbeat timer |

## Mandatory events and labels

There are some events that are common across ALL games. The below names should be used to ensure consistency for reporting. These are all 'hidden events' so do not contribute to page view stats.

### Mandatory to every event

The below labels are sent through with *every* event, the values should be appropriate to the product:

|        |  |
| ------------- |:-----:|
| name| *product*.games.*game name*.page |
| app_name| cbbc, cbeebies |
| app_type| responsive, app |

### Mandatory to every game

These should feature in every game:

| Mandatory Event Description | Action Name | Action Type | Additional Labels (in addition to Mandatory, see below) | Available Values (in addition to Mandatory, see below) | Notes |
| ------------- |:-----:|:-----:|:-----:|:-----:|:-----:|
| Fires when users make their first choice from the homescreen | game_first_click | e.g. play, settings, how_to_play, pause, restart, menu|
| Fires when users make a choice from the gel menu | game_click | e.g. play, settings, how_to_play | game_screen, settings_changed | home, menu, level name, paused | The action_type should reflect what the user clicks on. May not all be applicable to every game. To understand which game screen the gel button is accessed from. When a user exits the settings menu, we should send a list of key value pairs of the settings items that have changed, or send a value of 'none' if no settings have been changed. We will only send changed items, not all settings values. |
| Fires when the game has finished loading | game_loaded | true, false |
| Fires every 15 seconds that the user is in the game | timer | heartbeat, game_screen | 15 - home, menu, level name, paused | To understand how long browsers are spending within the game and to allow this to be broken down by screen/level. |

### Mandatory Labels

These should be sent with every event:

| Mandatory Additional Labels | Available Values | Notes |
| ------------- |:-----:|:-----:|
| game_template | gcountdown (IVOR), make_a_picture, jigsaw | where applicable|
| game_level_name | level name, null | |
| game_level_type | whackamole, selecttoprogress, dressup, catchingtargets, paintreveal, null | *mandatory for IVORs only* |
| settings_status | audio-true-motion-true-subtitles-false-difficulty-auto | As documented here. We have encountered errors when using : and , delimiters on web due to old version of echo so have switched these to - for now.|

## Example
You can see an example of using stats in our [code demo](../src/main.js). 
Open the accompanying index.html to see it in action.

[Home](../README.md)
