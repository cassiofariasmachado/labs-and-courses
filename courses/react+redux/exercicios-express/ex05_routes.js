const express = require('express'),
    router = express.Router()

router.use((req, res, next) => {
    const init = Date.now()
    next()
    console.log(`Time: ${Date.now() - init} ms`)
})

router.get('/products/:id', (req, res) => {
    res.json({
        id: req.params.id,
        name: 'Caneta'
    })
})

router.get('/customers/:id', (req, res) => {
    res.json({
        id: req.params.id,
        name: 'João'
    })
})

module.exports = router
