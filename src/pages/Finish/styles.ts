import styled from 'styled-components'
import { Grid as GrommetGrid } from 'grommet'
import { colors } from 'styles'

export const GreenText = styled.span`
    color: ${colors.green};
`

export const OrangeText = styled.span`
    color: ${colors.orange};
`

export const Grid = styled(GrommetGrid)`
    grid-template-columns: reprat(12, 1fr);
    grid-template-rows: repeat(3, 54px) repeat(2,70px);
    grid-gap: 12px;
    font-weight: bold;

    .box:nth-child(2n) {
        grid-column-start: 7;
        grid-column-end: 13;
    }

    .box:nth-child(2n + 1) {
        grid-column-start: 1;
        grid-column-end: 7;
    }

    & > *,
    .button {
        width: 314px;
    }

    b {
        color: #41AE5D;
    }

    .box-center {
        grid-column-start: 4 !important;
        grid-column-end: 10 !important;

        &:last-child {
            .button {
                height: 40px;
                margin: 0;
                max-width: 314px;
                font-size: 1.1rem;
                font-weight: bold;
                border-radius: 2px;
                text-align: center;
            }

            span {
                text-align: center;
                margin: 8px 0;
                font-size: 0.8rem;
            }
        }
    }
`