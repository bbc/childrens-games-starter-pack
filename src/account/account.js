define(["account/idcta-factory", "account/idcta-fallback", "account/id-availability-error", "browser-redirect"], function(
            IdctaFactory,
            FallbackIdcta,
            IdAvailabilityError,
            Redirect) {
    return (idAvailability, idConfig, windowObj) => {
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

            signIn: () => new Promise((resolve, reject) => {
                if (!idAvailability.isAvailable) {
                    return reject(IdAvailabilityError.systemUnavailable);
                }
                Redirect.openUrlAtWindowTop(window, idConfig.signin_url + "?ptrt=" + windowObj.cage.exitGameUrl);
                resolve();
            }),

            signOut: () => new Promise((resolve, reject) => {
                if (!idAvailability.isAvailable) {
                    return reject(IdAvailabilityError.systemUnavailable);
                }
                Redirect.openUrlAtWindowTop(window, idConfig.signout_url + "?ptrt=" + windowObj.cage.exitGameUrl);
                resolve();
            }),

            register: () => new Promise((resolve, reject) => {
                if (!idAvailability.isAvailable) {
                    return reject(IdAvailabilityError.systemUnavailable);
                }
                Redirect.openUrlAtWindowTop(window, idConfig.register_url + "?ptrt=" + windowObj.cage.exitGameUrl);
                resolve();
            }),

            policyCheck: policy => new Promise((resolve, reject) => {
                if (!idAvailability.isAvailable) {
                    return reject();
                }

                if(!IDCTA.hasCookie()) {
                    reject("Not signed-in");
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
                    reject("Not signed-in");
                } else {
                    Redirect.openUrlAtWindowTop(window, "https://account.bbc.com/register?ptrt=https://bbc.co.uk");
                    resolve();
                }
            }),
        };
    };
});
