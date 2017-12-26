const mongoose = require('mongoose'),
    restful = require('node-restful')


const toDoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        required: true,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = restful.model('Todo', toDoSchema)