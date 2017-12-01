module.exports.index = function (application, request, response) {
    var connection = application.config.databaseConnection(),
        noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.getUltimasNoticias(function (error, result) {
        response.render("home/index", {
            noticias: result
        });
    });
};