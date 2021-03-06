import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from 'styles'

export const LinkButton = styled(Link)`
    height: 32px;
    padding: 4px 12px;
    background-color: ${props => !!props.color && props.color === 'green' ? colors.green : colors.orange };
    border-radius: 5px;
    align-self: center;
    margin: 0 12px;
    color: ${colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-weight: bold;
    //@ts-ignore
    font-size: ${props => !!props.fontSize ? props.fontSize * 0.14 : 'auto' }rem;

`

export default LinkButton