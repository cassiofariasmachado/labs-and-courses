var produto = {
    nome: 'Caneta Bic Preta',
    preco: 1.90,
    desconto: 0.05
};

function clone(obj) {
    return { ...obj };
}

const novoProduto = clone(obj);

novoProduto.nome = 'Caneta Bic Azul';

console.log(produto, novoProduto);