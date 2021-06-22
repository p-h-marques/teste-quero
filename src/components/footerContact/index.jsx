import React from 'react'
import { FooterContactStyles } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FooterContact = ({logo, title, description, compact, count}) => {
    return (
        <FooterContactStyles className={count === 0 ? 'first' : null}>
            <div className="logo">
                <FontAwesomeIcon icon={logo} style={{height: '40px', width: '40px'}}/>
            </div>
            <div className='data'>
                <p className="title">{title}</p>
                <p className="description">{description}</p>
                <p className="compact">{compact}</p>
            </div>
        </FooterContactStyles>
    )
}

export default FooterContact
