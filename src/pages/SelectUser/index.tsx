import React, { useState, useEffect } from 'react'
import Container from '../../components/Container'
import Row from '../../components/Row'
import Title from '../../components/Title'
import Button from '../../components/Button'
import Input from 'components/Input'
import Sticky from 'components/Sticky'
import UserCard from 'components/UserCard'
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
    },[selectedUser])

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
            {!!selectedUser && <UserCard user={selectedUser} />}
        </Container>
    )
}
