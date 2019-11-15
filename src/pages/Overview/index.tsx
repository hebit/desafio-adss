import React from 'react'
import Box from 'components/Box'
import Container from 'components/Container'
import LinkButton from 'components/LinkButton'
import { Grid } from 'grommet'
import Input from 'components/Input'
import Table from 'components/Table'

export const Overview: React.FC = () => {
    return (
        <Container>
            <Grid
                areas={[
                    { name: 'valor-desejado', start: [0, 0], end: [0, 0] },
                    { name: 'valor-total', start: [1, 0], end: [1, 0] },
                    { name: 'n-parcelas', start: [0, 1], end: [0, 1] },
                    { name: 'valor-parcelas', start: [1, 1], end: [1, 1] },
                    { name: 'concluir-button', start: [1, 2], end: [1, 2] },
                ]}
                columns={['flex', 'flex']}
                rows={['1/4', '1/4', '1/4']}
                gap="medium"
                margin={{bottom: "8px"}}
            >
                <Box gridArea="valor-desejado" pad="medium">
                valor-desejado
                <Input value="" />
                </Box>
                <Box gridArea="valor-total" pad="medium">
                valor-total
                <Input value="" />
                </Box>
                <Box gridArea="n-parcelas" pad="medium">
                parcelas
                <Input value="" />
                </Box>
                <Box gridArea="valor-parcelas" pad="medium">
                valor-parcelas
                <Input value="" />
                </Box>
                <Box gridArea="concluir-button" transparent noPadding pad="medium">
                    <LinkButton to="/finish" className="large" color="green">Concluir</LinkButton>
                </Box>
            </Grid>
            <Table />
        </Container>
    )
}