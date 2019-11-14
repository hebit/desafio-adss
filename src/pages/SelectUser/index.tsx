import React, { useState } from 'react'
import Container from '../../components/Container'
import Row from '../../components/Row'
import Title from '../../components/Title'
import Button from '../../components/Button'
import Input from 'components/Input'
import Sticky from 'components/Sticky'
import Card from 'components/Card'
export const SelectUser: React.FC = () => {
    const [inputValue, setInputValue] = useState('0')
    return (
        <Container>
            <Title>Valor desejado</Title>
            <Row>
                <Sticky>
                    <Input value={inputValue} />
                    <Button to="/overview" color="green" >Continuar</Button>
                </Sticky>
            </Row>
            <Card />
        </Container>
    )
}
