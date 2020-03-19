
define(function(){
    // ---------- Application ----------
    function onAchieveButton(gmi, achievement, outputTextDiv) {
        const idx = achievement.idx;
        let stored = gmi.achievements.get();
        let progress = stored[idx].progress

        if (achievement.maxProgress && !progress) {
            progress = 0;
        }
        if(achievement.maxProgress){
            progress++;
        }

        const achievementStatus = gmi.achievements.set({ key: achievement.key, progress });
        if (achievementStatus){
            outputTextDiv.innerHTML = `set`
            showUnseen(gmi);
        } else if (progress < achievement.maxProgress){
            outputTextDiv.innerHTML = `progress ${progress}/${achievement.maxProgress}`;
        } else {
            outputTextDiv.innerHTML = `already set`
        }
        outputTextDiv.style.display = "block";
        gmi.achievements.get();
    }

    function init(gmi, achievementsData) {
        gmi.achievements.init(achievementsData);
        console.log("achievements initialised:");
        achievementStore = gmi.achievements.get();
    }

    function onShow(gmi) {
        gmi.achievements.show();
        showUnseen(gmi);
    }

    function showUnseen(gmi){
        let achievementUnseen = document.getElementById("achievement-status")
        achievementUnseen.innerHTML = gmi.achievements.unseen ? "Unseen" : ""
    }

    return {
        onAchieveButton: onAchieveButton,
        onShow: onShow,
        init: init
    }
});
