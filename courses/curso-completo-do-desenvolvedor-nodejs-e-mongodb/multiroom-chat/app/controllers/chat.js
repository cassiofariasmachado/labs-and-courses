module.exports.iniciarChat = function (application, request, response) {
    var usuario = request.body;

    request.assert('apelido', 'Nome ou apelido é obrigatório.').notEmpty();
    request.assert('apelido', 'Nome ou apelido deve conter entre 3 e 15 caracteres.').len(3, 15);

    var erros = request.validationErrors();

    if (erros) {
        response.render('index', { erros: erros });
        return;
    }

    application.get('socketIo').emit('mensagem-para-cliente',
        {
            apelido: usuario.apelido,
            mensagem: ' acabou de entrar no chat.'
        }
    );


    response.render('chat', { usuario: usuario });
};