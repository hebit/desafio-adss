import React from 'react'
import styled from 'styled-components'
import Title from "../Title";
import { colors } from 'styles';

const TableCell = styled.span`
    background-color: #FFF;
    border: 2px solid #f8f8f8;
    padding: 12px 0;
    text-align: center;
`

const TableRow = styled.div`
    display: grid;
    grid-template-columns: 0.8fr 1fr 1fr 0.9fr 1.2fr;
    grid-auto-flow: column;
`

const Header = styled.div`
    box-sizing: border-box;
    grid-area: table-header;
    padding: 12px 0;

    h1 {
        color: green;
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

const Table = () => {
    const rowLabels = ['Parcela', 'Juros da Parcela', 'Valor Parcela', 'Valor Total', 'Comissão Total']
    return (
        <Container>
            <Header>
                <Title size={11}>Teste Teste</Title>
                <TableRow>
                    {rowLabels.map(label => <TableCell>{label}</TableCell>)}
                </TableRow>
            </Header>
            <TableRow>
                {rowLabels.map(label => <TableCell>{label}</TableCell>)}
            </TableRow>
            <TableRow>
                {rowLabels.map(label => <TableCell>{label}</TableCell>)}
            </TableRow>
        </Container>
    )
}


export default Table