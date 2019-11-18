import React from 'react'
import { useSelector } from 'react-redux'
import {
    Box,
    Container,
    LinkButton,
} from 'components'
import { rootState } from 'store/types'
import { colors } from 'styles'
import { getInitialValue } from 'api'
//@ts-ignore
import CardIcon from 'react-ionicons/lib/MdCard'
//@ts-ignore
import CheckIcon from 'react-ionicons/lib/MdCheckmark'
import { Grid, GreenText, OrangeText } from './styles'


export const Finish: React.FC = () => {
    const user =  useSelector((state : rootState) => state.user)
    const installment = useSelector((state : rootState) => state.installment)

    if(!installment || !user) {
        return <Container></Container>
    }
    const boxes = [
        <>
            <span>{user.name}</span>
            <span>{user.phone}<CheckIcon color="#41AE5D" /></span>
        </>
        ,
        <>
            <GreenText>Taxa de Juros</GreenText>
            <OrangeText>{installment.installmentInterest}%<CheckIcon color="#41AE5D" /></OrangeText>
        </>,
        <>
            <CardIcon color={colors.orange} />
            <span>{user.bank.accountNumber}<CheckIcon color="#41AE5D" /></span>
        </>,
        <>
            <GreenText>Parcelas</GreenText>
            <OrangeText>{installment.installments}<CheckIcon color="#41AE5D" /></OrangeText>
        </>,
        <>
            <GreenText>Valor desejado:</GreenText>
            <b>R${getInitialValue(installment)}<CheckIcon color="#41AE5D" /></b>
        </>,
        <>
            <GreenText>Valor da Parcela:</GreenText>
            <b>R${installment.installmentValue}<CheckIcon color="#41AE5D" /></b>
        </>,

    ]
    return (
        <Container>
            <Grid margin={{ horizontal: '80px' }} >
                {boxes.map(boxContent =>
                    <Box className="box" selected pad={{ horizontal: '16px' }}  >
                        {boxContent}
                    </Box>
                )}
                <Box className="box box-center" selected pad={{ horizontal: '16px' }} >
                    <GreenText>Valor Total do <br />Empréstimo:</GreenText>
                    <b>R${installment.fullValue.toFixed(2).replace('.',',')}<CheckIcon color="#41AE5D" /></b>
                </Box>
                <Box className="box box-center" transparent noPadding direction="column" >
                        <LinkButton to="details" className="button" color="green">
                            Detalhe da Socilitação
                        </LinkButton>
                        <GreenText>A credifica avaliará sua solicitação</GreenText>
                </Box>
            </Grid>
        </Container>
    )
}