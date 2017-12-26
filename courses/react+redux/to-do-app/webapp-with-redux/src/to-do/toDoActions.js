import axios from 'axios'

const URL = 'http://localhost:3000/api/todos'
const getUrl = (id = '') => {
    return `${URL}/${id}`
}

export const actions = {
    DESCRIPTION_CHANGE: 'DESCRIPTION_CHANGE',
    TO_DO_SEARCH: 'TO_DO_SEARCH',
    TO_DO_CLEAR: 'TO_DO_CLEAR'
}

export const changeDescription = (event) => ({
    type: actions.DESCRIPTION_CHANGE,
    payload: event.target.value
})

export const search = () => {
    return (dispatch, getState) => {
        const description = getState().toDo.description
        const search = description ? `&description__regex=/${description}/` : ''

        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(res => dispatch({
                type: actions.TO_DO_SEARCH,
                payload: res.data
            }))
    }
}

export const add = (description) => {
    return dispatch => {
        axios.post(URL, {
                description
            })
            .then(res => {
                dispatch({
                    type: actions.TO_DO_CLEAR
                })
            })
            .then(res => {
                dispatch(search())
            })
    }
}

export const markAsDone = (toDo) => {
    return dispatch => {
        axios.put(getUrl(toDo._id), {
            ...toDo,
            done: true
        }).then(res => dispatch(search()))
    }
}

export const markAsPending = (toDo) => {
    return dispatch => {
        axios.put(getUrl(toDo._id), {
            ...toDo,
            done: false
        }).then(res => dispatch(search()))
    }
}

export const remove = (toDo) => {
    return dispatch => {
        axios.delete(getUrl(toDo._id))
            .then(res => dispatch(search()))
    }
}

export const clear = () => {
    return [{
        type: actions.TO_DO_CLEAR
    }, search()]
}