import React, { useCallback, useContext } from 'react'
import { ResultStyles } from './styles'

import Context from '../../state/Context'
import * as actions from '../../state/actions'
import {formatingMoney} from '../../utils/functions'

import Checkbox from '../checkbox'

const Result = ({ data, id }) => {
    const { state, dispatch } = useContext(Context)

    /**
     * Gerencia a seleção dos cursos filtrados no modal
     */
    const handleCourseSelect = useCallback(
        (e, id) => {
            dispatch(actions.updateFilterSelectedCourses(
                e.target.checked ? 'add' : 'remove',
                id,
                state.search.selected
            ))
        },
        [state.search.selected, dispatch],
    )

    /**
     * Corpo do componente
     */
    return (
        <ResultStyles>
            <div className="checkbox">
                <Checkbox
                    name="course"
                    value={data.course.name}
                    label=""
                    onChange={e => {
                        handleCourseSelect(e, id)
                    }}
                    checked={state.search.selected.includes(id)}
                    data-test="result-check"
                />
            </div>
            <div className="logo">
                <img
                    src={data.university.logo_url}
                    alt={data.university.name}
                />
            </div>
            <div className="content">
                <div className="infos">
                    <p className="name">{data.course.name}</p>
                    <p className="level">{data.course.level}</p>
                </div>
                <div className="price">
                    <p className="discount">
                        Bolsa de <span>{data.discount_percentage}%</span>
                    </p>
                    <p className="value">R$ {formatingMoney(data.price_with_discount)}/mês</p>
                </div>
            </div>
        </ResultStyles>
    )
}

export default Result
