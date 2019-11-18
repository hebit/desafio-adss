import styled from 'styled-components'

export const Title = styled.h1<{ size?: number, align?: string }>`
    font-size: ${props => !!props.size ? props.size * 0.14 : 1.4 }rem;
    font-weight: bold;
    color: #228A95;
    text-align: ${props => !!props.align ? props.align : 'center'};
    margin: auto 12px;
`

export default Title