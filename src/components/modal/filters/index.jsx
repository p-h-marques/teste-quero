import React, {useCallback, useContext, useState, useEffect} from 'react'
import { ModalFiltersStyles } from './styles'

import Context from '../../../state/Context'
import * as actions from '../../../state/actions'
import { filterCoursesList, filterRangeValues } from '../../../utils/functions'

import Select from '../../select'
import Checkbox from '../../checkbox'

const ModalFilters = () => {
    const { state, dispatch }   = useContext(Context)

    /**
     * Modificando opções dos filtros de acordo
     * com os dados provenientes da API
     */
    const [courses, setCourses]         = useState([])
    const [range, setRange]             = useState({min: 0, max: 10000})
    const [actualRange, setActualRange] = useState(10000)

    useEffect(() => {
        const filteredCoursesList = filterCoursesList(state.data)
        const filteredRangeValues = filterRangeValues(state.data)

        setCourses(filteredCoursesList)
        setRange(filteredRangeValues)

        if(filteredRangeValues.max > 0){
            dispatch(actions.updateRange(filteredRangeValues.max))
            setActualRange(filteredRangeValues.max)
        }
    }, [state.data])

    /**
     * Atualizando filtro de range de valores
     */
    const handleRangeChange = useCallback(
        e => {
            dispatch(actions.updateRange(e.target.value))
        },
        [state, dispatch]
    )

    /**
     * Atualizando filtro de modalidade de curso
     */
    const handleCheckboxChange = useCallback(
        e => {
            dispatch(
                actions.updateKind(e.target.value, e.target.checked),
            )
        },
        [state, dispatch],
    )

    /**
     * Corpo do componente
     */
    return (
        <ModalFiltersStyles>
            <Select
                options={[
                    'Fortaleza',
                    'Jacareí',
                    'São José dos Campos',
                    'São Paulo',
                ]}
                label="SELECIONE SUA CIDADE"
                name="city"
                test="select-city"
                id="selectCity"
                onChange={e =>
                    dispatch(
                        actions.updateSelect('city', e.target.value)
                    )
                }
                value={state.search.filters.city}
            />

            <Select
                options={courses}
                label="SELECIONE O CURSO DE SUA PREFERÊNCIA"
                name="course"
                test="select-course"
                id="selectCourse"
                onChange={e =>
                    dispatch(
                        actions.updateSelect('course', e.target.value)
                    )
                }
                value={state.search.filters.course}
            />

            <div className="options">
                <p>COMO VOCÊ QUER ESTUDAR?</p>
                <div className="inputs">
                    <Checkbox
                        name="kind"
                        value="Presencial"
                        data-test="check-presencial"
                        label="Presencial"
                        onChange={e => handleCheckboxChange(e)}
                        checked={state.search.filters.kind['Presencial']}
                    />
                    <Checkbox
                        name="kind"
                        value="EaD"
                        data-test="check-ead"
                        label="A distância"
                        onChange={e => handleCheckboxChange(e)}
                        checked={state.search.filters.kind['EaD']}
                    />
                </div>
            </div>

            <div className="slider">
                <p>ATÉ QUANTO PODE PAGAR?</p>
                <p className="value">
                    R$ {actualRange}
                </p>
                <input
                    type="range"
                    name="range"
                    id="range"
                    min={range.min}
                    max={range.max}
                    step={1}
                    value={actualRange}
                    data-test="range-value"
                    onChange={e => {
                        setActualRange(parseInt(e.target.value, 10))
                    }}
                    onMouseUp={e => {
                        handleRangeChange(e)
                    }}
                />
            </div>
        </ModalFiltersStyles>
    )
}

export default ModalFilters
