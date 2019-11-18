import { Table, User, Installment } from 'store/types'

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
    cpf = cpf.replace(/\.|-/gm,'')
    const user : User[] = await fetch(`${baseUrl}/client?cpf=${cpf}`).then(res => res.json())
    return user[0]
}

export function getInitialValue({ fullValue, installmentInterest } : Installment, format = true) {
    let value : number | string = fullValue/(1+installmentInterest/100)
    value = value.toFixed(2)
    return format ? value.replace('.',',') : value
}

export default {
    get,
    getTable,
    getUser,
}