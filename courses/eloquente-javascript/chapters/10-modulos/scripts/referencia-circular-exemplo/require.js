function require(name) {
    if (name in require.cache)
        return require.cache[name];

    var code = new Function("exports, module", readFile(name));
    var exports = {}, module = { exports: exports };

    require.cache[name] = module.exports;
    code(exports, module);

    return module.exports;
}
require.cache = Object.create(null);