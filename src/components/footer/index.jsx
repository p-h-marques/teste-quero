import React from 'react'
import FooterContact from '../footerContact'
import { FooterStyles } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faComments, faEnvelope, faHeart } from '@fortawesome/free-regular-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    const contacts = [
        {
            logo: faWhatsapp,
            title: '0800 123 2222',
            description: 'Seg - Sex 8h-22h',
            compact: '0800 123 2222',
        },
        {
            logo: faComments,
            title: 'Chat ao vivo',
            description: 'Seg - Sex 8h-22h',
            compact: 'Chat',
        },
        {
            logo: faEnvelope,
            title: 'Mande um e-mail',
            description: 'Respondemos rapidinho',
            compact: 'E-mail',
        },
        {
            logo: faInfoCircle,
            title: 'Central de ajuda',
            description: 'Encontre todas as respostas',
            compact: 'Ajuda',
        },
    ]

    return (
        <FooterStyles>
            <div className="contacts">
                {contacts.map((contact, key) => (
                    <FooterContact key={key} {...contact} count={key} />
                ))}
            </div>
            <div className="end">
                <p>
                    Feito com
                    <FontAwesomeIcon icon={faHeart} style={{
                        width: '16px',
                        height: '16px',
                        margin: '0px 5px'
                    }}/>
                    pela Quero Educação
                </p>
            </div>
        </FooterStyles>
    )
}

export default Footer
