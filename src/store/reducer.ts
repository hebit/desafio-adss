import { rootState, User, Table } from './types'
import { actionTypes as actionType } from './actions'

const INITIAL_STATE : rootState = {
    user: null,
    table: null,
    installment: null,
}

interface Action {
    type: string
    payload: {
        user?: User
        table?: Table
    }
}


export default function reducer(state : rootState = INITIAL_STATE, action: Action) : rootState {
    switch(action.type) {
        case actionType.SET_USER:
            return { ...state, ...action.payload }
        case actionType.SET_TABLE:
            return { ...state, ...action.payload }
        case actionType.SET_INSTALLMENT:
            return { ...state, ...action.payload }
        default:
            return state
    }
}