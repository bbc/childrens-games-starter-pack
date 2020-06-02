# Achievements System

## Initial Setup

Initialise the achievements system with an array of achievement objects.  
It is recommended to load this data from a JSON file.

`gmi.achievements.init(achievementsData);`

## Configuration

For each achievement, create an object with a key, name and description.

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
* **points** [integer] Currently unused but required for future use. Should add up to 1000 points per game but otherwise can be weighted for difficulty or designer preference.

**Optional Parameters:**
* **maxProgress** [integer] Enables the progress bar and sets its limit.
* **position** [string] This is the position that specifies where the achievements notification should show. Can be either "top" or "bottom" - defaults to "bottom".
* **additional** {prefix [string], text [string]} Add a secondary text element to the description.
  - The prefix of this will be in bold. e.g:
`"additional": {"prefix": "hint", "text": "You can find these items on your travels."}`
will add: "**hint:** You can find these items on your travels" to the description text.

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

All achievements data is automatically stored in local storage.

## Retrieving achievements status
A call to `gmi.achievements.get()` will return an array matching the achievements config with any additional data from local storage ( e.g: achieved status or current progress value)

## Check whether there are any unseen achievements

`gmi.achievements.unseen` - this is true if there are new achievements to see, otherwise false.

This is useful for adding a blip indicator on the achievements button, to alert the user that they have completed a new achievement, but have not yet seen it.
