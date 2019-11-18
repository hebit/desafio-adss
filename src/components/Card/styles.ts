import styled from 'styled-components'
import { colors } from 'styles'
import Title from "components/Title"
//@ts-ignore
import IonFileIcon from 'react-ionicons/lib/MdDocument'

export const CardTitle = styled.h1`
    color: ${ colors.darkGray };
    margin: 24px 0 14px 0;
    font-size: 1rem;
    text-align: center;
    max-width: 80%;
    font-style: italic;
`

export const CardPercentValue = styled.p`
    color: ${ colors.green };
    font-size: 1.9rem;
    margin: 0;
    margin-top: 14px;
    font-weight: bold;
`

export const CardMoneyValue = styled.p`
    margin: 14px 0 18px 0;
    color: #4caf50;
    font-size: 1rem;
    &.align-top { margin-top: 32px; }
`

export const FileIcon = styled(IonFileIcon)`
    color: yellow;
    margin: 4px 0 18px 0;
`

export const BoldWrapper = styled.span`
    font-weight: bold;
    text-align: ${ (props : any) => props.textAlign };
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

export const UserCardTitle = styled(Title)`
    color: ${colors.darkGray};
    margin: 18px 0;
`

export const CardCPF = styled.p`
    color: ${colors.orange};
    font-size: 1rem;
    text-align: center;
`

export const CardName = styled(CardCPF)`
    color: ${colors.green};
    font-size: 1.2rem;
    font-weight: bold;
`

export const Container = styled.section`
    border-radius: 5px;
    background-color: ${colors.gray};
    min-height: 48px;
    width: 310px;
    align-self: center;
    padding: 16px;

    a {
        display: flex;
        width: 100%;
        height: 48px;
        font-size: 1.2rem;
        margin: 0;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
    }
`