import React from 'react'
import { CheckboxStyles } from './styles'

const Checkbox = (props) => {

    /**
     * Corpo do componente
     */
    return (
        <CheckboxStyles>
            <>
                <input
                    type="checkbox"
                    {...props}
                    id={props.value.toLowerCase().replaceAll(' ','')}
                />
                <label htmlFor={props.value}>{props.label}</label>
            </>
        </CheckboxStyles>
    )
}

export default Checkbox