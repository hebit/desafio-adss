import React from 'react'
import Container from '../../components/Container'
import Row from '../../components/Row'
import Title from '../../components/Title'
import Button from '../../components/Button'
import { InputWithButton } from 'components/Input'
export const SelectUser: React.FC = () => {
    return (
        <Container>
            <Title>Valor desejado</Title>
            <Row>
                <InputWithButton value={'5'} to="/overview" />
            </Row>
        </Container>
    )
}
