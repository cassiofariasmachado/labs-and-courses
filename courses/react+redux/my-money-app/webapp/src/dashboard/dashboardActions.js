import axios from 'axios'

import HOSTS from '../consts'

const CONSTANTS = {
    BILLING_SUMMARY_FETCHED: 'BILLING_SUMMARY_FETCHED'
}

export default CONSTANTS

export function getSummary() {
    const request = axios.get(`${HOSTS.API_URL}/billingCycles/summary`)
    return {
        type: CONSTANTS.BILLING_SUMMARY_FETCHED,
        payload: request
    }
}