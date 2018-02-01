const ffmpeg = require('fluent-ffmpeg')
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path
const path = require('path')
const paths = require('./paths')

ffmpeg.setFfmpegPath(ffmpegPath)

const ffmepgSupportedEncodings = {
    'LINEAR16': 'pcm_s16le',
    'FLAC': 'flac',
    'MULAW': 'mulaw'
}

function convertToWav(filepath, encoding, rateHertz) {
    const parsedFilepath = path.parse(filepath)
    const output = path.resolve(`${paths.output.audios}/${parsedFilepath.name}.wav`)

    return new Promise((resolve, reject) => {
        let totalDuration;

        ffmpeg(filepath)
            .withAudioCodec(ffmepgSupportedEncodings[encoding])
            .withAudioChannels(1)
            .withAudioFrequency(rateHertz)
            .output(output)
            .on('start', (elem) => {
                console.log(elem)
            })
            .on('codecData', (info) => {
                totalDuration = getDurationInSeconds(info.duration)
            })
            .on('progress', (info) => {
                const percent = getDurationInSeconds(info.timemark) * 100 / totalDuration
                console.log(`Audio conversion progress: ${percent.toFixed(2)} %`);
            })
            .on('end', () => {
                console.log('Audio conversion complete')
                console.log(`File ${parsedFilepath.name} saved in:`)
                console.log(paths.output.audios)
                resolve(output)
            })
            .on('error', (err) => {
                reject()
            })
            .run();
    })
}

function getDurationInSeconds(str) {
    const regex = /^(\d{2}):(\d{2}):(\d{2}.\d{2})$/
    const match = regex.exec(str)

    const duration = {
        hours: parseInt(match[1]),
        minutes: parseInt(match[2]),
        seconds: parseInt(match[3])
    }

    return duration.hours * 3600 + duration.minutes * 60 + duration.seconds
}

module.exports = {
    convertToWav
}
