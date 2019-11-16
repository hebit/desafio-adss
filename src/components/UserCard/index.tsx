import React from 'react'
import styled from 'styled-components'
import { colors } from 'styles'
import Title from "../Title";
import LinkButton from 'components/LinkButton';
import { User } from 'store/types'
//@ts-ignore
import formatCpf from '@brazilian-utils/format-cpf'
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
    user?: User | null
}

const UserCard = ({ user }: Props) => {

    return (!!user ?
        <Container>
            <CardTitle>Cliente Encontrado</CardTitle>
            <CardCPF>{formatCpf(user.cpf)}</CardCPF>
            <CardName>{user.name}</CardName>
            <LinkButton color="green" to="/overview">Solicitar</LinkButton>
        </Container>
        :
        <></>
    )
}

export default UserCard