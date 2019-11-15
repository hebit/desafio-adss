import React from 'react'
import styled from 'styled-components'
import { colors } from 'styles'
import Box from 'components/Box'

const CardTitle = styled.h1`
    color: ${ colors.darkGray };
    margin: 24px 0;
    font-size: 1rem;
    text-align: center;
`

const CardPercentValue = styled.p`
    color: ${ colors.green };
    font-size: 1.9rem;
    margin: 4px 0;
    font-weight: bold;
`

const CardMoneyValue = styled.p`
    margin: 18px 0;
    color: #4caf50;
    font-size: 1rem;
`

interface Props {
    children?: any
}

export const Card = (props : Props) => {
    return (
        <Box justify="start" align="center" direction="column">
            <CardTitle>Percentual do Representante</CardTitle>
            <CardPercentValue>5.87%</CardPercentValue>
            <CardMoneyValue>R$ 124.55</CardMoneyValue>
        </Box>
    )
}