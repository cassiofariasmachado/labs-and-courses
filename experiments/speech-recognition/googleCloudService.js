const speech = require('@google-cloud/speech')
const storage = require('@google-cloud/storage')
const path = require('path')
const fileService = require('./fileService')
const fs = require('fs')

const bucketName = 'speech-recognition-audios'

function saveFile(filename) {
    const storageClient = new storage()

    return storageClient
        .bucket(bucketName)
        .upload(filename)
}

function longRunningRecognize(filepath, encoding, sampleRateHertz, languageCode, model) {
    const parsedFilepath = path.parse(filepath)

    const speechClient = new speech.SpeechClient()

    const config = {
        encoding,
        sampleRateHertz,
        languageCode,
        model
    }

    const audio = {
        uri: `gs://${bucketName}/${parsedFilepath.name}${parsedFilepath.ext}`
    }

    const request = {
        config,
        audio
    }

    return speechClient.longRunningRecognize(request)
        .then((data) => {
            const operation = data[0]
            return operation.promise()
        })
        .then((data) => {
            const transcription = data[0].results
                .map(result => result.alternatives[0].transcript)
                .join('\n')
            fileService.saveTxt(transcription, parsedFilepath.name)
            return transcription
        })
        .catch((err) => {
            console.error('ERROR:', err);
        });
}

function recognize(filepath, encoding, sampleRateHertz, languageCode) {
    const config = {
        encoding: encoding,
        sampleRateHertz: sampleRateHertz,
        languageCode: languageCode,
    }

    const speechClient = new speech.SpeechClient()

    const audio = {
        content: fs.readFileSync(filepath).toString('base64'),
    }

    const request = {
        config: config,
        audio: audio,
    }

    return speechClient
        .recognize(request)
        .then(data => {
            return data[0].results
                .map(result => result.alternatives[0].transcript)
                .join('\n')
        })
        .catch(err => {
            console.error('ERROR:', err);
        })
}

module.exports = {
    recognize,
    longRunningRecognize,
    saveFile
}