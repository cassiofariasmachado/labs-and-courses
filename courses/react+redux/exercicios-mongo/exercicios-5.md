# Exercício 5: Atualização

``` javascript

// Atualiza um registro
db.<nome_colecao>.update(
        { $and: [ { name: 'João' }, { birthdayYear: 2017 } ] },
        { $set: { sexo: 'M' } }
    )

```