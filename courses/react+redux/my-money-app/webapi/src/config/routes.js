const express = require('express'),
    nodeRestful = require('node-restful'),
    auth = require('./auth')

module.exports = (server) => {

    /*
    * Rotas protegidas por token JWT
    */
    const protectedApi = express.Router()
    server.use('/api', protectedApi)
    protectedApi.use(auth)
    const BillingCycle = require('../api/billing-cycle/billingCycleService')
    BillingCycle.register(protectedApi, '/billingCycles')

    /*
    * Rotas abertas
    */
    const openApi = express.Router()
    server.use('/oapi', openApi)
    const AuthService = require('../api/user/authService')
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)
}