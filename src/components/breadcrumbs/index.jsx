import React from 'react'
import { BreadcrumbsStyles } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const Breadcrumbs = () => {
    const links = ['Home', 'Minha conta', 'Bolsas favoritas']

    /**
     * Corpo do componente
     */
    return (
        <BreadcrumbsStyles>
            <FontAwesomeIcon icon={faChevronLeft} />

            {links.map((link, key) => {
                const isLastLink = key === links.length - 1
                const isPreviousLink = key === links.length - 2

                return (
                    <div key={key}>
                        <span
                            className={
                                isLastLink
                                    ? 'link active'
                                    : isPreviousLink
                                        ? 'link previous'
                                        : 'link'
                            }
                        >
                            {link}
                        </span>
                        {!isLastLink ? (
                            <span className="separator">/</span>
                        ) : null}
                    </div>
                )
            })}
        </BreadcrumbsStyles>
    )
}

export default Breadcrumbs
