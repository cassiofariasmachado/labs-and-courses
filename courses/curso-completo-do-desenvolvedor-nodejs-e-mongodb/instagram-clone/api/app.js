const express = require('express'),
    bodyParser = require('body-parser'),
    connectMultiparty = require('connect-multiparty'),
    mongodb = require('mongodb'),
    ObjectID = mongodb.ObjectID,
    fs = require('fs'),
    app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(connectMultiparty());
app.use(function (request, response, next) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    response.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

const configuracoes = {
    porta: 8080
};

const dbConnection = mongodb.Db(
    'instagram',
    new mongodb.Server('localhost', 27017, {}), {}
);

app.listen(configuracoes.porta);
console.log('Servido on-line na porta ' + configuracoes.porta);

app.get('/', function (request, response) {
    response.send({
        msg: 'Olá'
    });
});

// POST => Criação
app.post('/api', function (request, response) {
    var arquivo = request.files.arquivo;
    var nomeArquivo = Date.now() + '-' + arquivo.originalFilename;
    var caminhoDeDestino = './uploads/' + nomeArquivo;

    console.log(caminhoDeDestino);

    fs.rename(arquivo.path, caminhoDeDestino, function (error) {
        if (error) {
            response.status(500).json(error);
            return;
        }

        var imagem = {
            titulo: request.body.titulo,
            url: nomeArquivo
        };

        dbConnection.open(function (error, mongoClient) {
            mongoClient.collection('postagens', function (error, collection) {
                collection.insert(imagem, function (error, result) {
                    if (error) {
                        response.json(error);
                    } else {
                        response.json(result);
                    }
                    mongoClient.close();
                })
            });
        });

    });

});

// GET => Busca
app.get('/api', function (request, response) {
    dbConnection.open(function (error, mongoClient) {
        mongoClient.collection('postagens', function (error, collection) {
            collection.find().toArray(function (error, results) {
                if (error) {
                    response.json(error);
                } else {
                    response.json(results);
                }
                mongoClient.close();
            });
        });
    });
});

// GET = Busca imagem
app.get('/imagens/:imagem', function (request, response) {
    var imagem = request.params.imagem;

    fs.readFile('./uploads/' + imagem, function (error, content) {
        if (error) {
            response.status(400).json(error);
            return;
        }

        response.writeHead(200, {
            'Content-Type': 'image/jpg'
        });
        response.end(content);
    });
});

// GET => Busca por ID
app.get('/api/:id', function (request, response) {
    var id = new ObjectID(request.params.id);

    dbConnection.open(function (error, mongoClient) {
        mongoClient.collection('postagens', function (error, collection) {
            collection.find(id)
                .toArray(function (error, results) {
                    if (error) {
                        response.json(error);
                    } else {
                        response.json(results);
                    }
                    mongoClient.close();
                });
        });
    });
});

// PUT => Atualizar
app.put('/api/:id', function (request, response) {
    var id = new ObjectID(request.params.id);
    var data = request.body;

    dbConnection.open(function (error, mongoClient) {
        mongoClient.collection('postagens', function (error, collection) {
            collection.update({
                    _id: id
                }, {
                    $push: {
                        comentarios: {
                            idComentario: new ObjectID(),
                            comentario: data.comentario
                        }
                    }
                }, {},
                function (error, results) {
                    if (error) {
                        response.json(error);
                    } else {
                        response.json(results);
                    }
                });
            mongoClient.close();
        });
    });
});

// DELETE => Deletar
app.delete('/api/:id', function (request, response) {
    var idComentario = new ObjectID(request.params.id);

    dbConnection.open(function (error, mongoClient) {
        mongoClient.collection('postagens', function (error, collection) {
            collection.update({}, {
                    $pull: {
                        comentarios: {
                            idComentario: idComentario
                        }
                    }
                }, {
                    multi: true
                },
                function (error, results) {
                    if (error) {
                        response.json(error);
                    } else {
                        response.json(results);
                    }
                }
            );
            mongoClient.close();
        });
    });
});