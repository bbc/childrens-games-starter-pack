define(function (require){
    "use strict";

    function create(gameContainerId, text) {
        var spec = getSpec();

        if(!spec) {
            return;
        }

        var brimHolder = document.getElementById(gameContainerId);
        var brimEnabled = false;
        var height = spec[0];

        window.addEventListener("resize", onResize);

        var brimElement = document.createElement("div");
        brimElement.id = "brim";

        var brimText = document.createElement("p");
        brimText.className = "brim_text";
        brimText.textContent = text;

        brimElement.appendChild(brimText);

        brimHolder.appendChild(brimElement);
        brimHolder.className += "brim-disabled";

        brimElement.addEventListener("touchend", function(touchEvent){
            if (brimEnabled) {
                showGame();
                touchEvent.preventDefault();
                touchEvent.returnValue = false;
            }
        });

        onResize();

        function getSpec() {
            var devices = [
                [320, 480, 2, "iPhone 4"],
                [320, 568, 2, "iPhone 5 or 5s"],
                [375, 667, 2, "iPhone 6"],
                [414, 736, 3, "iPhone 6 plus"]
            ];

            for (var t = 0; t < devices.length; t++) {
                var device = devices[t];
                var isDevice = window.screen.height == device[0] && window.screen.width == device[1] || window.screen.width == device[0] && window.screen.height == device[1];
                if (isDevice) {
                    return device;
                }
            }
            return null;
        }

        function showBrim() {
            brimEnabled = true;
            brimHolder.className = brimHolder.className.replace("brim-disabled", "brim-enabled");
            brimElement.style.visibility = "visible";
            brimElement.style.height = "9999999px";
            brimElement.style.pointerEvents = "all";
        }

        function showGame() {
            brimElement.removeEventListener("touchend", showGame);
            brimEnabled = false;
            brimHolder.className = brimHolder.className.replace("brim-enabled", "brim-disabled");
            brimElement.style.visibility = "hidden";
            brimElement.style.height = height + 1 + "px";
            brimElement.style.pointerEvents = "none";
        }

        function onResize() {
            if (window.innerHeight > window.innerWidth
                || window.innerHeight === height) {
                showGame();
                window.scrollTo(0, 0);
            }
            else {
                showBrim();
                window.scrollTo(0, 0);
            }
        }

        return brimElement;
    }

    return {
        create: create
    };
});
