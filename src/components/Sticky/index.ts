import styled from 'styled-components'
import Row from '../Row'
const Sticky = styled(Row)`
    width: 310px;
    input {
        border-radius: 5px 0 0 5px;
        margin: 0;
    }

    a {
        border-radius: 0 5px 5px 0;
        margin: 0;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        align-items: center;
    }
`
export default Sticky
