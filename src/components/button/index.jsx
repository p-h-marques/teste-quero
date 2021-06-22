import React from 'react'
import { ButtonStyles } from './styles'

const Button = ({className, label, padding}) => {
    return (
        <ButtonStyles className={className + ' ' + padding}>
            {label}
        </ButtonStyles>
    )
}

export default Button
