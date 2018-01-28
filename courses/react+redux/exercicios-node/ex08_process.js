function hasParam(param) {
    return process.argv.indexOf(param) !== -1
}

if (hasParam('production')) {
    console.log('Its danger!')
} else {
    console.log('Its safe!')
}