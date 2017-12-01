module.exports = function urlToPath(url) {
    var path = require("url").parse(url).pathname;

    var path = decodeURIComponent(path);

    var regex = /(^)?\.{2}(\\|\/|$)/g;

    path = path.replace(regex, '');

    return `./${path}`;
}