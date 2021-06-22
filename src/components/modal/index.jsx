import React from 'react'
import { ModalStyles } from './styles'

import Select from '../select'
import Checkbox from '../checkbox'
import Result from '../result'
import Button from '../button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons'

const Modal = () => {
    return (
        <ModalStyles>
            <div className="overflow">
                <div className="container">
                    <div className="exit">
                        <FontAwesomeIcon
                            icon={faTimes}
                            style={{ width: '26px', height: '26px' }}
                        />
                    </div>

                    <div className="header">
                        <h1>Adicionar bolsa</h1>
                        <p>Filtre e adicione as bolsas de seu interesse. </p>
                    </div>

                    <div className="filters">
                        <Select
                            options={[
                                'Fortaleza',
                                'Jacareí',
                                'São José dos Campos',
                                'São Paulo',
                            ]}
                            label="SELECIONE SUA CIDADE"
                            name="city"
                            id="selectCity"
                        />

                        <Select
                            options={[]}
                            label="SELECIONE O CURSO DE SUA PREFERÊNCIA"
                            name="course"
                            id="selectCourse"
                        />

                        <div className="options">
                            <p>COMO VOCÊ QUER ESTUDAR?</p>
                            <div className="inputs">
                                <Checkbox
                                    name="kind"
                                    value="Presencial"
                                    label="Presencial"
                                />
                                <Checkbox
                                    name="kind"
                                    value="EaD"
                                    label="A distância"
                                />
                            </div>
                        </div>

                        <div className="slider">
                            <p>ATÉ QUANTO PODE PAGAR?</p>
                            <p className="value">R$ 10.000</p>
                            <input
                                type="range"
                                name="range"
                                id="range"
                                min="0"
                                max="10000"
                            />
                        </div>
                    </div>

                    <div className="results">
                        <div className="order">
                            <div>Resultado:</div>
                            <div className="select">
                                <div>Ordenar por &nbsp;</div>
                                <div>
                                    Nome da Faculdade
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </div>
                            </div>
                        </div>

                        <div className="courses">
                            <Result />
                            <Result />
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
