define(["account/idcta-factory", "account/idcta-fallback", "account/id-availability-error", "account/browser-redirect"], function(
            IdctaFactory,
            FallbackIdcta,
            IdAvailabilityError,
            Redirect) {
    return (props) => {
        console.log(props);
        const idAvailability = props.idAvailabilityData.body;
        const idConfig = props.idConfigData.body;
        const pageToReturnTo = props.exitGameUrl;

        const buildAuthorisationUrl = (sessionId) => {
            const gameId = props.data.body.id;
            const reponseType = "id_token";
            const service = "AccountSignInService";
            const redirectUri = encodeURIComponent("https://www.bbc.co.uk"); //This will need to come from iSite eventually
            return `https://account.bbc.com/oidc/v1/user/authorize?clientId=${gameId}&response_type=${reponseType}&service=${service}&redirect_uri=${redirectUri}&state=${sessionId}&ptrt=${pageToReturnTo}`;
        };

        const redirect = (url) => {
            return new Promise((resolve, reject) => {
                if (!idAvailability.isAvailable) {
                    return reject(IdAvailabilityError.systemUnavailable);
                }
                Redirect.openUrlAtWindowTop(window, url + "?ptrt=" + pageToReturnTo);
                resolve();
            });
        };

        let IDCTA = FallbackIdcta;

        IdctaFactory.require().then(idcta => {
            IDCTA = idcta;
        }).catch(() => {
            // Do nothing as we are using a null implementation.
            // See https://en.wikipedia.org/wiki/Null_object_pattern
        });

        return {
            status: () => new Promise(resolve => {
                resolve(IDCTA.hasCookie());
            }),

            signIn: () => redirect(idConfig.signin_url),
            signOut: () => redirect(idConfig.signout_url),
            register: () => redirect(idConfig.register_url),

            policyCheck: policy => new Promise((resolve, reject) => {
                if (!idAvailability.isAvailable) {
                    return reject();
                }

                if(!IDCTA.hasCookie()) {
                    reject(IdAvailabilityError.notSignedIn);
                } else {
                    if (!IDCTA.policyCheck()) {
                        reject(`Policy '${policy}' not satisfied`);
                    } else {
                        resolve(`Policy '${policy}' satisfied`);
                    }
                }
            }),

            policyUplift: () => new Promise((resolve, reject) => {
                if (!idAvailability.isAvailable) {
                    return reject();
                }

                if(!IDCTA.hasCookie()) {
                    reject(IdAvailabilityError.notSignedIn);
                } else {
                    Redirect.openUrlAtWindowTop(window, "https://account.bbc.com/register?ptrt=https://bbc.co.uk");
                    resolve();
                }
            }),

            authorise: sessionId => new Promise((resolve, reject) => {
                if (!idAvailability.isAvailable) {
                    return reject(IdAvailabilityError.systemUnavailable);
                }
                const authorisationUrl = buildAuthorisationUrl(sessionId);
                fetch(authorisationUrl).then(response => {
                    return response.status === 200 ? resolve() : reject(IdAvailabilityError.authorisationSystemUnavailableError);
                })
                .catch(() => {
                    reject(IdAvailabilityError.authorisationSystemUnavailableError);
                });
            }),
        };
    };
});
