# Exercício 4: Agregação

``` javascript

// Exemplo de pipeline de agregação
db.<nome_colecao>.aggregate(
    [ 
        { 
            $project: { valor: '$valor' }
        }, 
        { 
            $group: { _id: null, sum: { $sum: '$valor' } } 
        }
    ])

```