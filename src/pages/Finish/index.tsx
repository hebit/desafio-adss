import React from 'react'
import Box from 'components/Box'
import Container from 'components/Container'
import styled from 'styled-components'
import { Grid as GrommetGrid } from 'grommet'
import LinkButton from 'components/LinkButton'
import Row from 'components/Row'

const Grid = styled(GrommetGrid)`
    grid-template-columns: reprat(12, 1fr);
    grid-template-rows: repeat(3, 54px) repeat(2,70px);
    grid-gap: 12px;

    .box:nth-child(2n) {
        grid-column-start: 7;
        grid-column-end: 13;
    }

    .box:nth-child(2n + 1) {
        grid-column-start: 1;
        grid-column-end: 7;
    }

    * {
        width: 314px;
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

            p {
                text-align: center;
                margin: 8px 0;
                font-size: 0.8rem;
            }
        }
    }
`


export const Finish: React.FC = () => {
    return (
        <Container>
            <Grid margin={{ horizontal: '80px' }} >
                <Box className="box" selected noPadding >
                    <Row>
                        Caio Moura
                    </Row>
                </Box>
                <Box className="box" selected noPadding >
                    <Row>
                        Caio Moura
                    </Row>
                </Box>
                <Box className="box" selected noPadding >
                    <Row>
                        Caio Moura
                    </Row>
                </Box>
                 <Box className="box" selected noPadding >
                    <Row>
                        Caio Moura
                    </Row>
                </Box>
                <Box className="box" selected noPadding >
                    <Row>
                        Caio Moura
                    </Row>
                </Box>
                 <Box className="box" selected noPadding >
                    <Row>
                        Caio Moura
                    </Row>
                </Box>
                <Box className="box box-center" selected noPadding >
                    <Row>
                        Caio Moura
                    </Row>
                </Box>
                <Box className="box box-center" transparent noPadding direction="column" >
                        <LinkButton to="details" className="button" color="green">
                            Detalhe da Socilitação
                        </LinkButton>
                        <p>A credifica avaliará sua solicitação</p>
                </Box>
            </Grid>
        </Container>
    )
}