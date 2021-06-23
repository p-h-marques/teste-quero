import React, { useContext, useEffect }  from 'react'
import { MainStyles } from './styles'

import Context from '../../state/Context'

import Header from '../../components/header'
import Navbar from '../../components/navbar'
import Breadcrumbs from '../../components/breadcrumbs'
import Filters from '../../components/filters'
import CardAdd from '../../components/cardAdd'
import CardCourse from '../../components/cardCourse'
import Footer from '../../components/footer'
import Modal from '../../components/modal'

const Main = () => {
    const { state } = useContext(Context)

    useEffect(()=>{
        console.log(state)
    }, [state])

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
                    {
                        state.main.courses.map((course, key) => {
                            return (<CardCourse {...course} key={key}/>)
                        })
                    }
                </div>
            </main>

            <Footer />
            <Modal />
        </MainStyles>
    )
}

export default Main
