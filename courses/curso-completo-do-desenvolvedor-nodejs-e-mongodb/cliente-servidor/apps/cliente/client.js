var http = require('http');

var bufferAsArray = [];
var options = {
    method: 'get',
    hostName: 'localhost',
    port: 8080,
    path: '/teste',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
    }
};

//Content-type
// var html = 'nome=Cassio'; // application/x-www-form-urlencoded
// var json = { nome: 'Cassio' }; // application/json

var request = http.request(options, function (response) {

    response.on('data', function (chunk) {
        bufferAsArray.push(chunk);
    });

    response.on('end', function () {
        console.log(Buffer.concat(bufferAsArray).toString());
        console.log(response.statusCode);
    });

    response.on('error', function (error) {
        console.log(error)
    });

});

// request.write(JSON.stringify(json));

request.end();