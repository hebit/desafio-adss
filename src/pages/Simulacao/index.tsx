import React, { useState } from 'react'
import Container from '../../components/Container'
import Row from '../../components/Row'
import Title from '../../components/Title'
import Button from '../../components/Button'
import Input from 'components/Input'
import Table from 'components/Table'
import Footer from '../../components/Footer'

// import { useDispatch } from 'react-redux'


export const Simulacao: React.FC = () => {

    const [inputValue, setInputValue] = useState('0')
    setInputValue("test")
    console.log(inputValue)
    // const dispatch =  useDispatch()

    return (
        <>
            <Container>
                <Title>Valor desejado</Title>
                <Row>
                    <Input prefix="R$" value={"inputValue"} />
                    <Button onClick={() => {}} >Calcular</Button>
                </Row>
                <Table />
            </Container>
            <Footer />
        </>
    )
}
