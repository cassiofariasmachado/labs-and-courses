const speech = require('@google-cloud/speech'),
    storage = require('@google-cloud/storage'),
    path = require('path'),
    fileService = require('./fileService')


const bucketName = 'speech-recognition-audios'
const projectId = 'meuprojeto-169919'

function saveFile(filename) {
    const storageClient = new storage()

    return storageClient
        .bucket(bucketName)
        .upload(filename)
}

function transcribe(filepath) {
    const parsedFilepath = path.parse(filepath)

    const speechClient = new speech.SpeechClient()

    const config = {
        encoding: 'LINEAR16',
        sampleRateHertz: 16000,
        languageCode: 'pt-BR'
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