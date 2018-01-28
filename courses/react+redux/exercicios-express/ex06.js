const express1 = require('express'),
    express2 = require('express'),
    server1 = express1(),
    server2 = express1(),
    router1 = express1.Router(),
    router2 = express1.Router()

console.log(`Express: ${express1 === express2}`)
console.log(`Express instance: ${server1 === server2}`)
console.log(`Express router instance: ${router1 === router2}`)
