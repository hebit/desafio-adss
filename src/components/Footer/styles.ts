import styled from 'styled-components'

const Container = styled.footer`
    width: 100%;
    background: #228A95;
    height: 48px;
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: 0; 
    display: flex;
    align-items: center;
    justify-content: center;

    & > * {
        color: #F0F0F0;
    }

    span {
        margin: 0 8px;
    }
`

export default Container