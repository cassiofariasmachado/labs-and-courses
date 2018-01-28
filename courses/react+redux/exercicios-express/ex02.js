const express = require('express'),
    server = express(),
    port = 3000

server.get('/', (req, res, next) => {
    console.log('Start')
    next()
    console.log('End')
    next()
})

server.get('/', (req, res) => {
    console.log('Response')
    res.send('<h1>Olá Express!</h1>')
})

server.get('/', (req, res) => {
    console.log('Response 2')
})

server.listen(port, () => console.log(`Running on port ${port}`))