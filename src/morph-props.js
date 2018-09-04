define([], function() {
    var props = defaultProps = {
        idAvailabilityData: {
            body: {
                isAvailable: false
            },
        },
    };

    return {
        set: (newProps) => {
            props = Object.assign({}, defaultProps, newProps);
        },

        get: () => {
            return props;
        },
    };
});
