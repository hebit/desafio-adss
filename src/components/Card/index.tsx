import React from 'react'
import styled from 'styled-components'
import { colors } from 'styles'
import Title from "../Title";
import LinkButton from 'components/LinkButton';

const CardTitle = styled(Title)`
    color: ${colors.darkGray};
    margin: 18px 0;
`

const CardCPF = styled.p`
    color: ${colors.orange};
    font-size: 1rem;
    text-align: center;
`

const CardName = styled(CardCPF)`
    color: ${colors.green};
    font-size: 1.2rem;
    font-weight: bold;
`

const Container = styled.section`
    border-radius: 5px;
    background-color: ${colors.gray};
    min-height: 48px;
    width: 310px;
    align-self: center;
    padding: 16px;

    a {
        display: flex;
        width: 100%;
        height: 48px;
        font-size: 1.2rem;
        margin: 0;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
    }
`

interface Props {
    cpf?: string
    name?: string
    id?: number
    children?: any
}

const Card = ({ cpf , name , id }: Props) => {
    return (
        <Container>
            <CardTitle>Cliente Encontrado</CardTitle>
            <CardCPF>192.023.075-88</CardCPF>
            <CardName>Jusara Marina Azevedo</CardName>
            <LinkButton color="green" to="/overview">Solicitar</LinkButton>
        </Container>
    )
}

export default Card