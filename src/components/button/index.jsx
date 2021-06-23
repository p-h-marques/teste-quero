import React from 'react'
import { ButtonStyles } from './styles'

const Button = ({ className, label, padding, onClick, disabled }) => {
    return (
        <ButtonStyles
            className={className + ' ' + padding}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </ButtonStyles>
    )
}

export default Button
