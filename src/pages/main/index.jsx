import React, { useContext, useEffect } from 'react'
import { MainStyles } from './styles'

import Context from '../../state/Context'
import * as actions from '../../state/actions'
import { getData } from '../../utils/functions'

import Header from '../../components/header'
import Navbar from '../../components/navbar'
import Breadcrumbs from '../../components/breadcrumbs'
import Filters from '../../components/filters'
import CardAdd from '../../components/cardAdd'
import CardCourse from '../../components/cardCourse'
import Footer from '../../components/footer'
import Modal from '../../components/modal'

const Main = () => {
    const { state, dispatch } = useContext(Context)

    useEffect(async () => {
        const data = await getData()
        dispatch(actions.fetchData(data))
    }, [])

    useEffect(() => [console.log(state.main.filter)], [state])

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
                    {state.main.courses.map((course, key) => {
                        if (
                            (
                                state.main.filter !== 'all' &&
                                state.main.filter === course.enrollment_semester
                            ) ||
                            state.main.filter === 'all'
                        ) {
                            return <CardCourse {...course} key={key} />
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
