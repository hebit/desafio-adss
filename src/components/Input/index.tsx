import React, { useState } from 'react'
import styled from 'styled-components'
import Button from 'components/Button'

const InputField = styled.input`
    width: 100%;
    height: 100%;
    border-style: none;
    box-sizing: border-box;
    background: transparent;
    
`

const InputWrapper = styled.div`
    align-self: center;
    position: relative;
    display: flex;
    height: 47px;
    width: 300px;
    padding: 0 4px;
    padding-left: 48px;
    box-sizing: border-box;
    border-radius: 5px;
    background: #F0F0F0 0% 0% no-repeat padding-box;
    align-items: center;
    ${ props => !props.prefix ? 'padding-left: 4px ;' : ''}
    ::before{
        ${ props => props.prefix ? 'content: "R$";' : ''}
        color: #BBB;
        position: absolute;
        left: 16px;
    }
`

interface Props {
    value: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void
    to?: string
}

export const Input = ({ value, onChange, to }: Props) => {

    const [inputValue, setInputValue] = useState('0')

    console.log(inputValue)


    return (
        // @ts-ignore
        <InputWrapper prefix={true}>
            <InputField
                type="number"
                value={inputValue}
                onChange={e => {
                    // let { value } = e.target
                    // const numberValue = 
                    // setInputValue(numberValue.toFixed(2))
                }}
            />
        </InputWrapper>)
}

const InputButton = styled(Button)`
    margin: 0;
    height: 100%;
    box-sizing: border-box;
`

interface PropsWithButton extends Props{
    to: string
}

export const InputWithButton = ({ value, onChange, to }: PropsWithButton) => {

    const [inputValue, setInputValue] = useState('0')

    console.log(inputValue)


    return (
        <InputWrapper>
            <InputField
                type="number"
                value={inputValue}
                onChange={e => {
                    // let { value } = e.target
                    // const numberValue = 
                    // setInputValue(numberValue.toFixed(2))
                }}
            />
            <InputButton to={to} >Test</InputButton>
        </InputWrapper>
    )
}
