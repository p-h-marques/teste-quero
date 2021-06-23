import React, { useContext, useCallback, useEffect, useState } from 'react'
import { ModalStyles } from './styles'

import Context from '../../state/Context'
import * as actions from '../../state/actions'
import { filterCourses } from '../../utils/functions'

import ModalFilters from './filters'

import Result from '../result'
import Button from '../button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Modal = () => {
    const OVERLAY = 'overlay'

    const [filteredCourses, setFilteredCourses] = useState([])
    const { state, dispatch } = useContext(Context)

    const handleModalShow = useCallback(() => {
        dispatch(actions.toogleModal(false))
    }, [state, dispatch])

    const handleOutsideClick = useCallback(
        e => {
            const collection = e.target.children

            if (collection.namedItem(OVERLAY) !== null) {
                dispatch(actions.toogleModal(false))
            }
        },
        [state, dispatch],
    )

    useEffect(() => {
        setFilteredCourses(filterCourses(state.data, state.search.filters))
    }, [state.search.filters, state.data])

    return (
        <ModalStyles
            visible={state.search.visible}
            onClick={e => handleOutsideClick(e)}
        >
            <div id={OVERLAY} className="overflow">
                <div className="container">
                    <div className="exit">
                        <FontAwesomeIcon
                            icon={faTimes}
                            style={{ width: '26px', height: '26px' }}
                            onClick={handleModalShow}
                        />
                    </div>

                    <div className="header">
                        <h1>Adicionar bolsa</h1>
                        <p>Filtre e adicione as bolsas de seu interesse. </p>
                    </div>

                    <ModalFilters />

                    <div className="results">
                        <div className="order">
                            <div>Resultado:</div>
                            <div className="select">
                                <div>Ordenando por &nbsp;</div>
                                <div>Nome da Faculdade</div>
                            </div>
                        </div>

                        <div className="courses">
                            {filteredCourses.map((course, key) => {
                                return <Result data={course} key={key} />
                            })}
                        </div>
                    </div>

                    <div className="actions">
                        <div>
                            <Button
                                className="secondary"
                                label="Cancelar"
                                padding="big"
                            />
                        </div>
                        <div>
                            <Button
                                className="primary"
                                label="Adicionar bolsa(s)"
                                padding="big"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </ModalStyles>
    )
}

export default Modal
