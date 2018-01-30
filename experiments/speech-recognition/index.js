const fs = require('fs'),
    audioConverterService = require('./audioConverterService'),
    googleCloudService = require('./googleCloudService'),
    fileService = require('./fileService'),
    paths = require('./paths'),
    path = require('path')

const fileName = process.argv[2]
const filePath = path.resolve(`${process.cwd()}/${fileName}`)

fileService.createDir(paths.output.base)
fileService.createDir(paths.output.audios)
fileService.createDir(paths.output.texts)

audioConverterService.convertToWav(filePath)
    .then((convertedFilepath) => {
        googleCloudService.saveFile(convertedFilepath)
            .then(() => {
                googleCloudService.transcribe(convertedFilepath)
            })
    })