import { User, Table } from './types'

export const Types =  {
    SET_USER: 'SET_USER',
    SET_TABLE: 'SET_TABLE'
}


export function setUser(user: User) {
    return {
        type: Types.SET_USER,
        payload: {
            user
        }
    }
}


export function setTable(table: Table) {
    return {
        type: Types.SET_TABLE,
        payload: {
            table
        }
    }
}