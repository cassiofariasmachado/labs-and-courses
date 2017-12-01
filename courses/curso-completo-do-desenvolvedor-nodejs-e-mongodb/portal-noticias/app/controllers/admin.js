module.exports.inclusaoNoticia = function (application, request, response) {
    response.render('admin/inclusao-noticia', { noticia: {}, validacao: false });
}

module.exports.salvar = function (application, request, response) {
    var noticia = request.body;

    request.assert('titulo', 'Título é obrigatório.').notEmpty();
    request.assert('resumo', 'Resumo é obrigatório.').notEmpty();
    request.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres.').len(10, 100);
    request.assert('autor', 'Autor é obrigatório.').notEmpty();
    request.assert('data_noticia', 'Data é obrigatório.').notEmpty().isDate({ format: 'YYYY-MM-DD' });
    request.assert('noticia', 'Notícia é obrigatório.').notEmpty();

    var erros = request.validationErrors();

    if (erros) {
        response.render('admin/inclusao-noticia', { noticia: noticia, validacao: erros });
        return;
    }

    var connection = application.config.databaseConnection();
    var noticiasDAO = new application.app.models.NoticiasDAO(connection);

    noticiasDAO.salvarNoticia(noticia, function (error, result) {
        response.redirect('/noticias');
    });
};