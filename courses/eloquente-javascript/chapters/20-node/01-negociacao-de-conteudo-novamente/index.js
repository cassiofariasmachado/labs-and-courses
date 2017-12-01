const http = require('http');

http.request({
    hostname: 'eloquentjavascript.net',
    path: '/author',
    method: 'GET',
    headers: {
        Accept: 'text/html'
    }
}, function (response) {
    readStreamAsString(response, function (data, error) {
        console.log(error || data);
    });
}).end();

http.request({
    hostname: 'eloquentjavascript.net',
    path: '/author',
    method: 'GET',
    headers: {
        Accept: 'text/html'
    }
}, function (response) {
    readStreamAsString(response, function (data, error) {
        console.log(error || data);
    });
}).end();

http.request({
    hostname: 'eloquentjavascript.net',
    path: '/author',
    method: 'GET',
    headers: {
        Accept: 'application/json'
    }
}, function (response) {
    readStreamAsString(response, function (data, error) {
        console.log(error || data);
    });
}).end();

function readStreamAsString(stream, callback) {
    var data = '';
    stream.on('data', function (chunk) {
        data += chunk.toString();
    });
    stream.on('end', function () {
        callback(null, data);
    });
    stream.on('error', function (error) {
        callback(error);
    });
}