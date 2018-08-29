const serviceTimeoutError = new Error("The IDCTA service timed-out.");
const serviceUnavailableError = new Error("The IDCTA service is unavailable.");

define([], function() {
    return {
        timeOut: serviceTimeoutError,
        unavailable: serviceUnavailableError,
    };
});
