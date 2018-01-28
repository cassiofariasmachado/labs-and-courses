const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html' })
    res.end('<h1>Hello world!</h1>')
})

const port = 3456

server.listen(port, () => {
    console.log(`Running on port ${port}`)
})
