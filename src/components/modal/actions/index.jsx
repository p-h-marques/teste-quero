import React, {useCallback, useContext} from 'react'
import { ModalActionsStyles } from './styles'

import Context from '../../../state/Context'
import * as actions from '../../../state/actions'

import Button from '../../button'

const ModalActions = () => {
    const { state, dispatch } = useContext(Context)

    /**
     * Clicando no botão de "Cancelar" no modal de filtros
     */
    const handleCancelClick = useCallback(()=>{
        dispatch(actions.cancelFilters())
    }, [state, dispatch])

    /**
     * Clicando no botão de "Aplicar" no modal de filtros
     */
    const handleApplyClick = useCallback(()=>{
        dispatch(actions.applyFilters(
            state.search.selected, state.main.courses, state.data
        ))
    }, [state, dispatch])

    /**
     * Corpo do componente
     */
    return (
        <ModalActionsStyles>
            <div>
                <Button
                    className="secondary"
                    label="Cancelar"
                    padding="big"
                    onClick={handleCancelClick}
                    test="button-cancel"
                />
            </div>
            <div>
                <Button
                    className={state.search.selected.length === 0 ? 'disabled' : 'primary'}
                    label="Adicionar bolsa(s)"
                    padding="big"
                    disabled={state.search.selected.length === 0}
                    onClick={handleApplyClick}
                    test="button-apply"
                />
            </div>
        </ModalActionsStyles>
    )
}

export default ModalActions
