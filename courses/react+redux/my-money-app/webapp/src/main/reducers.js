import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'
import authReducer from '../auth/authReducer'

import dashboardReducer from '../dashboard/dashboardReducer'
import tabReducer from '../common/tab/tabReducer'
import billingCycleReducer from '../billing-cycle/billingCycleReducer'

const rootReducers = combineReducers({
    dashboard: dashboardReducer,
    tab: tabReducer,
    billingCycle: billingCycleReducer,
    form: formReducer,
    toastr: toastrReducer,
    auth: authReducer
})

export default rootReducers