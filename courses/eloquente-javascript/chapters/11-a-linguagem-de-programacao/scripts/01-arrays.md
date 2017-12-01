# Arrays

_Resolução:_

``` javascript

topEnv['array'] = function () {
    return Array.prototype.slice.call(arguments);
};

topEnv['length'] = function (array) {
    if (array instanceof Array) {
        return array.length;
    }
    return 0;
};

topEnv['element'] = function (array, index) {
    return array[index];
};

```