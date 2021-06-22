import * as types from './types'

function reducer(state, action) {
    switch (action.type) {
        case types.SIMPLE_UPDATE:
            return { ...state, ...action.payload }

        default:
            throw new Error()
    }
}

export default reducer