import styled from "styled-components";

export const MenuContainer = styled.header`
    background-color: #228A95;
    position: fixed;
    width: 100vw;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    img {
        width: 147px;
        height: 32px;
    }
`

export const ContentContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    margin-top: 80px;
    display: flex;
    .plus-icon {
        align-self: center;
        height: 48px;
        width: 48px;
    }
`