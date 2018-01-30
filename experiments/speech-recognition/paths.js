const path = require('path')

const base = './output/'

const output = {
    base: path.resolve(base),
    audios: path.resolve(base + '/audios'),
    texts: path.resolve(base + '/texts')
}

module.exports = {
    output
}