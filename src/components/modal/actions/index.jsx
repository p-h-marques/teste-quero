import React, {useCallback, useContext} from 'react'
import { ModalActionsStyles } from './styles'

import Context from '../../../state/Context'
import * as actions from '../../../state/actions'

import Button from '../../button'

const ModalActions = () => {
    const { state, dispatch } = useContext(Context)

    const handleCancelClick = useCallback(()=>{
        dispatch(actions.cancelFilters())
    }, [state, dispatch])

    const handleApplyClick = useCallback(()=>{
        dispatch(actions.applyFilters(state.search.selected, state.main.courses, state.data))
    }, [state, dispatch])

    return (
        <ModalActionsStyles>
            <div>
                <Button
                    className="secondary"
                    label="Cancelar"
                    padding="big"
                    onClick={handleCancelClick}
                />
            </div>
            <div>
                <Button
                    className={state.search.selected.length === 0 ? 'disabled' : 'primary'}
                    label="Adicionar bolsa(s)"
                    padding="big"
                    disabled={state.search.selected.length === 0}
                    onClick={handleApplyClick}
                />
            </div>
        </ModalActionsStyles>
    )
}

export default ModalActions
