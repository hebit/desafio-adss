import styled from 'styled-components'
import { colors } from 'styles'

import { Box as GrommetBox, BoxProps } from 'grommet'

interface ContainerProps extends BoxProps {
    selected?: boolean
    transparent?: boolean
    noPadding?: boolean
}

export const Box = styled(GrommetBox)`
    background-color: 
        ${(props : ContainerProps) => 
            !!props.selected ? 
                colors.selectedGreen 
            : 
            !!props.transparent ?
                'transparent'
            :
                colors.gray 
        };
    ${ props => !!props.noPadding && 'padding: 0' }
    ${ props => !props.width && "width: 100%;" }
    ${ props => !props.height && "height: 100%;" }
    ${ props => !props.direction && "flex-direction: row;" }
    ${ props => !props.justify && "justify-content: space-between;" }
    ${ props => !props.align && "align-items: center;" }

    a.large {
        width: 100%;
        height: 100%;
        margin: 0;
        justify-content: center;
    }

    .input,
    input {
        background-color: ${ colors.white };
        width: 180px;
    }

    b {
        color: ${ colors.green };
        margin: 0 0.5em;
    }
`

export default Box