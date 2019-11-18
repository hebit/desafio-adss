import React from 'react'
import Box from 'components/Box'
import Container from 'components/Container'
import styled from 'styled-components'
import { Grid as GrommetGrid } from 'grommet'
import LinkButton from 'components/LinkButton'
import { useSelector } from 'react-redux';
import { rootState } from 'store/types';
//@ts-ignore
import CardIcon from 'react-ionicons/lib/MdCard';
import { colors } from 'styles';
import { getInitialValue } from '../Overview'
//@ts-ignore
import CheckIcon from 'react-ionicons/lib/MdCheckmark';

const GreenText = styled.span`
    color: ${colors.green};
`

const OrangeText = styled.span`
    color: ${colors.orange};
`

const Grid = styled(GrommetGrid)`
    grid-template-columns: reprat(12, 1fr);
    grid-template-rows: repeat(3, 54px) repeat(2,70px);
    grid-gap: 12px;
    font-weight: bold;

    .box:nth-child(2n) {
        grid-column-start: 7;
        grid-column-end: 13;
    }

    .box:nth-child(2n + 1) {
        grid-column-start: 1;
        grid-column-end: 7;
    }

    & > *,
    .button {
        width: 314px;
    }

    b {
        color: #41AE5D;
    }

    .box-center {
        grid-column-start: 4 !important;
        grid-column-end: 10 !important;

        &:last-child {
            .button {
                height: 40px;
                margin: 0;
                max-width: 314px;
                font-size: 1.1rem;
                font-weight: bold;
                border-radius: 2px;
                text-align: center;
            }

            span {
                text-align: center;
                margin: 8px 0;
                font-size: 0.8rem;
            }
        }
    }
`

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