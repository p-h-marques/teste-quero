import React from 'react'
import { ButtonStyles } from './styles'

const Button = ({ className, label, padding, onClick, disabled, test }) => {

    /**
     * Corpo do componente
     */
    return (
        <ButtonStyles
            className={className + ' ' + padding}
            onClick={onClick}
            disabled={disabled}
            data-test={test}
        >
            {label}
        </ButtonStyles>
    )
}

export default Button
