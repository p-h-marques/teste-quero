import * as types from './types'
import {getSelectedCourses, getCourseId} from '../utils/functions'

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

export function updateFilterSelectedCourses({type, data, prev}){
    switch (type) {
        case 'add':
            prev.push(data)
            break

        case 'remove':
            if (prev.indexOf(data) > -1)
                prev.splice(prev.indexOf(data), 1)
            break

        default:
            break
    }

    return {
        type: types.UPDATE_FILTER_SELECTED_COURSES,
        payload: prev
    }
}

export function cancelFilters(){
    return {type: types.CANCEL_FILTERS}
}

export function applyFilters(selected, actual, all){
    actual.forEach(prevCourse => {
        if(!selected.includes(getCourseId(prevCourse))) selected.push(getCourseId(prevCourse))
    })

    return {
        type: types.APPLY_FILTERS,
        payload: getSelectedCourses(selected, all)
    }
}

export function removeCourse(course, all){
    all.forEach((prevCourse, index) => {
        if(JSON.stringify(prevCourse) === JSON.stringify(course)){
            all.splice(index, 1)
        }
    })

    return {
        type: types.REMOVE_COURSE,
        payload: all
    }
}

export function updateSelectedCourses(list){
    return {
        type: types.UPDATE_SELECTED_COURSES,
        payload: list
    }
}