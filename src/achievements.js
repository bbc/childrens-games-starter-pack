define(function(){
    // ---------- Application ----------
    function onCompleteButton(gmi, achievement, outputTextDiv) {
        const achievementStatus = gmi.achievements.set({ key: achievement });
        outputTextDiv.innerHTML = achievementStatus ? "set" : "not set";
        outputTextDiv.style.display = "block";
        showUnseen(gmi);
    }

    function onShow(gmi) {
        gmi.achievements.show();
        showUnseen(gmi);
    }

    function showUnseen(gmi){
        var achievementUnseen = document.getElementById("achievement-status")
        achievementUnseen.innerHTML = gmi.achievements.unseen ? "Unseen" : ""
    }

    return {
        onCompleteButton: onCompleteButton,
        onShow: onShow
    }
});
