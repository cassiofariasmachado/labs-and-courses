let app = require('./config/server');

let server = app.listen(80, function () {
    console.log('Servidor online.');
});

let socketIo = require('socket.io').listen(server);

app.set('socketIo', socketIo);

socketIo.on('connection', function (socket) {
    console.log('Um usuário conectou.');

    socket.on('disconnect', function () {
        console.log('Um usuário desconectou.')
    });

    socket.on('mensagem-para-servidor', function (data) {
        //Dialogos 
        socket.emit('mensagem-para-cliente', { apelido: data.apelido, mensagem: data.mensagem });
        socket.broadcast.emit('mensagem-para-cliente', { apelido: data.apelido, mensagem: data.mensagem });
        //Participantes
        if (parseInt(data.apelidoAtualizadoNosClientes) === 0) {
            socket.emit('participantes-para-cliente', { apelido: data.apelido });
            socket.broadcast.emit('participantes-para-cliente', { apelido: data.apelido });
        }

    });
});