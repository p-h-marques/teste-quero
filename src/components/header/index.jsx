import React from 'react'
import { HeaderStyles } from './styles'

import ImgQuero from '../../assets/images/logo-querobolsa.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
    return (
        <HeaderStyles>
            <div className="infos">
                <div className="info">
                    <FontAwesomeIcon icon={faInfoCircle} style={{fontSize: '24px'}}/>
                    <p>Como funciona</p>
                </div>
                <div className="whatsapp">
                    <div>
                        <FontAwesomeIcon icon={faWhatsapp} style={{fontSize: '24px'}}/>
                    </div>
                    <div className="number">
                        <p>0800 123 2222</p>
                        <p>Envie mensagem ou ligue</p>
                    </div>
                </div>
            </div>

            <div className="logo">
                <img src={ImgQuero} alt="Quero Bolsa" />
            </div>

            <div className="user">
                <p>Nome Sobrenome</p>
                <FontAwesomeIcon icon={faUserCircle} style={{fontSize: '24px'}}/>
            </div>
        </HeaderStyles>
    )
}

export default Header