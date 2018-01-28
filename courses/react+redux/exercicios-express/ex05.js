const express = require('express'),
    server = express(),
    routes = require('./ex05_routes'),
    port = 3000

server.use('/api', routes)

server.listen(port, () => console.log(`Running on port ${port}`))