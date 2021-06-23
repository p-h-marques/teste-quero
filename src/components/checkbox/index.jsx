import React from 'react'
import { CheckboxStyles } from './styles'


const Checkbox = (props) => {
    return (
        <CheckboxStyles>
            <>
                <input
                    type="checkbox"
                    {...props}
                    id={props.value}
                />
                <label htmlFor={props.value}>{props.label}</label>
            </>
        </CheckboxStyles>
    )
}

export default Checkbox