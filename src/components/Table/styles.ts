import { colors } from 'styles';
import styled from 'styled-components'

export const TableCell = styled.span`
    background-color: #FFF;
    border: 1px solid #f8f8f8;
    padding: 12px 0;
    text-align: center;
`

export const TableRow = styled.div`
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

export const Header = styled.div`
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

export const Container = styled.div`
    background: ${colors.lightGray};
    border-radius: 5px;
`