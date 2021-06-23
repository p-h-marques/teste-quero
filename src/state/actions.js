import * as types from './types'

export function toogleModal(visible){
    return {
        type: types.TOOGLE_MODAL,
        payload: visible,
    }
}

export function toogleSemester(semester){
    return {
        type: types.TOOGLE_SEMESTER,
        payload: semester,
    }
}

export function updateRange(max){
    return {
        type: types.UPDATE_RANGE,
        payload: parseInt(max),
    }
}

export function updateKind({type, status}) {
    return {
        type: types.UPDATE_KIND,
        payload: { type, status },
    }
}

export function fetchData(data){
    return {
        type: types.FETCH_DATA,
        payload: data
    }
}

export function updateSelect({type, data}){
    return {
        type: types.UPDATE_SELECT,
        payload: {type, data}
    }
}