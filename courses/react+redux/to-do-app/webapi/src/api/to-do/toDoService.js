const ToDo = require('./toDo')

ToDo.methods(['get', 'post', 'put', 'delete'])
ToDo.updateOptions({
    new: true,
    runValidators: true
})

module.exports = ToDo