import { IResFindItemByBarcode } from "../services/requester"
export interface ITokenAction {
    type: "SIGN_IN" | "SIGN_OUT",
    payload?: string
}

export interface IFindItemAction {
    type: "ADD_ITEM" | "DEL_ITEM" | "CLEAR_ITEMS",
    payload?: IResFindItemByBarcode['item']
}

export const initToken = ''

export const initItems = [] as IResFindItemByBarcode['item'][]

export const itemsReducer = (state = initItems, action: IFindItemAction): IResFindItemByBarcode['item'][] => {
    switch (action.type) {
        case "ADD_ITEM":
            if (action.payload) {
                const newState = [...state]
                const findItem = state.find(item => item.id === action.payload?.id)
                if (findItem){
                    const index = state.findIndex(item => item.id === findItem.id)
                    findItem.qty++
                    newState.splice(index, 1, findItem)
                    return newState
                }
                const newItem = action.payload
                newItem.qty++
                return [newItem, ...state]
            }
            return state
        case "DEL_ITEM":
            if (action.payload) {
                const items = [...state]
                const index = items.findIndex(item => item.id === action.payload?.id)
                items.splice(index, 1)
                return items
            }
            return state
        case "CLEAR_ITEMS":
            return []
        default:
            return state
    }
}

export const tokenReducer = (state = initToken, action: ITokenAction): string => {
    switch (action.type) {
        case 'SIGN_IN':
            if (action.payload) {
                localStorage.setItem("token", action.payload)
                return action.payload
            }
            return ''
        case 'SIGN_OUT':
            localStorage.removeItem("token")
            return ''
        default:
            return state
    }
}
