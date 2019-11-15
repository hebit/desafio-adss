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

export const Details: React.FC = () => {
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
                        currencyValue={2677.51} 
                    />
                    <Card.Money 
                        title="Valor a despositar" 
                        currencyValue={2222.00} 
                    />
                    <Card.Money 
                        title="Percentual do Parceiro" 
                        currencyValue={2677.51}
                        percentValue={20.5}
                    />
                    <Card.Money 
                        title="Percentual do Representante" 
                        currencyValue={2677.51}
                        percentValue={5.5}
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
                    <p>Numero do Cartão: 1346546541321546415165465415</p>
                    <p>validade: 12/22 CVC: 123</p>
                    <p>2 parcelas de <b>R$1.338,76</b></p>
                    <p>Tabela: Teste Teste</p>
                </Card.Info>

                <Card.Info title="Informações do Cliente">
                    <p>Nome: Caio Moura4</p>
                    <p>CPF: 023.082.445-50</p>
                    <p>Agência: 767662627</p>
                    <p>Banco 003 - Banco da Amazônia S.A.</p>
                    <p>Tipo da Conta: Conta Corrente</p>
                    <p>Número da Conta: 1223442</p>
                </Card.Info>
            </Box>
            </Grid>
        </Container>
    )
}