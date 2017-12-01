#Comentários

_Resolução:_

``` javascript

function skipSpace(string) {
    var first = string.search(/\S/);
    if (first == -1)
        return "";

    var commentRegex = /(#.*\n)*/gi;

    return string.slice(first).replace(commentRegex, '');
}

```