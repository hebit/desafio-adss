import styled from 'styled-components'
import Row from '../Row'
import { colors } from 'styles'

export const Sticky = styled(Row)`
    width: 310px;
    input {
        border-radius: 3px 0 0 3px;
        margin: 0;
        background-color: ${colors.white};
        border: 2px solid ${colors.gray};
    }

    & > * {
        height: 40px;
    }

    button {
        border-radius: 0 3px 3px 0;
        margin: 0;
        box-sizing: border-box;
        display: flex;
        align-items: center;
    }
`
export default Sticky
