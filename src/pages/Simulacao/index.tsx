import React, { useState, useEffect } from 'react'
import Container from '../../components/Container'
import Row from '../../components/Row'
import Title from '../../components/Title'
import Button from '../../components/Button'
import Input from 'components/Input'
import Table from 'components/Table'
import Footer from '../../components/Footer'
import { MaskedInput } from 'grommet'
// import { useDispatch } from 'react-redux'
// import CurrencyInput from 'react-currency-masked-input'
export const Simulacao: React.FC = () => {

    const [inputValue, setInputValue] = useState(0)
    if(false){
        setInputValue(24)
    }
    console.log(inputValue)
    // const dispatch =  useDispatch()
    // useEffect(() => {
    //     async function get() {
            
    //     }
    //     get()
    // },[])
    console.log()

    return (
        <>
            <Container>
                <Title>Valor desejado</Title>
                <Row>
                    <Input 
                        prefix="R$" 
                        value={(inputValue).toFixed(2).replace('.',',')}
                        onChange={ e => {
                            const value = parseFloat(e.target.value.replace(/\D+/gm, ''))/100
                            if(value > 10000) {
                                return
                            }
                            setInputValue(value)
                        }}
                    />
                    <Button onClick={async () => {
                        if(inputValue < 300 || inputValue > 10000){
                            return alert('os valores devem estar entre R$300 e R$1000')
                        }
                        const baseUrl = 'https://3001-f165e84d-1a4f-44b7-b38c-56d96346eb72.ws-us02.gitpod.io/'
                        const aa = await fetch(`${baseUrl}/rateTable/1`)
                        console.log(aa)
                    }} >Calcular</Button>
                </Row>
                <Table />
            </Container>
            <Footer />
        </>
    )
}
