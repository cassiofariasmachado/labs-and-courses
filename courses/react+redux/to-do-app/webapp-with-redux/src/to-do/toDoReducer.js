import { actions } from './toDoActions'

const INITIAL_STATE = {
    description: '',
    list: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.DESCRIPTION_CHANGE:
            return {
                ...state,
                description: action.payload
            }
        case actions.TO_DO_SEARCH:
            return {
                ...state,
                list: action.payload
            }
        case actions.TO_DO_CLEAR:
            return { ...state,
                description: ''
            }
        default:
            return state
    }
}