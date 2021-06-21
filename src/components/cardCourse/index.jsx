import React from 'react'
import { CardCourseStyles } from './styles'
import ReactStars from 'react-rating-stars-component'

const CardCourse = () => {
    const rating = {
        size: 20,
        isHalf: true,
        value: 3.8,
        edit: false,
    }
    return (
        <CardCourseStyles>
            <div className="infos">
                <img
                    src="https://www.tryimg.com/u/2019/04/16/anhanguera.png"
                    alt="Anhanguera"
                />
                <div className="name">ANHANGUERA</div>
                <div className="course">Arquitetura e Urbanismo</div>
                <div className="rating">
                    <span className="number">3.8</span>
                    <span className="stars"><ReactStars {...rating} /></span>
                </div>
            </div>

            <div className="description">
                <div className="shift">PRESENCIAL · NOITE</div>
                <div className="start">Início das aulas em: 05/07/2019</div>
            </div>

            <div className="price">
                <div className="label">Mensalidade com o Quero Bolsa:</div>
                <div className="fullprice">R$ 1.487,31</div>
                <div className="discountprice">
                    <span className="value">R$ 453,63</span>
                    <span className="period">/mês</span>
                </div>
            </div>

            <div className="actions">
                <button className="primary">Excluir</button>
                <button className="secondary">Ver oferta</button>
            </div>
        </CardCourseStyles>
    )
}

export default CardCourse
