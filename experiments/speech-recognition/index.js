const fs = require('fs'),
    audioConverterService = require('./audioConverterService'),
    path = require('path')

const fileName = process.argv[2]
const filePath = path.parse(`${process.cwd()}/${fileName}`)
const outputPath = path.resolve(`${__dirname}/output/`)
const inputPath = path.resolve(`${process.cwd()}/${fileName}`)

if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath)
}

audioConverterService.convert(inputPath, path.resolve(`${outputPath}/${filePath.name}.mp3`), (err) => {
    if (!err) {
        console.log('Audio conversion complete')
        console.log(`File ${fileName} saved in: ${outputPath}`)
    }
})

