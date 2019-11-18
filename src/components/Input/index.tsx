import React from 'react'
import { InputWrapper, InputField } from './styles'


interface Props {
    value?: string | number
    onChange?: (value: string) => void
    to?: string
    type?: string
    prefix?: string
    defaultValue?: string | number
    placeholder?: string
}

export const Input = ({ value, onChange, placeholder, type, prefix = "" }: Props) => {
    return (
        // @ts-ignore
        <InputWrapper className="input" prefix={prefix}>
            <InputField
                type={type}
                value={value}
                placeholder={placeholder}
                //@ts-ignore
                onChange={e => onChange(e.target.value)}
            />
        </InputWrapper>)
}

export default Input