import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from 'styles'

const Button = styled(Link)`
    height: 32px;
    padding: 4px 12px;
    background-color: ${props => !!props.color && props.color === 'green' ? colors.green : colors.orange };
    border-radius: 5px;
    align-self: center;
    margin: 0 12px;
    color: ${colors.white};
    line-height: 32px;
    text-decoration: none;
`

export default Button