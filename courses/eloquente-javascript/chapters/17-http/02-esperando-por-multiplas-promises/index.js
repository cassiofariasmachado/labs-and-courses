module.exports = function all(promises) {
    return new Promise(function (success, fail) {

        var pendentPromises = promises.length;
        var results = [];

        promises.forEach(promise => {

            promise.then((response) => {
                finalizePromise(response, promise);
            }).catch((error) => {
                errorPromise(error);
            });

        });

        function finalizePromise(response, promise) {
            pendentPromises--;
            var promiseIndex = promises.indexOf(promise);
            results[promiseIndex] = response;

            if (pendentPromises <= 0) {
                success(results);
            }
        }

        function errorPromise(error) {
            fail(error);
        }

    });
}