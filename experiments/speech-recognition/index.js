const fs = require('fs')
const audioConverterService = require('./audioConverterService')
const googleCloudService = require('./googleCloudService')
const watsonService = require('./watsonService')
const fileService = require('./fileService')
const paths = require('./paths')

fileService.createDir(paths.output.base)
fileService.createDir(paths.output.audios)
fileService.createDir(paths.output.texts)

require(`yargs`)
    .demand(1)
    .command(
    `transcribe-google <filename>`,
    `Detects speech using Google Speech Recognition in a local video file.`,
    {},
    opts => {
        audioConverterService.convertToWav(opts.filename, opts.encoding, opts.sampleRateHertz)
            .then(convertedFilepath => {
                googleCloudService.saveFile(convertedFilepath)
                    .then(() => {
                        googleCloudService.longRunningRecognize(convertedFilepath, opts.encoding, opts.sampleRateHertz, opts.languageCode, opts.model)
                            .then(transcription => {
                                console.log(`Transcription: ${transcription}`)  
                            })
                            .catch(error => console.error(error))
                    })
                    .catch(error => console.error(error))
            })
    })  
    .command(
    `transcribe-watson <filename>`,
    `Detects speech using Watson Speech to text in a local video file.`,
    {},
    opts => {
        audioConverterService.convertToWav(opts.filename, opts.encoding, opts.sampleRateHertz)
            .then(convertedFilepath => {
                watsonService.transcribe(convertedFilepath, opts.encoding, opts.languageCode)
                    .then(transcription => {
                        console.log(`Transcription: ${transcription}`)
                    })
                    .catch(error => console.error(error))
            })
    })
    .options({
        encoding: {
            alias: 'e',
            default: 'LINEAR16',
            global: true,
            requiresArg: true,
            type: 'string',
        },
        sampleRateHertz: {
            alias: 'r',
            default: 16000,
            global: true,
            requiresArg: true,
            type: 'number',
        },
        languageCode: {
            alias: 'l',
            default: 'pt-BR',
            global: true,
            requiresArg: true,
            type: 'string',
        },
        model: {
            alias: 'm',
            default: 'default',
            global: true,
            requiresArg: true,
            type: 'string',
        }
    })
    .example(`transcribe-google $0 sync ./resources/audio.mp4 -e LINEAR16 -r 16000`)
    .wrap(120)
    .recommendCommands()
    .epilogue(`For more information, see https://github.com/cassiofariasmachado/labs-and-courses/tree/master/experiments/speech-recognition`)
    .help()
    .strict().argv;