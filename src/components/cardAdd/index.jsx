import React, { useCallback, useContext } from 'react'
import { CardAddStyles } from './styles'

import Context from '../../state/Context'
import * as actions from '../../state/actions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const CardAdd = () => {
    const { state, dispatch } = useContext(Context)

    const handleModalShow = useCallback(()=>{
        dispatch(actions.toogleModal(true))
    }, [state, dispatch])

    return (
        <CardAddStyles onClick={handleModalShow} data-test="card-add">
            <FontAwesomeIcon icon={faPlus} style={{width: '64px', height: '64px'}}/>
            <h2>Adicionar curso</h2>
            <p>Clique para adicionar bolsas de cursos do seu interesse</p>
        </CardAddStyles>
    )
}

export default CardAdd
