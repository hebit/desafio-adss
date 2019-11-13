import React from 'react'

import Container from './styles'

const Footer: React.FC = () => {
    const content = {
        simulacao: "Selecione uma tabela"
    }
    const page = 'simulacao'
    return (
        <Container>
            {content[page]}
        </Container>
    )
}

export default Footer
