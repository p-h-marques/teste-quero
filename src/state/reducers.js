import * as types from './types'

function reducer(state, action) {
    switch (action.type) {
        case types.TOOGLE_MODAL:
            return {
                ...state,
                search: { ...state.search, visible: action.payload },
            }

        case types.TOOGLE_SEMESTER:
            return {
                ...state,
                main: { ...state.main, filter: action.payload },
            }

        case types.UPDATE_RANGE:
            return {
                ...state,
                search: {
                    ...state.search,
                    filters: { ...state.search.filters, max: action.payload },
                },
            }

        case types.UPDATE_KIND:
            return {
                ...state,
                search: {
                    ...state.search,
                    filters: {
                        ...state.search.filters,
                        kind: {
                            ...state.search.filters.kind,
                            [action.payload.type]: action.payload.status,
                        },
                    },
                },
            }

        case types.FETCH_DATA:
            return {
                ...state,
                data: action.payload,
            }

        case types.UPDATE_SELECT:
            return {
                ...state,
                search: {
                    ...state.search,
                    filters: {
                        ...state.search.filters,
                        [action.payload.type]: action.payload.data
                    },
                }
            }

        case types.UPDATE_FILTER_SELECTED_COURSES:
            return {
                ...state,
                search: {
                    ...state.search,
                    selected: action.payload
                }
            }

        case types.CANCEL_FILTERS:
            return {
                ...state,
                search: {
                    filters: {
                        city: '',
                        course: '',
                        kind: {
                            Presencial: true,
                            EaD: true
                        },
                        max: state.search.filters.max
                    },
                    selected: [],
                    visible: false
                }
            }

        case types.APPLY_FILTERS:
            return {
                ...state,
                main: {
                    ...state.main,
                    courses: action.payload
                },
                search: {
                    ...state.search,
                    visible: false,
                    selected: []
                }
            }

        case types.REMOVE_COURSE:
            return {
                ...state,
                main: {
                    ...state.main,
                    courses: action.payload
                }
            }

        default:
            throw new Error()
    }
}

export default reducer
