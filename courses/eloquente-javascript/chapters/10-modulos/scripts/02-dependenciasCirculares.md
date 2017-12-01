# Dependências circulares:

```javascript
function require(name) {
  if (name in require.cache)
    return require.cache[name];

  var code = new Function("exports, module", readFile(name));
  var exports = {}, module = {exports: exports};

  require.cache[name] = module.exports;
  code(exports, module);

  return module.exports;
}
require.cache = Object.create(null);
```

_Conclusão:_ Funciona porque por referência o objeto que é vinculado ao cache será atualizado após ser carregado através da chamada da função `code`. Daria erro, se tentasse acessar alguma propriedade do modulo e ele ainda não tivesse sido carregado. Vide exemplo.