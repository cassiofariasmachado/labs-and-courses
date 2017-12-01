class UsuarioRepository {

    constructor(connection) {
        this._connection = connection();
    }

    inserir(usuario) {
        this._connection.open(function (erro, mongo) {
            mongo.collection('usuarios', function (erro, collection) {
                collection.insert(usuario);
                mongo.close();
            });
        });
    }

    autenticar(usuario, callback) {
        this._connection.open(function (erro, mongo) {
            mongo.collection('usuarios', function (erro, collection) {
                collection.find({
                    login: usuario.login,
                    senha: usuario.senha
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
}

module.exports = function () {
    return UsuarioRepository;
};