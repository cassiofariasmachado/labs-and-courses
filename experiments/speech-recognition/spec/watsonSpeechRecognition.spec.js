const fs = require('fs')
const watsonService = require('../watsonService')

describe("Watson speech recognition", () => {
    const filesPath = './spec/files/'
    let files = fs.readdirSync(filesPath)

    beforeEach(function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000
    });

    files.forEach((fileName) => {
        let expectedText = fileName.replace(/.wav/g, '')

        it(`should undertands "${expectedText}"`, () => {
            return watsonService.transcribe(filesPath + fileName, 'LINEAR16', 'pt-BR')
                .then((transcribe) => {
                    expect(expectedText.trim().toLocaleLowerCase())
                        .toBe(transcribe.trim().toLocaleLowerCase())
                })
        })
    })
});