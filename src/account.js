define(["idcta-factory", "idcta-fallback", "id-availability-error", "browser-redirect"], function(
            IdctaFactory,
            FallbackIdcta,
            IdAvailabilityError,
            Redirect) {
    return (idAvailability) => {
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
                Redirect.openUrlAtWindowTop(window, "https://account.bbc.com/signin?ptrt=https://bbc.co.uk");
                resolve();
            }),

            signOut: () => new Promise((resolve, reject) => {
                if (!idAvailability.isAvailable) {
                    return reject(IdAvailabilityError.systemUnavailable);
                }
                Redirect.openUrlAtWindowTop(window, "https://account.bbc.com/signout?ptrt=https://bbc.co.uk");
                resolve();
            }),

            register: () => new Promise((resolve, reject) => {
                if (!idAvailability.isAvailable) {
                    return reject(IdAvailabilityError.systemUnavailable);
                }
                Redirect.openUrlAtWindowTop(window, "https://account.bbc.com/register?ptrt=https://bbc.co.uk");
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
