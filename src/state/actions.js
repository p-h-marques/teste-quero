import * as types from './types'

export function simpleUpdate(params) {
    return {
        type: types.SIMPLE_UPDATE,
        payload: { ...params },
    }
}