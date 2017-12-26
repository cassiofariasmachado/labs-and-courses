import { combineReducers } from 'redux'
import toDoReducer from '../to-do/toDoReducer'

const rootReducer = combineReducers({
    toDo: toDoReducer
})

export default rootReducer