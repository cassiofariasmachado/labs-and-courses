import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import HOSTS from '../consts'

import { showTabs, selectTab } from '../common/tab/tabActions'

const INITIAL_VALUES = {
    credits: [{}],
    debits: [{}]
}

const CONSTANTS = {
    BILLING_CYCLES_FETCHED: 'BILLING_CYCLES_FETCHED'
}

export default CONSTANTS

export function getList() {
    const request = axios.get(`${HOSTS.API_URL}/billingCycles`)
    return {
        type: CONSTANTS.BILLING_CYCLES_FETCHED,
        payload: request
    }
}

export function create(billingCycle) {
    return submit(billingCycle, 'post')
}

export function update(billingCycle) {
    return submit(billingCycle, 'put')
}

export function remove(billingCycle) {
    return submit(billingCycle, 'delete')
}

function submit(billingCycle, method) {
    return dispatch => {
        const id = billingCycle._id || ''
        axios[method](`${HOSTS.API_URL}/billingCycles/${id}`, billingCycle)
            .then(res => {
                toastr.success('Sucesso', 'Operação realizada com sucesso!')
                dispatch(init())
            })
            .catch(err => {
                err.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}

export function showUpdate(billingCycle) {
    return [showTabs('tabUpdate'), selectTab('tabUpdate'), initialize('billingCycleForm', billingCycle)]
}

export function showDelete(billingCycle) {
    return [showTabs('tabDelete'), selectTab('tabDelete'), initialize('billingCycleForm', billingCycle)]
}

export function init() {
    return [getList(), showTabs('tabList', 'tabCreate'), selectTab('tabList'), initialize('billingCycleForm', INITIAL_VALUES)]
}