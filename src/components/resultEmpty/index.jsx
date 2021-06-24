import React from 'react'
import { ResultEmptyStyles } from './styles'

const ResultEmpty = () => {
    /**
     * Corpo do componente
     */
    return (
        <ResultEmptyStyles data-test="result-empty">
            A pesquisa atual não retorna nenhum resultado :(
        </ResultEmptyStyles>
    )
}

export default ResultEmpty
