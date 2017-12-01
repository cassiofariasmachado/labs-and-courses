module.exports = function (server) {

    server.get('/noticias', function (request, response) {
        server.app.controllers.noticias.noticias(server, request, response);
    });

    server.get('/noticia', function (request, response) {
        server.app.controllers.noticias.noticia(server, request, response);
    });

};

