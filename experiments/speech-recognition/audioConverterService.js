const ffmpeg = require('fluent-ffmpeg')
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;

ffmpeg.setFfmpegPath(ffmpegPath)

function convert(input, output, callback) {
    ffmpeg(input)
        .output(output)
        .on('end', () => {
            console.log('Audio conversion ended')
            callback(null)
        })
        .run();
}

module.exports = {
    convert
}
