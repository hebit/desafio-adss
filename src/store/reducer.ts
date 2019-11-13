import { rootState, User, Table } from './types'

const INITIAL_STATE : rootState = {
    user: null,
    table: null
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
        case 'SET_USER':
            return { ...state, ...action.payload }
        case 'SET_TABLE':
            return { ...state, ...action.payload }
        default:
            return state
    }
}