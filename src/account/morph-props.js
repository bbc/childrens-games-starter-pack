define([], function() {
    let props = {
        data: {
            body: {
                id: "game-id"
            }
        },
        idAvailabilityData: {
            body: {
                isAvailable: true,
            },
        },
        idConfigData: {
            body: JSON.stringify({
                register_url: "https://account.bbc.com/register",
                signin_url: "https://account.bbc.com/signin",
                signout_url: "https://account.bbc.com/signout",
            }),
        },
        exitGameUrl: "http://www.bbc.co.uk/cbbc"
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
