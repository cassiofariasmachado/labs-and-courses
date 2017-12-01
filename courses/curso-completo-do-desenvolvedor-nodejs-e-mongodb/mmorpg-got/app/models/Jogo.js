class Jogo {

    constructor(login) {
        this.moeda = 15;
        this.suditos = 10;
        this.temor = this._gerarAtributo();
        this.sabedoria = this._gerarAtributo();
        this.comercio = this._gerarAtributo();
        this.magia = this._gerarAtributo();
        this.login = login;
    }

    _gerarAtributo() {
        return Math.floor(Math.random() * 1000);
    }

}

module.exports = function () {
    return Jogo;
}