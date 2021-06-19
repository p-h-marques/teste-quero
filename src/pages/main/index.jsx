import React from 'react'
import {MainStyles} from './styles'

import Header from '../../components/header'
import Navbar from '../../components/navbar'

const Main = () => {
    return (
        <MainStyles>
            <Header />
            <Navbar />
        </MainStyles>
    )
}

export default Main