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


## Example
You can see an example of using stats in our [code demo](../src/main.js). 
Open the accompanying index.html to see it in action.

[Home](../README.md)
