import React, { useState } from 'react'
import { NavbarStyles } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const links = [
        {
            label: 'Pré-matrículas',
            selected: false,
        },
        {
            label: 'Bolsas favoritas',
            selected: true,
        },
    ]

    const [isMenuExpanded, setIsMenuExpanded] = useState(false)

    return (
        <NavbarStyles isMenuExpanded={isMenuExpanded}>
            <div className="title">
                <p>Minha conta</p>
            </div>

            <div
                className="dropdown"
                onMouseEnter={() => {
                    setIsMenuExpanded(true)
                }}
                onMouseLeave={() => {
                    setIsMenuExpanded(false)
                }}
            >
                <span>Menu</span>
                <FontAwesomeIcon
                    icon={faChevronDown}
                    style={{ fontSize: '12px' }}
                />
            </div>

            <div
                className="links"
                onMouseEnter={() => {
                    setIsMenuExpanded(true)
                }}
                onMouseLeave={() => {
                    setIsMenuExpanded(false)
                }}
            >
                {links.map((link, key) => {
                    return (
                        <div
                            className={link.selected ? 'link selected' : 'link'}
                            key={key}
                        >
                            {link.label}
                        </div>
                    )
                })}
            </div>
        </NavbarStyles>
    )
}

export default Navbar
