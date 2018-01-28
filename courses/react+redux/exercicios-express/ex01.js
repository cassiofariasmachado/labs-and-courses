const express = require('express'),
    server = express(),
    port = 3000

server.get('/', (req, res) => {
    res.send('<h1>Index!</h1>')
})

server.all('/test', (req, res) => {
    res.send('<h1>Test!</h1>')
})

server.get(/api/, (req, res) => {
    res.send('<h1>Api</h1>')
})

server.listen(port, () => console.log(`Running on port ${port}`))