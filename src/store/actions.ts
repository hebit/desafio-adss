import { User, Table, Installment } from './types'

export const actionTypes =  {
    SET_USER: 'SET_USER',
    SET_TABLE: 'SET_TABLE',
    SET_INSTALLMENT: 'SET_INSTALLMENT',
}


export function setUser(user: User) {
    return {
        type: actionTypes.SET_USER,
        payload: {
            user
        }
    }
}

export function setTable(table: Table) {
    return {
        type: actionTypes.SET_TABLE,
        payload: {
            table
        }
    }
}

export function setInstallment(installment: Installment) {
    return {
        type: actionTypes.SET_INSTALLMENT,
        payload: {
            installment
        }
    }
}