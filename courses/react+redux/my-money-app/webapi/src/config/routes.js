const express = require('express'),
    nodeRestful = require('node-restful')

module.exports = (server) => {
    const router = express.Router()
    server.use('/api', router)

    const BillingCycle = require('../api/billing-cycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}