const express = require('express'),
    server = express(),
    port = 3000

server.route('/customers')
    .get((req, res) => res.send('Listar clientes'))
    .post((req, res) => res.send('Incluir cliente'))
    .put((req, res) => res.send('Alterar cliente'))
    .delete((req, res) => res.send('Remover cliente'))

server.listen(port, () => console.log(`Running on port ${port}`))