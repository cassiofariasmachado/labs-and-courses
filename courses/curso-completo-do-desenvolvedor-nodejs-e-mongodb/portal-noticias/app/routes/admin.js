module.exports = function (server) {

    server.get('/inclusao-noticia', function (request, response) {
        server.app.controllers.admin.inclusaoNoticia(server, request, response);
    });

    server.post('/noticias/salvar', function (request, response) {
        server.app.controllers.admin.salvar(server, request, response);
    });

};