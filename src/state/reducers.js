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

        default:
            throw new Error()
    }
}

export default reducer
