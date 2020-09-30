# Achievements System

## Initial Setup

Initialise the achievements system with an array of achievement objects and optional callbacks:

`gmi.achievements.init(achievementsData, achievementCallback, achievementsClosedCallback);`

**Parameters:**
* **achievementsData** [JSON object] A list of possible achievements. It is recommended to load this from a JSON file. More information on this below.
* **achievementCallback** [optional function] A callback fired after a new achievement notification has been triggered.
* **achievementsClosedCallback** [optional function] A callback fired after the achievements summary box has been closed.


## Configuration

For each achievement in `achievementsData`, create an object with a key, name and description.

```json
{
    "key": "first_win",
    "name": "Just Getting Started",
    "description": "You managed to crack your first egg in time.",
    "points": 100
}
```
**Required Parameters:**
* **key** [string a-z0-9_] a unique (per game) identifier, lowercase alphanumeric with underscore
* **name** [string] This is the human readable name that will be displayed in the achievements list.
* **description** [string] Description that will be displayed in the achievements list.
* **points** [integer] Currently unused but required for future use. The total of all points should add up to 1000 points. Points per achievement are not required to be divided equally, they can be distributed based on difficulty / designer preference. The total should still meet 1000 points.

**Optional Parameters:**
* **maxProgress** [integer] Enables the progress bar and sets its limit.
* **position** [string] This is the position that specifies where the achievements notification should show. Can be either "top" or "bottom" - defaults to "bottom".

#### String Lengths
Achievement names and descriptions should be an appropriate length so as not to be cut off, or for the text to overflow out of the notification box that appears in-game when a user earns an achievement.
Manual quality checks will be needed to satisfy this requirement.

## Updating achievement status
To update an achievement use the `gmi.achievements.set({data object})` method.

An object with the achievement info needs to be passed into the set function.

To mark an achievement without a progress meter as complete you would use:
`gmi.achievements.set({ key: "test_1" });`

To update the progress of an achievement with a progress meter you would use:
`gmi.achievements.set({ key: "test_2", progress: 20 });`

If the value for progress is more than the value for **maxProgress** set initially in the achievements config, then it will be marked as achieved.

**Note on return value:** the return value of `gmi.achievements.set` is true if this call resulted in something becoming fully achieved. Otherwise it returns false.

All achievements data is automatically stored by the GMI.

After an achievement has been set, the `achievementCallback` will fire.

## Retrieving achievements status
A call to `gmi.achievements.get()` will return an array matching the achievements config. It will return any additional data that has been saved ( e.g: achieved status or current progress value)

## Check whether there are any unseen achievements

`gmi.achievements.unseen` - this is true if there are new achievements to see, otherwise false.

This is useful for adding a blip indicator on the achievements button, to alert the user that they have completed a new achievement, but have not yet seen it. Alternatively, the `achievementsClosedCallback` may be used to remove a blip after the summary box has been closed.
