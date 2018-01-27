# Exercício 2 - Inserções

``` javascript

// Insere registro, automaticamente cria a coleção se ela não existir
db.<nome_colecao>.insert({name: 'João', sexo: 'M'})

// Insere ou atualiza
db.<nome_colecao>.save({name: 'João', sexo: 'M'})

```