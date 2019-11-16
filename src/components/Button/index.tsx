import styled from 'styled-components'
import { colors } from 'styles'

const Button = styled.button`
    height: 32px;
    padding: 4px 12px;
    background-color: ${
        //@ts-ignore
        props => !!props.color && !!colors[props.color] ? colors[props.color] : colors.orange 
    };
    border-radius: 5px;
    align-self: center;
    margin: 0 12px;
    color: ${colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    border-style: none;
    text-decoration: none;
    font-weight: bold;

    :hover {
        cursor: pointer;
    }

    * {
        margin: 0 4px;
    }
`

export default Button