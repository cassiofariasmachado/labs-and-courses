import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import CONSTS from '../consts'

const CONSTANTS = {
    TOKEN_VALIDATED: 'TOKEN_VALIDATED',
    USER_FETCHED: 'USER_FETCHED'
}

export default CONSTANTS

export function login(values) {
    return submit(values, `${CONSTS.OAPI_URL}/login`)
}

export function signup(values) {
    return submit(values, `${CONSTS.OAPI_URL}/signup`)
}

export function logout() {
    return { type: CONSTANTS.TOKEN_VALIDATED, payload: false }
}

export function validateToken(token) {
    return dispatch => {
        if (token) {
            axios.post(`${CONSTS.OAPI_URL}/validateToken`, { token })
                .then(resp => {
                    dispatch({ type: CONSTANTS.TOKEN_VALIDATED, payload: resp.data.valid })
                })
                .catch(e => dispatch({ type: CONSTANTS.TOKEN_VALIDATED, payload: false }))
        } else {
            dispatch({ type: CONSTANTS.TOKEN_VALIDATED, payload: false })
        }
    }
}

function submit(values, url) {
    return dispatch => {
        axios.post(url, values)
            .then(resp => {
                dispatch([
                    { type: CONSTANTS.USER_FETCHED, payload: resp.data }
                ])
            })
            .catch(e => {
                e.response.data.errors.forEach(
                    error => toastr.error('Erro', error))
            })
    }
}