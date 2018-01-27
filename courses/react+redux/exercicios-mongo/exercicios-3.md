# Exercício 3: Consultas

``` javascript

// Busca todos os registros
db.<nome_colecao>.find()

// Formata a saída
db.<nome_colecao>.find().pretty()

// Busca o primeiro registro que atende a condição
db.<nome_colecao>.findOne()

// Ou
db.<nome_colecao>.find({$or: [{name: 'João'}, {name: 'Maria'}]})

// Existe a propriedade
db.<nome_colecao>.find({name: {$exists: true}})

// Skip
db.<nome_colecao>.find().skip(1)

// Limit
db.<nome_colecao>.find().skip(1).limit(1)

// Find com project
db.<nome_colecao>.find({ sexo: 'M' }, { _id: 0, name: 1}).pretty()

```