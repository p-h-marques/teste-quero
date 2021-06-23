import React, {useCallback, useContext, useState, useEffect} from 'react'
import { ModalFiltersStyles } from './styles'

import Context from '../../../state/Context'
import * as actions from '../../../state/actions'
import { filterCoursesList, filterRangeValues } from '../../../utils/functions'

import Select from '../../select'
import Checkbox from '../../checkbox'

const ModalFilters = () => {
    const [courses, setCourses] = useState([])
    const [range, setRange]     = useState({min: 0, max: 10000})
    const [actualRange, setActualRange] = useState(10000)
    const { state, dispatch }   = useContext(Context)

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

    const handleRangeChange = useCallback(
        e => {
            dispatch(actions.updateRange(e.target.value))
        },
        [state, dispatch]
    )

    const handleCheckboxChange = useCallback(
        e => {
            dispatch(
                actions.updateKind({
                    type: e.target.value,
                    status: e.target.checked,
                }),
            )
        },
        [state, dispatch],
    )

    useEffect(()=>{
        console.log(state)
    }, [state])

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
                id="selectCity"
                onChange={e =>
                    dispatch(
                        actions.updateSelect({
                            type: 'city',
                            data: e.target.value,
                        }),
                    )
                }
            />

            <Select
                options={courses}
                label="SELECIONE O CURSO DE SUA PREFERÊNCIA"
                name="course"
                id="selectCourse"
                onChange={e =>
                    dispatch(
                        actions.updateSelect({
                            type: 'course',
                            data: e.target.value,
                        }),
                    )
                }
            />

            <div className="options">
                <p>COMO VOCÊ QUER ESTUDAR?</p>
                <div className="inputs">
                    <Checkbox
                        name="kind"
                        value="Presencial"
                        label="Presencial"
                        onChange={e => handleCheckboxChange(e)}
                        checked={state.search.filters.kind['Presencial']}
                    />
                    <Checkbox
                        name="kind"
                        value="EaD"
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
                    onChange={e => {
                        setActualRange(parseInt(e.target.value))
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
