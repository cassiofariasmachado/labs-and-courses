const port = 3000,
    bodyParser = require('body-parser'),
    express = require('express'),
    server = express(),
    allowCors = require('./cors')

server.use(bodyParser.urlencoded({
    extended: true
}))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})

module.exports = server