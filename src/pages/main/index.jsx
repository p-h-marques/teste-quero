import React, { useContext, useEffect } from 'react'
import { MainStyles } from './styles'

import Context from '../../state/Context'
import * as actions from '../../state/actions'
import { getData, getCourseId } from '../../utils/functions'

import Header from '../../components/header'
import Navbar from '../../components/navbar'
import Breadcrumbs from '../../components/breadcrumbs'
import Filters from '../../components/filters'
import CardAdd from '../../components/cardAdd'
import CardCourse from '../../components/cardCourse'
import Footer from '../../components/footer'
import Modal from '../../components/modal'

import { STORAGE } from '../../state/Provider'

const Main = () => {
    const { state, dispatch } = useContext(Context)

    /**
     * Requisição inicial para consultar API de cursos
     */
    useEffect(async () => {
        const data = await getData()
        dispatch(actions.fetchData(data))
    }, [])

    // useEffect(() => [console.log(state)], [state])

    /**
     * Salvando cursos da página principal no localStorage
     */
    useEffect(()=>{
        localStorage.setItem(STORAGE, JSON.stringify(state.main.courses))
        console.log(state.main.courses)
    }, [state.main.courses])

    /**
     * Corpo da página
     */
    return (
        <MainStyles>
            <Header />
            <Navbar />
            <Breadcrumbs />

            <main>
                <h1>Bolsas favoritas</h1>
                <p>
                    Adicione bolsas de cursos e faculdades do seu interesse e
                    receba atualizações com as melhores ofertas disponíveis.
                </p>

                <Filters />

                <div className="cards">
                    <CardAdd />
                    {state.main.courses.map((course) => {
                        if (
                            (
                                state.main.filter !== 'all' &&
                                state.main.filter === course.enrollment_semester
                            ) ||
                            state.main.filter === 'all'
                        ) {
                            return <CardCourse {...course} key={getCourseId(course)} />
                        }
                    })}
                </div>
            </main>

            <Footer />
            <Modal />
        </MainStyles>
    )
}

export default Main
