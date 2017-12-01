module.exports.noticias = function (application, request, response) {
    var connection = application.config.databaseConnection();
    var noticiasDAO = new application.app.models.NoticiasDAO(connection);

    noticiasDAO.getNoticias(function (erro, resultado) {
        response.render('noticias/noticias', { noticias: resultado });
    });
};

module.exports.noticia = function (application, request, response) {
    var connection = application.config.databaseConnection();
    var noticiasDAO = new application.app.models.NoticiasDAO(connection);
    var id_noticia = request.query.id_noticia;

    noticiasDAO.getNoticia(id_noticia, function (erro, resultado) {
        response.render('noticias/noticia', { noticia: resultado });
    });
};
