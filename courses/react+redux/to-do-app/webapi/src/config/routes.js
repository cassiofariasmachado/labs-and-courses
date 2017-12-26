const express = require('express')

module.exports = (server) => {

    const router = express.Router()
    server.use('/api', router)

    const toDoService = require('../api/to-do/toDoService')
    toDoService.register(router, '/todos')

}