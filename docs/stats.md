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
| Fires when users make a choice from the gel menu | game_click | e.g. play, settings, how_to_play | game_screen, settings_changed | home, menu, level name, paused, audio-false-difficulty-hard | The action_type should reflect what the user clicks on. May not all be applicable to every game. To understand which game screen the gel button is accessed from. When a user exits the settings menu, we should send a list of key value pairs of the settings items that have changed, or send a value of 'none' if no settings have been changed. We will only send changed items, not all settings values. Ideally, would be in the format audio:false,motion:true,subtitles:false,difficulty:hard but we have encountered errors when using : and , delimiters on web due to old version of echo so have switched these to - for now.|
| Fires when the game has finished loading | game_loaded | true, false |
| Fires every 15 seconds that the user is in the game | timer | heartbeat, game_screen | 15 - home, menu, level name, paused | To understand how long browsers are spending within the game and to allow this to be broken down by screen/level. |

### Mandatory Labels

These should be sent with every event:

| Mandatory Additional Labels | Available Values | Notes |
| ------------- |:-----:|:-----:|
| game_template | gcountdown (IVOR), make_a_picture, jigsaw | where applicable|
| game_level_name | level name, null | |
| game_level_type | whackamole, selecttoprogress, dressup, catchingtargets, paintreveal, null | *mandatory for IVORs only* |
| settings_status | audio-true-motion-true-subtitles-false-difficulty-auto | On any event sent from the game, we should send an additional label that specifies the full list of current settings options. Ideally, would be in the format audio:false,motion:true,subtitles:false,difficulty:hard but we have encountered errors when using : and , delimiters on web due to old version of echo so have switched these to - for now.|

## Common Events and Labels

The following events are common to most games. In addition to the mandatory labels outlined above, they may have other specific labels.

| Description | Action Name | Action Type | Additional Labels (in addition to Mandatory, see below) | Available Values (in addition to Mandatory, see below) |
| ------------- |:-----:|:-----:|:-----:|:-----:|
| Fires when a level is selected from the menu | game_level | selected |
| Fires when a level has loaded and gameplay can commence | game_level | started |
| Fires when a level is completed | game_level | complete | game_score,  game_level_time. stars_awarded, game_level_result |
| Fires when continue button is clicked having completed a level | game_level | continue |
| Fires when play again is clicked having completed a level | game_level | playagain |
| Fires when an interactive element (incidental) is interacted with | game_click | interaction | game_interaction | *interaction name* |

## Custom Events & Labels
These events may be used in a game, where relevant. Examples shown have been used previously. Additional bespoke custom events may need to be created for some games, in which case they should follow the format of the existing events.

*Note - There will be label variations in games developed before common labels were standardised. The relevant DAx_Stats_Integration file (saved in the game's Dropbox folder) should be consulted to confirm a specific game's stats, or failing that, [iStats plug-in](https://chrome.google.com/webstore/detail/dax-istats-log/jgkkagdpkhpdpddcegfcahbakhefbbga).*

| Description | Action Name | Action Type | Additional Labels | Lebel Values | Notes |
| ------------- |:-----:|:-----:|:-----:|:-----:|:-----:|
| Fires with each event | |  | game_play_count | number of times game attempted | To enable reports to be sliced by number of plays e.g. what do players typically do on their 2nd play? |
| Fires when an item is selected e.g. customisation | game_click | selected | item_name | descriptive values |  |
| Fires when character customisation is complete | game_click | customised | game_customisation (or more specific details: e.g. face_type, hair_colour etc) | descriptive values | Pass through labels to describe how a character has been customised - which variants have been selected |
| Fires when an item is bought from a shop | game_click | purchased | game_purchase (or more specific details: e.g. item_name, item_cost) | descriptive value | Pass through labels to describe what has been bought |
| Fires when an achievement is awarded | game_level | achievement | achievement | descriptive value, daily_reward |  |
| Fires when a sub-menu is viewed | game_click | viewed | submenu | descriptive name e.g. achievements |  
| Fires when an achievement is awarded | game_level | achievement | achievement | descriptive value, daily_reward | 
| Fires when a player "dies" | game_level | gameover | x_coordinate, y_coordinate | x_coordinate, y_coordinate | Record coordinates of the position in the game where the player "dies" |
| Fires when a player has to make a decision | game_level | decision | game_decision, game_decision_result | decision name, true,  false, *custom* | Records points at which players are asked to make a decision and the outcomes. Name is optional, used when multiple decisions may be made with similar outcomes. |

## iStats Chrome plug-in

This extension logs calls to iStats to help find out what information is being sent to this service. It features white and blacklisting, as well as label filtering, so tracking down the label in the stat you're looking for is easier.

You can download it from the Chrome store here - [iStats plug-in](https://chrome.google.com/webstore/detail/dax-istats-log/jgkkagdpkhpdpddcegfcahbakhefbbga).

## Example
You can see an example of using stats in our [code demo](../src/main.js). 
Open the accompanying index.html to see it in action.

[Home](../README.md)
