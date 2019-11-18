import React from 'react'
import { Grid } from 'grommet'
import {
    Box,
    Container,
    LinkButton,
    Input,
    Table,
} from 'components'
import { useSelector } from 'react-redux';
import { rootState } from 'store/types'
//@ts-ignore
import CheckIcon from 'react-ionicons/lib/MdCheckmark'
import { getInitialValue } from 'api'

export const Overview: React.FC = () => {
    const installment = useSelector((state : rootState) => state.installment)
    const table = useSelector((state : rootState) => state.table)

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
                <Input value={!!installment ? getInitialValue(installment) : ''} />
                </Box>
                <Box gridArea="valor-total" pad="medium">
                valor-total
                <Input value={!!installment ? installment.fullValue.toFixed(2).replace('.',',') : ''} />
                </Box>
                <Box gridArea="n-parcelas" pad="medium">
                parcelas
                <Input value={!!installment ? installment.installments : ''} />
                </Box>
                <Box gridArea="valor-parcelas" pad="medium">
                valor-parcelas
                <Input value={!!installment ? installment.installmentValue.toFixed(2).replace('.',',') : ''} />
                </Box>
                <Box gridArea="concluir-button" transparent noPadding pad="medium">
                    {
                        //@ts-ignore
                        <LinkButton fontSize={10} to="/finish" className="large" color="green">
                            <CheckIcon style={{ margin: 4 }} color="#FFF" /> Concluir
                        </LinkButton>
                    }
                </Box>
            </Grid>
            {!!table && <Table table={table} />}
        </Container>
    )
}