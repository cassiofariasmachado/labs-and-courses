import AUTH_CONSTANTS from './authActions'

const USER_KEY = '_mymoney_user'

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem(USER_KEY)),
    validToken: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AUTH_CONSTANTS.TOKEN_VALIDATED:
            if (action.payload) {
                return { ...state, validToken: true }
            } else {
                localStorage.removeItem(USER_KEY)
                return { ...state, validToken: false, user: null }
            }
        case AUTH_CONSTANTS.USER_FETCHED:
            localStorage.setItem(USER_KEY, JSON.stringify(action.payload))
            return { ...state, user: action.payload, validToken: true }
        default:
            return state
    }
}