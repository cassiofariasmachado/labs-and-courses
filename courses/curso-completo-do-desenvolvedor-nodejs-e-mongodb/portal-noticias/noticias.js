//Exemplo inicial sem Express
var http = require('http');

var server = http.createServer(function (request, response) {

    var categoria = request.url;

    switch (categoria) {
        case '/tecnologia':
            response.end("<html><body>Notícias de tecnologia</body></html>");
            break;
        case '/moda':
            response.end("<html><body>Notícias de moda</body></html>");
            break;
        case '/beleza':
            response.end("<html><body>Notícias de beleza</body></html>");
            break;
        default:
            response.end("<html><body>Portal de notícias</body></html>");
            break;
    }



});

server.listen(3000);