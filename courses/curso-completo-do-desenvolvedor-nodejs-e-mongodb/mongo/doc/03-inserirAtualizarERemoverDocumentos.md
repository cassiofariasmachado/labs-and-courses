# Inserir documentos

## Comandos

* `db.nome_da_collection.save(objeto_para_salvar)`: salva um novo documento na collection, ou substitui caso o __id_ for o mesmo.
* `db.nome_da_collection.update(condicao_para_atualizacao, $set: {chave: valor}, multi: false)`: atualiza o documento que atende a condição informada, alterando as chaves e valores informados a propriedade _$set_. Caso a chave _multi_ receber true, significa que a função deve atualizar múltiplos registros. 

    Exemplo:
    * Atualizando nome de _'Jose'_ para _'João'_ e idade para _30_ anos:
    ```javascript
        db.alunos.update(
                            {
                                nome: 'Jose'
                            },
                            { 
                                $set: {
                                    nome: 'João'
                                },
                                {
                                    idade: 30
                                }
                            }
                        );
    ```
    * Atualizando todos os registros com sexo de _'F'_ para _'Feminino'_:
    ```javascript
        db.alunos.update(
                            {
                                sexo: 'F'
                            },
                            {
                                $set: {
                                    sexo: 'Feminino'
                                }
                            },
                            { 
                                multi: true 
                            }
                        );
    ```
* `db.nome_da_collection.remove(condicao, apenas_um):` remove o documento que atende a condição. Caso _apenas_um_ for true, remove todos os documentos que atendem a condição.

    Exemplo:
    * Removendo o primeiro registro com sexo igual a _'F'_:
    ```javascript
        db.alunos.remove(
                            {
                                sexo: 'F'
                            }
                        );
    ```