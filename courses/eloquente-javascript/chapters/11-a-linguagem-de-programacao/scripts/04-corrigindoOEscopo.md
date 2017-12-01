# Corrigindo o escopo

_Resolução:_

``` javascript

    specialForms["set"] = function (args, env) {
        if (args.length != 2 || args[0].type != "word")
            throw new SyntaxError("Bad use of set");

        var varName = args[0].name;
        var varValue = evaluate(args[1], env);

        for (var scope = env; scope; scope = Object.getPrototypeOf(scope)) {
            if (Object.prototype.hasOwnProperty.call(scope, varName)) {
                scope[varName] = varValue;
                return varValue;
            }
        }

        throw new ReferenceError('Undefined variable:' + varName);
    };

```