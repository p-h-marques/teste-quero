import React from 'react'
import { ResultStyles } from './styles'

import Checkbox from '../checkbox'

const Result = ({ data }) => {
    return (
        <ResultStyles>
            <div className="checkbox">
                <Checkbox name="course" value={data.course.name} label="" />
            </div>
            <div className="logo">
                <img
                    src={data.university.logo_url}
                    alt={data.university.name}
                />
            </div>
            <div className="content">
                <div className="infos">
                    <p className="name">{data.course.name}</p>
                    <p className="level">{data.course.level}</p>
                </div>
                <div className="price">
                    <p className="discount">
                        Bolsa de <span>{data.discount_percentage}%</span>
                    </p>
                    <p className="value">R$ {data.price_with_discount}/mês</p>
                </div>
            </div>
        </ResultStyles>
    )
}

export default Result
