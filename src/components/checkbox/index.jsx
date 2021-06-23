import React, { useContext, useCallback } from 'react'
import { CheckboxStyles } from './styles'

import Context from '../../state/Context'
import * as actions from '../../state/actions'

const Checkbox = ({ name, value, label }) => {
    const { state, dispatch } = useContext(Context)

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

    return (
        <CheckboxStyles>
            <>
                <input
                    type="checkbox"
                    name={name}
                    id={value}
                    value={value}
                    checked={state.search.filters.kind[value]}
                    onChange={e => handleCheckboxChange(e)}
                />
                <label htmlFor={value}>{label}</label>
            </>
        </CheckboxStyles>
    )
}

export default Checkbox
