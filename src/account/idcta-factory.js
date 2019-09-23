define(["account/idcta-client"], function(IdctaClient) {
    const adaptResponse = response => {
        const extractFunctionFromScriptBlock = scriptBlock =>
            scriptBlock.replace(/<script[^>]*>/gi, "").replace(/<\/script>/gi, "");

        const scriptElement = document.createElement("script");
        scriptElement.type = "text/javascript";
        scriptElement.charset = "utf-8";
        scriptElement.defer = false;
        scriptElement.async = false;
        scriptElement.text = extractFunctionFromScriptBlock(response.inlineHead);
            
        return scriptElement;
    };

    return {
        inject: parentElement => new Promise((resolve, reject) => {
            IdctaClient.init().then(response => {
                const scriptElement = adaptResponse(response);
                parentElement.appendChild(scriptElement);
                resolve();
            })
            .catch(reject);
        }),

        require: () => new Promise((resolve, reject) => {
            requirejs(["idcta-v2/idcta-1"], resolve, reject);
        }),
    };
});
