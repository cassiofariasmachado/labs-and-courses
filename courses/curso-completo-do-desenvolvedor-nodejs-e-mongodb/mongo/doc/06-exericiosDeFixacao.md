# Projeto prático - API RESTful e Instagram Clone WEB

## Atividades para fixação do conteúdo
### Section 14, Lecture 79

#### Atividades para fixação do conteúdo

1. Crie um banco de dados chamado biblioteca

2. Crie uma coleção (collection) chamada livros

3. Crie os sequintes documentos:

``` 
título: Introdução a linguagem de marcação HTML
valor: 25.00
Autor: João

R: db.livros.save({titulo: 'Introdução a linguagem de marcação HTML', valor: 25, autor: 'João'});
```

```
título: NodeJS do básico ao avançado
valor: 280.00
Autor: Jorge

R: db.livros.save({titulo: 'NodeJS  do básico ao avançado', valor: 280, autor: 'Jorge'});
```

```
título: Android - criando apps reais
valor: 290.00
Autor: Jamilton

R: db.livros.save({titulo: 'Android - criando apps reais', valor: 290, autor: 'Jamilton'});
```

```
título: PHP e MySQL
valor: 190.00
Autor: Fernando

R: db.livros.save({titulo: 'PHP e MySQL', valor: 190, autor: 'Fernando'});
```

```
título: Lógica de Programação
valor: 20.00
Autor: Maria

R: db.livros.save({titulo: 'Lógica de programação', valor: 20, autor: 'maria'});
```

4. Crie as seguintes consultas:
    1. Crie uma consulta que retorne apenas os documentos de livros com valores superiores a 200.00
    ```
    R: db.livros.find({valor: {$gt: 200}});
    ```
    2. Crie uma consulta que retorne apenas os documentos com valores entre 10 e 30
    ```
    R: db.livros.find({valor: {$gt: 10}, valor: {$lt: 30}});
    ```
    3. Crie uma consulta que retorne todos os documentos, exeto aqueles cujo autor seja Fernando
    ```
    R: db.livros.find({autor: {$ne: 'Fernando'}});
    ```

5. Atualize os seguintes documentos:
    1. Atualize o documento cujo o título é PHP e MySQL, passando seu valor de 190.00 para 175.00
    ```
    R: db.livros.update({titulo: {$eq: 'PHP e MySQL'}}, {$set: {valor: 175}});
    ```
    2. Atualize o documento cujo autor é Jorge, passando seu título para Curso Completo de NodeJS
    ```
    R: db.livros.update({autor: {$eq: 'Jorge'}}, {$set: {titulo: 'Curso Completo de NodeJS'}});
    ```
    3. Atualize todos os documentos cujo valor são iguais ou inferiores a 25.00 para o valor 27.00
    ```
    R: db.livros.update({autor: {$eq: 'Jorge'}}, {$set: {titulo: 'Curso Completo de NodeJS'}});
    ```
6. Remove os seguintes documentos:
    1. Remova o documento cujo autor é João
    ```
    R: db.livros.remove({autor: {$eq: 'João'}}, true);
    ```
    2. Remova todos os documentos cujo valor é superior a 280.00
    ```
    R: db.livros.remove({valor: {$gt: 280}}, false);
    ```
    3. Remova todos os documentos cujo valor é inferior a 30.00
    ```
    R: db.livros.remove({valor: {$lt: 30}}, false);
    ```