import React from 'react'
import styled from 'styled-components'
import { colors } from 'styles'
import Box from 'components/Box'
import Row from 'components/Row'
//@ts-ignore
import IonFileIcon from 'react-ionicons/lib/MdDocument'


interface CardDefaultProps {
    title: string
    children?: any
}

const CardTitle = styled.h1`
    color: ${ colors.darkGray };
    margin: 24px 0 14px 0;
    font-size: 1rem;
    text-align: center;
    max-width: 80%;
    font-style: italic;
`

const CardPercentValue = styled.p`
    color: ${ colors.green };
    font-size: 1.9rem;
    margin: 0;
    margin-top: 14px;
    font-weight: bold;
`

const CardMoneyValue = styled.p`
    margin: 14px 0 18px 0;
    color: #4caf50;
    font-size: 1rem;
    &.align-top { margin-top: 32px; }
`

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

const FileIcon = styled(IonFileIcon)`
    color: yellow;
    margin: 4px 0 18px 0;
`

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

const BoldWrapper = styled.span`
    font-weight: bold;
    text-align: ${ (props : InfoCardProps) => props.textAlign };
    line-height: 1.8rem;
    color: ${ colors.darkGray };
    width: 90%;
    display: block;
    b {
        color: #4caf50;
    }

    button {
        width: 154px;
        border-radius: 3px;
    }
`

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

const Card = { Money: MoneyCard, File: FileCard, Info: InfoCard }
export default Card
