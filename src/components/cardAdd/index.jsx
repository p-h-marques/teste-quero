import React from 'react'
import { CardAddStyles } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const CardAdd = () => {
    return (
        <CardAddStyles>
            <FontAwesomeIcon icon={faPlus} style={{width: '64px', height: '64px'}}/>
            <h2>Adicionar curso</h2>
            <p>Clique para adicionar bolsas de cursos do seu interesse</p>
        </CardAddStyles>
    )
}

export default CardAdd
