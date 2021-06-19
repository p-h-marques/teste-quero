import React from 'react'
import {MainStyles} from './styles'

import Header from '../../components/header'
import Navbar from '../../components/navbar'
import Breadcrumbs from '../../components/breadcrumbs'

const Main = () => {
    return (
        <MainStyles>
            <Header />
            <Navbar />
            <Breadcrumbs />
        </MainStyles>
    )
}

export default Main