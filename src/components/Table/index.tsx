import React from 'react'
import Title from "../Title";
import { Container, Header, TableRow, TableCell } from './styles'
import { Table as TableType, Installment } from 'store/types'


interface Props {
    table?: TableType
    setSelectedInstallment?: (installment : Installment) => void
    selectedInstallment?: Installment | null
}

const Table = ({ table, setSelectedInstallment, selectedInstallment } : Props) => {
    const rowLabels = ['Parcela', 'Juros da Parcela', 'Valor Parcela', 'Valor Total', 'Comissão Total']
    return (
        <Container>
            <Header>
                <Title size={12}>{!!table && table.name}</Title>
                <TableRow>
                    {rowLabels.map((label, index) => <TableCell key={index}>{label}</TableCell>)}
                </TableRow>
            </Header>
            {!!table && table.installments.map((installment, index) => 
                <TableRow 
                    key={index} 
                    onClick={!!setSelectedInstallment ? () => setSelectedInstallment(installment) : undefined} 
                    className={ 
                        !!selectedInstallment &&
                        installment.id ===  selectedInstallment.id ?
                        'selected' : ''
                    } 
                >
                    <TableCell>{installment.installments}</TableCell>
                    <TableCell>{installment.installmentInterest}%</TableCell>
                    <TableCell>R${installment.installmentValue.toFixed(2).replace('.', ',')}</TableCell>
                    <TableCell>R${installment.fullValue.toFixed(2).replace('.',',')}</TableCell>
                    <TableCell>R${installment.comission.toFixed(2).replace('.', ',')}</TableCell>
                </TableRow>
            )}
        </Container>
    )
}


export default Table