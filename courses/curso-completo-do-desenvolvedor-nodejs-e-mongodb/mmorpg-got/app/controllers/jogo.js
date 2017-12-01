module.exports.jogo = function (application, request, response) {
    if (!request.session.autorizado) {
        response.redirect('/?mensagem=relogar');
        return;
    }

    var mensagem = request.query.mensagem;

    var dbConnection = application.config.dbConnection;
    var JogoRepository = new application.app.repositories.JogoRepository(dbConnection);

    var usuarioLogado = request.session.usuarioLogado;
    JogoRepository.buscarAtributos(usuarioLogado, function (erro, atributos) {
        response.render('jogo', { usuario: request.session.usuarioLogado, atributos: atributos, mensagem: mensagem });
    });
};

module.exports.sair = function (application, request, response) {
    request.session.destroy(function () {
        response.render('index', { login: '', erros: {} });
    })
};

module.exports.suditos = function (application, request, response) {
    if (!request.session.autorizado) {
        response.send('Usuário precisa fazer login.');
        return;
    }
    response.render('aldeoes', { erros: {} });
}

module.exports.pergaminhos = function (application, request, response) {
    if (!request.session.autorizado) {
        response.send('Usuário precisa fazer login.');
        return;
    }

    var dbConnection = application.config.dbConnection;
    var JogoRepository = new application.app.repositories.JogoRepository(dbConnection);
    var usuarioLogado = request.session.usuarioLogado;

    JogoRepository.buscarAcoes(usuarioLogado, function (erro, acoes) {
        response.render('pergaminhos', { acoes: acoes });
    });
}

module.exports.ordenarSudito = function (application, request, response) {
    request.assert('tipoAcao', 'Ação deve ser informada').notEmpty();
    request.assert('quantidadeAldeoes', 'Quantidade deve ser informada.').notEmpty();

    var erros = request.validationErrors();

    if (erros) {
        response.redirect('/jogo?mensagem=falha');
        return;
    }

    var body = request.body;
    var dbConnection = application.config.dbConnection;
    var JogoRepository = new application.app.repositories.JogoRepository(dbConnection);
    var usuarioLogado = request.session.usuarioLogado;

    var Acao = new application.app.models.Acao(body.tipoAcao, body.quantidadeAldeoes, usuarioLogado.login);

    JogoRepository.acao(Acao);
    //To-do: verificar maneira melhor de fazer, causa: mongo.close
    JogoRepository = new application.app.repositories.JogoRepository(dbConnection);
    JogoRepository.atualizarMoedas(usuarioLogado.login, Acao.custoEmMoedas);

    response.redirect('/jogo?mensagem=sucesso');
}


module.exports.revogarAcao = function (application, request, response) {
    var idAcao = request.query.idAcao;

    var dbConnection = application.config.dbConnection;
    var JogoRepository = new application.app.repositories.JogoRepository(dbConnection);

    JogoRepository.revogarAcao(idAcao, function (erro) {
        response.redirect('/jogo?mensagem=acaoRevogada')
    });
}