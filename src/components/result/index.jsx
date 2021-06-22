import React from 'react'
import { ResultStyles } from './styles'

import Checkbox from '../checkbox'

const Result = () => {
    return (
        <ResultStyles>
            <div className="checkbox">
                <Checkbox name="course" value="Administração" label=""/>
            </div>
            <div className="logo">
                <img
                    src="https://www.tryimg.com/u/2019/04/16/anhanguera.png"
                    alt="Anhanguera"
                />
            </div>
            <div className="content">
                <div className="infos">
                    <p className="name">Administração</p>
                    <p className="level">Bacharelado</p>
                </div>
                <div className="price">
                    <p className="discount">Bolsa de <span>50%</span></p>
                    <p className="value">R$ 374/mês</p>
                </div>
            </div>
        </ResultStyles>
    )
}

export default Result
