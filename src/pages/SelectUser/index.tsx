import React, { useState, useEffect } from 'react'
import {
    Container,
    Row,
    Title,
    Button,
    Input,
    Sticky,
    UserCard as Card,
} from 'components'
import { useSelector, useDispatch } from 'react-redux'
import { rootState, User } from 'store/types'
import api from 'api'
//@ts-ignore
import formatCpf from '@brazilian-utils/format-cpf'

export const SelectUser: React.FC = () => {

    const user = useSelector((state : rootState) => state.user)
    const [inputValue, setInputValue] = useState('')
    const [selectedUser, setSelectedUser] = useState<User|undefined|null>(user)
    const dispatch = useDispatch()
    
    useEffect(() => {
        let user = selectedUser
        console.log('SET_USER', user)
        dispatch({ type: 'SET_USER', payload: { user } })
    },[selectedUser, dispatch])

    async function getUser() {
        const user = await api.getUser(inputValue)
        setSelectedUser(user)
    }

    return (
        <Container>
            <Title>Valor desejado</Title>
            <Row>
                <Sticky>
                    <Input 
                        value={inputValue} 
                        onChange={(value : string) => setInputValue(formatCpf(value)) }
                        placeholder="CPF"
                    />
                    <Button color="green" onClick={getUser}>Buscar</Button>
                </Sticky>
            </Row>
            {!!selectedUser && <Card user={selectedUser} />}
        </Container>
    )
}
