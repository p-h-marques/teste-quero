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

export function applyFilters(data, all){
    let payload = []

    data.forEach(mycourse => {
        const courseFilters = mycourse.split(' | ')
        let allCourses = all

        allCourses = allCourses.filter(allcourse => allcourse.course.name === courseFilters[0])
        allCourses = allCourses.filter(allcourse => allcourse.university.name === courseFilters[1])
        allCourses = allCourses.filter(allcourse => allcourse.course.kind === courseFilters[2])

        payload.push(allCourses[0])
    })

    return {
        type: types.APPLY_FILTERS,
        payload
    }
}