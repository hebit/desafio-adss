import styled from 'styled-components'

export const InputField = styled.input`
    width: 100%;
    height: 100%;
    border-style: none;
    box-sizing: border-box;
    padding: 0 12px;
    box-sizing: border-box;
    border-radius: 5px;
    background: #F0F0F0 0% 0% no-repeat padding-box;
    align-items: center;
    
`

export const InputWrapper = styled.div`
    align-self: center;
    position: relative;
    display: flex;
    height: 47px;
    width: 300px;
    
    ${ props => !props.prefix ? 'padding-left: 4px ;' : ''}
    ::before{
        content: "${ props => props.prefix }";
        color: #BBB;
        position: absolute;
        left: 16px;
        display: flex;
        align-items: center;
        height: 100%;
    }

    input {
        ${ props => !!props.prefix ? 'padding-left: 48px ;' : ''}
    }
`