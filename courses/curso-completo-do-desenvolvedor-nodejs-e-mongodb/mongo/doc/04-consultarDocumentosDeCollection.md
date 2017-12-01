# Consultar documentos de uma collection

## Operadores de comparação

| Operador | Nome                   | Operação         |
|----------|------------------------|------------------|
| $eq      | Equals                 | É igual a        |
| $gt      | Greater than           | Maior que        |
| $gte     | Greater than or equals | Maior ou igual a |
| $lt      | Less than              | Menor que        |
| $lte     | Less than or equals    | Menor ou igual a |
| $ne      | Not equal              | É diferente de   |

## Comandos

* `db.nome_da_collection.findOne()`: retorna o último documento inserido na collection;
* `db.nome_da_collection.find(condicao)`: se não informada uma condição, retorna todos os documentos da collection. Exemplos:

    * Utilizando operador _"é igual"_:
    ```javascript
    db.alunos.find({
                        nome: {
                                $eq: 'João'
                        }        
                    });
    ```

    * Utilizando operador _"menor que"_:
    ```javascript
    db.alunos.find({
                        idade: {
                                $lt: 30
                        }
                    });
    ```

    * Utilizando operador _"menor ou igual a"_:
    ```javascript
    db.alunos.find({
                        idade: {
                                $lte: 30
                        }
                    });
    ```

    
    * Utilizando operador _"é diferente de"_:
    ```javascript
    db.alunos.find({
                        sexo: {
                                $ne: 'M'
                        }
                    });
    ```
* `pretty()`: formata resultado de uma consulta para melhor visualização.

## Operadores lógicos

Utilizados para concatenação de operadores de comparação.

* AND: Basta passar as condições a serem avaliadas separadas por vírgula.
    
    Exemplos:
    * sexo = 'F' AND idade = 30
    ```javascript
    db.alunos.find({
                         sexo: {
                                 $eq: 'F'
                         },
                         idade: {
                                $gt: 30
                         }
                    });
    ```

* OR: Recebe uma lista com as condições a serem avaliadas.

    Exemplos:
    * sexo = 'Maria' OR nome = 'Jose'
    ```javascript
    db.alunos.find({
                         $or: [
                            {
                                nome: 'Maria'
                            },
                            {
                                nome: 'Jose'
                            }
                         ]
                    });
    ```
