import React from 'react'
import Container from 'components/Container'
import Box from 'components/Box'
import Row from 'components/Row'
import { Grid } from 'grommet'
import Card from './styles'
//@ts-ignore
import CardIcon from 'react-ionicons/lib/MdCard'
//@ts-ignore
import AlertIcon from 'react-ionicons/lib/MdAlert'
//@ts-ignore
import CheckIcon from 'react-ionicons/lib/MdCheckmarkCircle'
import Button from 'components/Button'
import { colors } from 'styles'
import { useSelector } from 'react-redux';
import { rootState } from '../../store/types';
import { getInitialValue } from '../Overview';
//@ts-ignore
import formatCpf from '@brazilian-utils/format-cpf'

export const Details: React.FC = () => {
    const installment = useSelector((state : rootState) => state.installment)
    const user = useSelector((state : rootState) => state.user)
    const table = useSelector((state : rootState) => state.table)
    if(!installment || !user || !table) {
        return <Container></Container>
    }
    return (
        <Container>
            <Grid
                columns={
                    ['flex', 'flex']
                }
                gap="medium"
            >
            <Box transparent noPadding direction="column" justify="start">
                <Box margin="small" pad="small" height="xxsmall" justify="start">
                    Solicitação gerada por <b>Sistema CredFica</b>
                </Box>
                <Grid
                    columns={['flex', 'flex']}
                    gap={{ column: "medium", row: "small" }}
                >
                    <Card.Money 
                        title="Valor total" 
                        currencyValue={installment.fullValue} 
                    />
                    <Card.Money 
                        title="Valor a despositar" 
                        currencyValue={parseFloat(getInitialValue(installment, false))} 
                    />
                    <Card.Money 
                        title="Percentual do Parceiro" 
                        currencyValue={installment.comission}
                        percentValue={installment.installmentInterest}
                    />
                    <Card.Money 
                        title="Percentual do Representante" 
                        currencyValue={installment.installmentInterest}
                        percentValue={installment.comission}
                    />
                    <Card.File 
                        title="Frente do Cartão"
                        fileUrl="https://www.google.com"
                    />
                    <Card.File 
                        title="Verso do Cartão"
                        fileUrl="https://www.google.com"
                    />
                    <Card.File 
                        title="Selfie do Cartão"
                        fileUrl="https://www.google.com"
                    />
                </Grid>
                <Card.Info title="Informações Gerais" color="blue" textAlign="center">
                    <p>Data:<span>07/11/2019</span></p>
                    <Row>
                        <Button><AlertIcon color="#FFF" />Aguardando</Button>
                    </Row>
                    <Row>
                        <Button color="green"><CheckIcon color="#FFF" />Aprovar</Button>
                        <Button color="red"> <AlertIcon color="#FFF" /> Reprovar</Button>
                    </Row>
                </Card.Info>
            </Box>
            <Box transparent direction="column" pad={{ top: '54px' }} height="auto" justify="start">
                <Card.Info title="Modalidade" textAlign="center" >
                    <Row>Cartão de Credito <CardIcon fontSize="38px" color={colors.orange} /></Row>
                    <p>Numero do Cartão: {user.bank.accountNumber}</p>
                    <p>validade: 12/22 CVC: 123</p>
                    <p>{installment.installments} parcelas de <b>{installment.installmentValue}</b></p>
                    <p>Tabela: {table.name}</p>
                </Card.Info>

                <Card.Info title="Informações do Cliente">
                    <p>Nome: {user.name}</p>
                    <p>CPF: {formatCpf(user.cpf)}</p>
                    <p>Agência: 767662627</p>
                    <p>{user.bank.label}</p>
                    <p>Tipo da Conta: Conta Corrente</p>
                    <p>Número da Conta: {user.bank.accountNumber}</p>
                </Card.Info>
            </Box>
            </Grid>
        </Container>
    )
}