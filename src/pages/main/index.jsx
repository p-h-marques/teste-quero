import React from 'react'
import { MainStyles } from './styles'

import Header from '../../components/header'
import Navbar from '../../components/navbar'
import Breadcrumbs from '../../components/breadcrumbs'
import Filters from '../../components/filters'

const Main = () => {
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
            </main>

            <Filters />


        </MainStyles>
    )
}

export default Main
