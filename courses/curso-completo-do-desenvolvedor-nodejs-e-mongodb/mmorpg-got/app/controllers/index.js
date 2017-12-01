module.exports.index = function (application, request, response) {
    response.render('index', { login: '', erros: {} });
};

module.exports.autenticar = function (application, request, response) {
    request.assert('login', 'Login não pode ser vazio.').notEmpty();
    request.assert('senha', 'Senha não pode ser vazia.').notEmpty();

    var erros = request.validationErrors();
    var Usuario = new application.app.models.Usuario(null, request.body.login, request.body.senha, null);

    if (erros) {
        response.render('index', { login: Usuario.login, erros: erros });
        return;
    }

    var connection = application.config.dbConnection;
    var UsuarioRepository = new application.app.repositories.UsuarioRepository(connection);

    UsuarioRepository.autenticar(Usuario, function (erro, usuarioLogado) {
        if (usuarioLogado) {
            request.session.autorizado = true;
            request.session.usuarioLogado = {
                login: usuarioLogado.login,
                casa: usuarioLogado.casa
            };
        }

        if (request.session.autorizado) {
            response.redirect('jogo');
        } else {
            erros = [{ msg: 'Login ou senha inválidos!' }];
            response.render('index', { login: Usuario.login, erros: erros });
        }
    });
};