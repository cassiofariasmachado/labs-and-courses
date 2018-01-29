const fs = require('fs'),
    ffmpeg = require('fluent-ffmpeg'),
    path = require('path')

const fileName = process.argv[2]
const filePath = path.parse(`${process.cwd()}/${fileName}`)

function convert(input, output, callback) {
    ffmpeg(input)
        .output(output)
        .on('end', () => {
            console.log('Audio conversion ended')
            callback(null)
        })
        .run();
}

const outputPath = path.resolve(__dirname + '/output/' + filePath.name + '.mp3');
const inputPath = path.resolve(`${process.cwd()}/${fileName}`)

console.log(outputPath)

console.log(inputPath)

convert('./pra-ser-sincero.mp4', './pra-ser-sincero.mp3', function (err) {
    if (!err) {
        console.log('Audio conversion complete')
    }
});

