define([], function() {
    var props = defaultProps = {
        idAvailabilityData: {
            body: {
                isAvailable: true,
            },
        },
        idConfigData: { 
            body: {
                register_url: "https://account.bbc.com/register",
                signin_url: "https://account.bbc.com/signin",
                signout_url: "https://account.bbc.com/signout",
            },
        },
    };

    return {
        set: (newProps) => {
            props = Object.assign({}, props, newProps);
        },

        get: () => {
            return props;
        },
    };
});
