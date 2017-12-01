// Execute on sandbox

function get(url, headers) {
    return new Promise(function (succeed, fail) {
        var req = new XMLHttpRequest();
        req.open('GET', url, true);

        Object.keys(headers).forEach((key) => {
            req.setRequestHeader(key, headers[key]);
        });

        req.addEventListener('load', () => {
            if (req.status < 400)
                succeed(req.responseText);
            else
                fail(new Error('Request failed: ' + req.statusText));
        });

        req.addEventListener('error', () => {
            fail(new Error('Network error'));
        });

        req.send(null);
    });
}

const authorUrl = 'http://eloquentjavascript.net/author';

get(authorUrl, {
    accept: 'text/plain'
}).then((res) => {
    console.log(res)
});

get(authorUrl, {
    accept: 'text/html'
}).then((res) => {
    console.log(res)
});

get(authorUrl, {
    accept: 'application/json'
}).then((res) => {
    console.log(res)
});

get(authorUrl, {
    accept: 'application/rainbows+unicorns'
}).then((res) => {
    console.log(res)
});