import React from 'react'

import { MenuContainer, ContentContainer } from './styles'


import logo from '../../assets/img/logo.png'
import filingIcon from '../../assets/img/filing-icon.png'
import plusIcon from '../../assets/img/plus-icon.png'
import Title from '../Title';

const Header: React.FC = () => {
    return (
        <>
            <MenuContainer>
                <span></span>
                <img src={logo} alt="logomarca da CredFica" />
                <span></span>
            </MenuContainer>
            <ContentContainer>
                <img className="plus-icon" src={plusIcon} />
                <img src={filingIcon} />
                <Title size={18} align="start">Simulacao <br />de Taxas</Title>
            </ContentContainer>
        </>
    )
}

export default Header
