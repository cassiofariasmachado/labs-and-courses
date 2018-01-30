const ffmpeg = require('fluent-ffmpeg'),
    ffmpegPath = require('@ffmpeg-installer/ffmpeg').path,
    path = require('path'),
    paths = require('./paths')

ffmpeg.setFfmpegPath(ffmpegPath)

function convertToWav(filepath, callback) {
    const parsedFilepath = path.parse(filepath)
    const output = path.resolve(`${paths.output.audios}/${parsedFilepath.name}.wav`)

    return new Promise((resolve, reject) => {
        ffmpeg(filepath)
            .withAudioCodec('pcm_s16le')
            .withAudioChannels(1)
            .withAudioFrequency(16000)
            .output(output)
            .on('progress', (info) => {
                console.log(`Audio conversion progress: ${info.percent} %`);
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

module.exports = {
    convertToWav
}
