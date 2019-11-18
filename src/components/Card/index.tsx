import React from 'react'

import { colors } from 'styles'
import Box from 'components/Box'
import LinkButton from 'components/LinkButton'

import { User } from 'store/types'

//@ts-ignore
import formatCpf from '@brazilian-utils/format-cpf'

import { 
    CardTitle, 
    CardName, 
    CardMoneyValue, 
    CardPercentValue, 
    CardCPF,
    Container,
    UserCardTitle,
    FileIcon,
    BoldWrapper,
} from './styles'

interface CardDefaultProps {
    title: string
    children?: any
}

interface MoneyCardProps extends CardDefaultProps {
    currencyValue: number
    percentValue?: number
}

export const MoneyCard = ({ title, currencyValue, percentValue } : MoneyCardProps) => {
    return (
        <Box justify="start" align="center" direction="column" height={{ min: "168px" }} pad={{ bottom: "24px" }} >
            <CardTitle>{title}</CardTitle>
            {percentValue && <CardPercentValue>{percentValue}%</CardPercentValue> }
            <CardMoneyValue className={!!percentValue ? '' : 'align-top'}>
                R$ {currencyValue.toFixed(2)}
            </CardMoneyValue>
        </Box>
    )
}

interface FileCardProps extends CardDefaultProps {
    title: string
    fileUrl?: string
}

export const FileCard = ({ title, fileUrl } : FileCardProps) => {
    return (
        <Box justify="start" align="center" direction="column" pad={{ bottom: "24px" }}>
            <CardTitle>{title}</CardTitle>
            <FileIcon fontSize="48px" color={ colors.orange } />
            {!!fileUrl && <a href={fileUrl}>Ver Comprovante</a>}
        </Box>
    )
}

interface InfoCardProps extends CardDefaultProps {
    textAlign?: "center" | "start" | "end"
    color?: string
}

export const InfoCard = ({ title, children, textAlign = 'start', color } : InfoCardProps) => {
    const blueBoxStyle = { 
            background: '#e8f3f4', 
            borderRadius: 4, 
            border: `1px dashed ${colors.green}`
    }
    return (
         <Box 
            pad="8px"
            height="auto" 
            justify="start" 
            direction="column" 
            margin={{ vertical: 'xsmall' }} 
            style={!!color && color === 'blue' ? blueBoxStyle : {}}
         >
            <i style={{ alignSelf: 'flex-start', marginBottom: !!color ? 0 : 18, color: colors.darkGray }}>
                {title}
            </i>
            {
                //@ts-ignore
                <BoldWrapper textAlign={textAlign}>{children}</BoldWrapper>
            }
        </Box>
    )
}

interface UserCardProps {
    user?: User | null
}

export const UserCard = ({ user }: UserCardProps) => {

    return (!!user ?
        <Container>
            <UserCardTitle>Cliente Encontrado</UserCardTitle>
            <CardCPF>{formatCpf(user.cpf)}</CardCPF>
            <CardName>{user.name}</CardName>
            <LinkButton color="green" to="/overview">Solicitar</LinkButton>
        </Container>
        :
        <></>
    )
}

export const Card = { Money: MoneyCard, File: FileCard, Info: InfoCard, User: UserCard }
export default Card
