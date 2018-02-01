const speech = require('@google-cloud/speech')
const storage = require('@google-cloud/storage')
const path = require('path')
const fileService = require('./fileService')

const bucketName = 'speech-recognition-audios'

function saveFile(filename) {
    const storageClient = new storage()

    return storageClient
        .bucket(bucketName)
        .upload(filename)
}

function transcribe(filepath, encoding, sampleRateHertz, languageCode) {
    const parsedFilepath = path.parse(filepath)

    const speechClient = new speech.SpeechClient()

    const config = {
        encoding,
        sampleRateHertz,
        languageCode
    }

    const audio = {
        uri: `gs://${bucketName}/${parsedFilepath.name}${parsedFilepath.ext}`
    }

    const request = {
        config,
        audio
    }

    speechClient.longRunningRecognize(request)
        .then((data) => {
            const operation = data[0]
            return operation.promise()
        })
        .then((data) => {
            const response = data[0]
            const transcription = response.results
                .map(result => result.alternatives[0].transcript).join('\n')
            console.log(`Transcription: ${transcription}`)
            fileService.saveTxt(transcription, parsedFilepath.name)
        })
        .catch((err) => {
            console.error('ERROR:', err);
        });
}

module.exports = {
    transcribe,
    saveFile
}