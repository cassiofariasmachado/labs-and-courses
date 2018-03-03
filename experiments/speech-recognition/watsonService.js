const watsonDeveloperCloud = require('watson-developer-cloud')
const fs = require('fs')
const paths = require('./paths')
const path = require('path')

const watsonSuportedEncodings = {
    'LINEAR16': 'audio/l16'
}

function transcribe(filename, encoding, languageCode) {
    const parsedFilepath = path.parse(filename)

    const service = new watsonDeveloperCloud.SpeechToTextV1()

    const recognizeStream = service.createRecognizeStream({ content_type: watsonSuportedEncodings[encoding], model: `${languageCode}_NarrowbandModel` })

    return new Promise((resolve, reject) => {
        fs.createReadStream(filename)
            .pipe(recognizeStream)
            .pipe(fs.createWriteStream(path.resolve(`${paths.output.texts}/${parsedFilepath.name}.txt`)))

        recognizeStream.setEncoding('utf8')

        recognizeStream.on('data', (transcription) => {
            resolve(transcription)
        })
    })
}

module.exports = {
    transcribe
}