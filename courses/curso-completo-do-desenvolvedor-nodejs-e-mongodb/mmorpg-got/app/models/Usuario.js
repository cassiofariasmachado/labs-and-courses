var crypto = require('crypto');

class Usuario {

    constructor(nome, login, senha, casa) {
        this.nome = nome;
        this.login = login;
        this.senha = this._criptografarSenha(senha);
        this.casa = casa;
    }

    _criptografarSenha(senha) {
        return crypto.createHash('md5').update(senha).digest('hex');
    }
}

module.exports = function () {
    return Usuario;
}