var ObjectID = require('mongodb').ObjectID;

class JogoRepository {

    constructor(connection) {
        this._connection = connection();
    }

    inserir(jogo) {
        this._connection.open(function (erro, mongo) {
            mongo.collection('jogos', function (erro, collection) {
                collection.insert(jogo);
                mongo.close();
            });
        });
    }

    buscarAtributos(usuario, callback) {
        this._connection.open(function (erro, mongo) {
            mongo.collection('jogos', function (erro, collection) {
                collection.find({
                    login: usuario.login
                }).toArray(function (erro, result) {
                    if (erro) {
                        callback(erro);
                    } else {
                        callback(null, result[0]);
                    }
                });
                mongo.close();
            });
        });
    }

    acao(acao) {
        this._connection.open(function (erro, mongo) {
            mongo.collection('acao', function (erro, collection) {
                collection.insert(acao);
                mongo.close();
            });
        });
    }

    atualizarMoedas(login, quantidadeMoedas) {
        this._connection.open(function (erro, mongo) {
            mongo.collection('jogos', function (erro, collection) {
                collection.update(
                    { login: login },
                    { $inc: { moeda: quantidadeMoedas } }
                );
                mongo.close();
            });
        });
    }

    buscarAcoes(usuario, callback) {
        this._connection.open(function (erro, mongo) {
            mongo.collection('acao', function (erro, collection) {
                collection.find({
                    login: usuario.login,
                    termino: { $gt: new Date().getTime() }
                }).toArray(function (erro, result) {
                    if (erro) {
                        callback(erro);
                    } else {
                        callback(null, result);
                    }
                });
                mongo.close();
            });
        });
    }

    revogarAcao(idAcao, callback) {
        this._connection.open(function (erro, mongo) {
            mongo.collection('acao', function (erro, collection) {
                collection.remove({ _id: ObjectID(idAcao) },
                    function (erro, result) {
                        if (erro) {
                            callback(erro);
                        } else {
                            callback(null);
                        }
                    });
                mongo.close();
            });
        });
    }

}

module.exports = function () {
    return JogoRepository;
};