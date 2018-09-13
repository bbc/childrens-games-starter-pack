define([], function() {
    return {
        openUrlAtWindowTop: (windowObj, url) => {
            windowObj.top.location = decodeURI(url);
        }
    };
});
