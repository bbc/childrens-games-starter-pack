define([], function() {
    const serviceTimeoutError = new Error("The ID availability service timed-out.");
    const serviceUnavailableError = new Error("The ID availability service is unavailable.");
    const systemUnavailableError = new Error("The ID system is unavailable.");

    return {
        servicetimeOut: serviceTimeoutError,
        serviceUnavailable: serviceUnavailableError,
        systemUnavailable: systemUnavailableError,
    };
});
