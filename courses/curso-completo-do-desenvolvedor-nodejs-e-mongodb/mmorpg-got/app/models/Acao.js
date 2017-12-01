class Acao {

    constructor(tipo, quantidadeAldeoes, login) {
        this.tipo = Number.parseInt(tipo);
        this.quantidadeAldeoes = Number.parseInt(quantidadeAldeoes);
        this.login = login;
        this.termino = this._obterTerminoDaAcao();
        this.custoEmMoedas = this._obterCustoEmMoedas();
    }

    _obterTerminoDaAcao() {
        // min * seg * milesegundos * quantidade de horas
        var termino = 60 * 60 * 1000;
        switch (this.tipo) {
            case 1:
                termino *= 1;
                break;
            case 2:
                termino *= 2;
                break;
            case 3:
                termino *= 5;
                break;
            case 4:
                termino *= 5;
                break;
        }
        return new Date().getTime() + termino;
    }

    _obterCustoEmMoedas() {
        var custo = 0;
        switch (this.tipo) {
            case 1:
                custo = -2;
                break;
            case 2:
                custo = -3;
                break;
            case 3:
                custo = -1;
                break;
            case 4:
                custo = -1;
                break;
        }
        return custo * this.quantidadeAldeoes;
    }

}

module.exports = function () {
    return Acao;
}