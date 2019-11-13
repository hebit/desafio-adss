import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled(Link)`
    height: 32px;
    padding: 4px 12px;
    background-color: ${props => !!props.color && props.color == 'green' ? '#228A95' : '#EF9C4B' };
    border-radius: 5px;
    align-self: center;
    margin: 0 12px;
    color: #FFF;
    line-height: 32px;
    text-decoration: none;
`

export default Button