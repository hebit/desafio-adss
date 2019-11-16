import React from 'react'
import Container from './styles'
import LinkButton from '../LinkButton/'
import { Installment, Table } from 'store/types';

interface Props {
    installment: Installment | null
    table: Table | null
}

const Footer = ({ installment, table } : Props) => {
    return (
        <Container>
            {!table ?
                    'Selecione uma tabela'
                    :
                    <>
                        <span>Tablela: {table.name}</span>
                        {!!installment && 
                            <>
                                <span>Parcelas: {installment.installments}</span>
                                <span>Valor da Parcela: R$ {installment.installmentValue}</span>
                                <LinkButton to="/selectUser" >Avançar</LinkButton>
                            </>
                        }
                        
                    </>
            }
        </Container>
    )
}

export default Footer
