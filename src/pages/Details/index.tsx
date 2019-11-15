import React from 'react'
import Container from 'components/Container'
import Box from 'components/Box'
import { Grid } from 'grommet'
import { Card } from './styles'

export const Details: React.FC = () => {
    return (
        <Container>
            <Grid
                columns={
                    ['flex', 'flex']
                }
                gap="medium"
            >
            <Box transparent noPadding direction="column" justify="start">
                <Box margin="small" pad="small" height="xxsmall" justify="start">
                    Solicitação gerada por <b>Sistema CredFica</b>
                </Box>
                <Grid
                    columns={['flex', 'flex']}
                    gap={{ column: "medium", row: "small" }}
                >
                    <Box pad="small" height="small">
                        Solicitação gerada por sistema CredFica test1
                    </Box>
                    <Card>
                        dasd
                    </Card>
                    <Box pad="small" height="small">
                        Solicitação gerada por sistema CredFica test2
                    </Box>
                    <Box pad="small" height="small">
                        Solicitação gerada por sistema CredFica test1
                    </Box>
                    <Box pad="small" height="small">
                        Solicitação gerada por sistema CredFica test2
                    </Box>
                    <Box pad="small" height="small">
                        Solicitação gerada por sistema CredFica test1
                    </Box>
                    <Box pad="small" height="small">
                        Solicitação gerada por sistema CredFica test2
                    </Box>
                    <Box pad="small" height="small">
                        Solicitação gerada por sistema CredFica test1
                    </Box>
                    <Box pad="small" height="small">
                        Solicitação gerada por sistema CredFica test2
                    </Box>
                     <Box pad="small" height="small">
                        ultima
                    </Box>
                </Grid>
                <Box margin="small" height="xsmall">
                    Corno bom
                </Box>
            </Box>
            <Box margin={{ top: '72px' }} height="medium" >Bom</Box>
            </Grid>
            Details
        </Container>
    )
}