import React from 'react'
import Title from '../Title';
import { MenuContainer, ContentContainer } from './styles'
import { useLocation } from 'react-router-dom'

import logo from 'assets/img/logo.png'
import filingIcon from 'assets/img/filing-icon.png'
import plusIcon from 'assets/img/plus-icon.png'

export const Header: React.FC = () => {
    const { pathname: location } = useLocation()
    console.log(location)
    const titles = (url: string) => {
        switch(url) {
            case '/':
                return <>Simulaçao <br /> de Taxas</> 
            case '/selectUser' :
                return <>Solicitar <br /> Empréstimo</> 
            case '/overview' :
                return <>Solicitar <br /> Empréstimo</> 
            case '/finish' :
                return <>Solicitar <br /> Empréstimo</> 
            case '/details' :
                return <>Detalhe <br /> da Solicitação</> 
        }
    }
    return (
        <>
            <MenuContainer>
                <span></span>
                <img src={logo} alt="logomarca da CredFica" />
                <span></span>
            </MenuContainer>
            <ContentContainer>
                {location !== '/details' && <img className="plus-icon" src={plusIcon} alt="icone de mais" />}
                <img src={filingIcon} alt="icone de filing" />
                {//@ts-ignore
                    <Title size={18} align="start">{titles(location)}</Title>
                }
            </ContentContainer>
        </>
    )
}

export default Header
