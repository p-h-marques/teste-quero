import React, { useCallback, useContext, useState } from 'react'
import { FiltersStyles } from './styles'

import Context from '../../state/Context'
import * as actions from '../../state/actions'

const Breadcrumbs = () => {
    const { state, dispatch } = useContext(Context)

    /**
     * Opções do filtro
     */
    const [ filters ] = useState([
        { label: 'Todos os semestres', code: 'all' },
        { label: '2° semestre de 2019', code: '2019.2' },
        { label: '1° semestre de 2020', code: '2020.1' }
    ])

    /**
     * Filtrando cursos selecionados por semestre
     */
    const handleSemesterChange = useCallback(semester => {
        dispatch(actions.toogleSemester(semester))
    }, [state, dispatch])

    /**
     * Corpo do componente
     */
    return (
        <FiltersStyles>
            {filters.map(filter => {
                const isSelectedClass = state.main.filter === filter.code
                    ? 'selected'
                    : null

                return (
                    <div className={isSelectedClass}
                        key={filter.code}
                        onClick={()=>{handleSemesterChange(filter.code)}}
                        data-test={`main-filter-${filter.code.replace('.','-')}`}
                    >
                        {filter.label}
                    </div>
                )
            })}
        </FiltersStyles>
    )
}

export default Breadcrumbs
