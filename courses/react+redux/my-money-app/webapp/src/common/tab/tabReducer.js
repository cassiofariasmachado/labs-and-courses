import TAB_CONSTANTS from './tabActions'

const INITIAL_STATE = { selected: '', visible: {} }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case (TAB_CONSTANTS.TAB_SELECTED): {
            return { ...state, selected: action.payload }
        }
        case (TAB_CONSTANTS.TAB_SHOWED): {
            return { ...state, visible: action.payload }
        }
        default:
            return state
    }
}