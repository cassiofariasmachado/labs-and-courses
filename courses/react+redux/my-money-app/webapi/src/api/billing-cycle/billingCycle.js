const restful = require('node-restful'),
    mongoose = restful.mongoose


const creditSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Informe o valor do crédito.']
    },
    value: {
        type: Number,
        min: 0,
        required: true
    }
})

const debitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        min: 0,
        required: [true, 'Informe o valor do débito.']
    },
    status: {
        type: String,
        required: false,
        uppercase: true,
        enum: [
            'PAGO',
            'PENDENTE',
            'AGENDADO'
        ]
    }
})

const billingCycleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    month: {
        type: Number,
        min: 1,
        max: 12
    },
    year: {
        type: Number,
        min: 1970,
        required: true
    },
    credits: [creditSchema],
    debits: [debitSchema]
})

module.exports = restful.model('BillingCycle', billingCycleSchema)