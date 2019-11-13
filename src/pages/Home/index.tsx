import React from 'react'
import Container from '../../components/Container'
import Row from '../../components/Row'
import Title from '../../components/Title'
import Input from '../../components/Input'
import Button from '../../components/Button'

const Home: React.FC = () => {
    return (
        <Container>
            <Title>Valor desejado</Title>
            <Row>
                <Input /><Button to="/simulacao">Calcular</Button>
            </Row>
        </Container>
    )
}

export default Home;