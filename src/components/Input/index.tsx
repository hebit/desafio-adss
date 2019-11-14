import React, { useState } from 'react'
import styled from 'styled-components'

const InputField = styled.input`
    width: 100%;
    height: 100%;
    border-style: none;
    box-sizing: border-box;
    padding: 0 4px;
    padding-left: 48px;
    box-sizing: border-box;
    border-radius: 5px;
    background: #F0F0F0 0% 0% no-repeat padding-box;
    align-items: center;
    
`

const InputWrapper = styled.div`
    align-self: center;
    position: relative;
    display: flex;
    height: 47px;
    width: 300px;
    
    ${ props => !props.prefix ? 'padding-left: 4px ;' : ''}
    ::before{
        ${ props => props.prefix ? 'content: "R$";' : ''}
        color: #BBB;
        position: absolute;
        left: 16px;
        display: flex;
        align-items: center;
        height: 100%;
    }
`

interface Props {
    value: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void
    to?: string
}

const Input = ({ value, onChange, to }: Props) => {

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

export default Input