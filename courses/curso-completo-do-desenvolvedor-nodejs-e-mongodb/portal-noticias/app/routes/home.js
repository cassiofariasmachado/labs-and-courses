module.exports = function (server) {

    server.get('/', function (request, response) {
        server.app.controllers.home.index(server, request, response)
    });

};