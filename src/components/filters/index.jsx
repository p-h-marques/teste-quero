import React, { useState } from 'react'
import { FiltersStyles } from './styles'

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
            code: '2020.01',
        },
    ]

    const [selectedFilter, setSelectedFilter] = useState(filters[0].code)

    return (
        <FiltersStyles>
            {filters.map(filter => {
                return (
                    <div
                        className={
                            selectedFilter === filter.code ? 'selected' : null
                        }
                        key={filter.code}
                        onClick={()=>{setSelectedFilter(filter.code)}}
                    >
                        {filter.label}
                    </div>
                )
            })}
        </FiltersStyles>
    )
}

export default Breadcrumbs
