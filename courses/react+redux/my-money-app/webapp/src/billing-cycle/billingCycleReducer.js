import BILLING_CYCLES_CONSTANTS from './billingCycleActions'

const INITIAL_STATE = { list: [] }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BILLING_CYCLES_CONSTANTS.BILLING_CYCLES_FETCHED:
            return { ...state, list: action.payload.data }
        default:
            return state
    }
}