import React from 'react'
import { SelectStyles } from './styles'

const Modal = ({options, label, name, id}) => {
    return (
        <SelectStyles>
            <label htmlFor={name}>{label}</label>
            <select name={name} id={id}>
                <option value="">Selecione...</option>
                {
                    options.map((option, key) => {
                        return (
                            <option value={option} key={key}>{option}</option>
                        )
                    })
                }
            </select>
        </SelectStyles>
    )
}

export default Modal
