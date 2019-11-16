import { Table, User } from 'store/types'

const baseUrl = 'http://localhost:3001'

export async function get(path: string) {
    const res = await fetch(`${baseUrl}${path}`).then(res => res.json())
    return res
}

export async function getTable(id : number = 1) {
    const table : Table = await fetch(`${baseUrl}/rateTable/${id}`).then(res => res.json())
    return table
}

export async function getUser(cpf : string) {
    cpf = cpf.replace(/\.|\-/gm,'')
    const user : User[] = await fetch(`${baseUrl}/client?cpf=${cpf}`).then(res => res.json())
    return user[0]
}

export default {
    get,
    getTable,
    getUser,
}