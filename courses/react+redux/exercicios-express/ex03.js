const express = require('express'),
    server = express(),
    port = 3000

server.use((req, res, next) => {
    console.log('Start')
    next()
    console.log('End')
})

server.use((req, res) => {
    console.log('Response')
    res.send('<h1>Api!</h1>')
})

server.listen(port, () => console.log(`Running on port ${port}`))