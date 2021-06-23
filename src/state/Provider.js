import React, { useReducer } from 'react'
import Context from './Context'
import reducer from './reducers'

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
        }
    },
    data: []
}


function Provider({ children }) {
    const [state, dispatch] = useReducer(
        reducer,
        initialState,
    )

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}

export default Provider