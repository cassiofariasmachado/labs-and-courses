const _ = require('lodash')

const students = [
    {
        name: 'João',
        score: 9.1
    },
    {
        name: 'Maria',
        score: 6
    },
    {
        name: 'Carlos',
        score: 7.2
    },
    {
        name: 'Pedro',
        score: 8
    },
    {
        name: 'Cesar',
        score: 4.2
    }
]

const average = _.sumBy(students, 'score') / students.length

console.log(average)