import React, { useCallback, useContext } from 'react'
import { FiltersStyles } from './styles'

import Context from '../../state/Context'
import * as actions from '../../state/actions'

const Breadcrumbs = () => {
    const filters = [
        {
            label: 'Todos os semestres',
            code: 'all',
        },
        {
            label: '2° semestre de 2019',
            code: '2019.2',
        },
        {
            label: '1° semestre de 2020',
            code: '2020.1',
        },
    ]

    const { state, dispatch } = useContext(Context)

    const handleSemesterChange = useCallback(semester => {
        dispatch(actions.toogleSemester(semester))
    }, [state, dispatch])

    return (
        <FiltersStyles>
            {filters.map(filter => {
                return (
                    <div
                        className={
                            state.main.filter === filter.code ? 'selected' : null
                        }
                        key={filter.code}
                        onClick={()=>{handleSemesterChange(filter.code)}}
                    >
                        {filter.label}
                    </div>
                )
            })}
        </FiltersStyles>
    )
}

export default Breadcrumbs
