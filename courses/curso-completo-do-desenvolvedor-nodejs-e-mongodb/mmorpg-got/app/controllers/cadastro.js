module.exports.cadastro = function (application, request, response) {
    response.render('cadastro', { erros: {}, usuario: {} });
};

module.exports.cadastrar = function (application, request, response) {
    request.assert('nome', 'Nome não pode ser vazio.').notEmpty();
    request.assert('login', 'Login não pode ser vazio.').notEmpty();
    request.assert('senha', 'Senha não pode ser vazia.').notEmpty();
    request.assert('casa', 'Casa não pode ser vazia.').notEmpty();

    var erros = request.validationErrors();

    if (erros) {
        response.render('Cadastro', { erros: erros, usuario: usuario });
        return;
    }

    var body = request.body;
    var dbConnection = application.config.dbConnection;

    var UsuarioRepository = new application.app.repositories.UsuarioRepository(dbConnection);
    var JogoRepository = new application.app.repositories.JogoRepository(dbConnection);

    var Usuario = new application.app.models.Usuario(body.nome, body.login, body.senha, body.casa);
    var Jogo = new application.app.models.Jogo(Usuario.login);
    
    UsuarioRepository.inserir(Usuario);
    JogoRepository.inserir(Jogo);

    response.render('sucesso-cadastro');
};