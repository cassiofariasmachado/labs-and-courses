export function inc() {
    return {
        type: 'INC'
    }
}

export function dec() {
    return {
        type: 'DEC'
    }
}

export function stepChanged(event) {
    return {
        type: 'STEP_CHANGED',
        payload: event.target.value
    }
}