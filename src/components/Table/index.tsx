import React from 'react'
import styled from 'styled-components'
import Title from "../Title";
import { colors } from 'styles';
import { Table as TableType, Installment } from 'store/types'

const TableCell = styled.span`
    background-color: #FFF;
    border: 1px solid #f8f8f8;
    padding: 12px 0;
    text-align: center;
`

const TableRow = styled.div`
    display: grid;
    grid-template-columns: 0.8fr 1fr 1fr 0.9fr 1.2fr;
    grid-auto-flow: column;

    &.selected span {
        background-color: #FFFFAF;
    }

    &:hover {
        cursor: pointer;
    }
`

const Header = styled.div`
    box-sizing: border-box;
    grid-area: table-header;
    padding: 12px 0;
    font-weight: bolder;
    h1 {
        color: ${colors.green};
        margin-bottom: 12px;
    }

    span {
        background: transparent;
    }
` 

const Container = styled.div`
    background: ${colors.lightGray};
    border-radius: 5px;
`

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