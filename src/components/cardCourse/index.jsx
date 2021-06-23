import React, { useCallback, useContext } from 'react'
import { CardCourseStyles } from './styles'
import ReactStars from 'react-rating-stars-component'

import Context from '../../state/Context'
import * as actions from '../../state/actions'

import Button from '../button'

const CardCourse = data => {
    const { state, dispatch } = useContext(Context)

    const handleRemoveCourse = useCallback((data) => {
        dispatch(actions.removeCourse(data, state.main.courses))
    }, [state, dispatch])

    return (
        <CardCourseStyles>
            <div className="infos">
                <div className="img">
                    <img
                        src={data.university.logo_url}
                        alt={data.university.name}
                    />
                </div>
                <div className="name">{data.university.name.toUpperCase()}</div>
                <div className="course">{data.course.name}</div>
                <div className="rating">
                    <span className="number">{data.university.score}</span>
                    <span className="stars">
                        <ReactStars
                            {...{
                                size: 20,
                                isHalf: true,
                                value: data.university.score,
                                edit: false,
                            }}
                        />
                    </span>
                </div>
            </div>

            <div className="description">
                <div className="shift">
                    {data.course.kind.toUpperCase()} ·
                    {' ' + data.course.shift.toUpperCase()}
                </div>
                <div className="start">
                    Início das aulas em: {data.start_date}
                </div>
            </div>

            <div className="price">
                <div className="label">Mensalidade com o Quero Bolsa:</div>
                <div className="fullprice">R$ {data.full_price}</div>
                <div className="discountprice">
                    <span className="value">R$ {data.price_with_discount}</span>
                    <span className="period">/mês</span>
                </div>
            </div>

            <div className="actions">
                <Button
                    className="secondary"
                    label="Excluir"
                    onClick={() => handleRemoveCourse(data)}
                />
                <Button className="primary" label="Ver oferta" />
            </div>
        </CardCourseStyles>
    )
}

export default CardCourse
