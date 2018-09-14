define(["account/idcta-error"], function(IdctaError) {
    return {
        init: (timeout = 2000) => new Promise((resolve, reject) => {
            setTimeout(reject, timeout, IdctaError.timeOut);

            fetch("https://idcta.api.bbc.co.uk/idcta/init").then(response => {
                if (response.status !== 200) {
                    reject(IdctaError.unavailable);
                }

                response.json().then(resolve);
            })
            .catch(() => {
                reject(IdctaError.unavailable);
            });
        }),
    };
});
