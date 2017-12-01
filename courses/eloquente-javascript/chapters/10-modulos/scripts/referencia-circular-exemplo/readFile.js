function readFile(name) {
    return readFile.files[name] || "";
}
readFile.files = {
    'a': 'var b = require("b"); module.exports.a = "a"; console.log("Exec a, with b", b);',
    'b': 'var a = require("a"); module.exports.b = "b"; console.log("Exec b, with a", a);'
};