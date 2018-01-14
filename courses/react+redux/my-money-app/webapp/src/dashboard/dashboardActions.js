import axios from 'axios'

const BASE_URL = 'http://localhost:3003/api'
const CONSTANTS = {
    BILLING_SUMMARY_FETCHED: 'BILLING_SUMMARY_FETCHED'
}

export default CONSTANTS

export function getSummary() {
    const request = axios.get(`${BASE_URL}/billingCycles/summary`)
    return {
        type: CONSTANTS.BILLING_SUMMARY_FETCHED,
        payload: request
    }
}