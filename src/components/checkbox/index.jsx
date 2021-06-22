import React from 'react'
import { CheckboxStyles } from './styles'

const Checkbox = ({name, value, label}) => {
    return (
        <CheckboxStyles>
            <>
                <input
                    type="checkbox"
                    name={name}
                    id={value}
                    value={value}
                />
                <label htmlFor={value}>{label}</label>
            </>
        </CheckboxStyles>
    )
}

export default Checkbox
