import React, { useState, useEffect } from 'react'
import Container from '../../components/Container'
import Row from '../../components/Row'
import Title from '../../components/Title'
import Button from '../../components/Button'
import Input from 'components/Input'
import Table from 'components/Table'
import Footer from '../../components/Footer'
import { Table as TableType, Installment } from 'store/types'
import { useDispatch } from 'react-redux'
import api from 'api'

export const Simulacao: React.FC = () => {
    console.log('page:simulacao')

    const [inputValue, setInputValue] = useState(310)
    const [selectedTable,setSelectedTable] = useState<TableType|null>(null)
    const [selectedInstallment,setSelectedInstallment] = useState<Installment|null>(null)
    const dispatch = useDispatch()

    useEffect(() => {
        let installment = selectedInstallment
        dispatch({ type: 'SET_INSTALLMENT', payload: { installment } })
    },[selectedInstallment, dispatch])

    useEffect(() => {
        let table = selectedTable
        dispatch({ type: 'SET_TABLE', payload: { table } })
    },[selectedTable, dispatch])

    async function getTable() {
        if(inputValue < 300 || inputValue > 10000){
            return alert('os valores devem estar entre R$300 e R$1000')
        }
        const table = await api.getTable()
        if(!!table) {
            setSelectedTable(table)
        }
    }
    return (
        <>
            <Container>
                <Title size={12}>Valor desejado</Title>
                <Row>
                    <Input 
                        prefix="R$" 
                        value={inputValue.toFixed(2).replace('.',',')}
                        onChange={ (strValue : string) => {
                            const value = parseFloat(strValue.replace(/\D+/gm, ''))/100
                            if(value > 10000) {
                                return
                            }
                            setInputValue(value)
                        }}
                    />
                    <Button onClick={getTable} >Calcular</Button>
                </Row>
                {!!selectedTable && 
                    <Table 
                        table={selectedTable} 
                        setSelectedInstallment={(installment : Installment) => setSelectedInstallment(installment)}
                        selectedInstallment={selectedInstallment}
                    />
                }
            </Container>
            <Footer installment={selectedInstallment} table={selectedTable} />
        </>
    )
}
