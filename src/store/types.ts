export interface rootState {
    user: User | null | undefined
    table: Table | null | undefined
}

export interface Table {
    id: number
    name: string
    installments: Installment[]
}

export interface Solicitation {
    id: number
    clientId: number
    installmentInterest: number
    installmentInterestValue: number
    comission: number
    comissionValue: number
    installmentValue: number
    cardNumber: number
    desiredValue: number
    totalLoan: number
    installmentId: number
    rateTableId: number

}

export interface Installment {
    id: number
    installments: number
    installmentInterest: number
    installmentValue: number
    fullValue: number
    comission: number
}

export interface Bank {
    label: string
    accountTypeLabel: string
    accountNumber: string
}

export interface User {
    id: number
    name: string
    phone: string
    cpf: string
    bank: Bank
}