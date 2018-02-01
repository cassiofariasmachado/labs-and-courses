const paths = require('./paths')
const path = require('path')
const fs = require('fs')

function saveTxt(text, filename) {
    const output = path.resolve(`${paths.output.texts}/${filename}.txt`)
    fs.writeFileSync(output, text)
}

function createDir(path) {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path)
    }
}

module.exports = {
    saveTxt,
    createDir
}