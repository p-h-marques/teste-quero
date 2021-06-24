import React, { useReducer } from 'react'
import Context from './Context'
import reducer from './reducers'

export const STORAGE = 'quero_storage'

export const initialState = {
    main: {
        filter: 'all',
        courses: []
    },
    search: {
        visible: false,
        filters: {
            city: '',
            course: '',
            kind: {
                Presencial: true,
                EaD: true
            },
            max: 10000
        },
        selected: []
    },
    data: []
}

function fetchingLocalStorage(initial){
    const dataStored = localStorage.getItem(STORAGE)

    if(dataStored === null) return initial

    return {
        ...initial,
        main: {
            ...initial.main,
            courses: JSON.parse(dataStored)
        }
    }
}


function Provider({ children }) {
    const [state, dispatch] = useReducer(
        reducer,
        initialState,
        fetchingLocalStorage
    )

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}

export default Provider