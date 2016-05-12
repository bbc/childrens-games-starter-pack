# Updating your pack

On some occasions you might want to update your Starter Pack. Our Starter Pack
repo has been added as a remote upstream repository so you can simply run the
following commands to update your Pack:

    git remote add upstream https://github.com/bbc/childrens-games-starter-pack
    git fetch upstream
    git merge upstream/master
    
Bear in mind this may cause some conflicts or previously deleted files to
re-appear as with any merge. We don't recommend doing this once the project has
made significant progress/changes.

[Home](../README.md)
