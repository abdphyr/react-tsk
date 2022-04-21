export interface ITokenAction {
    type: "SIGN_IN" | "SIGN_OUT",
    payload?: string
}

export const initToken = ''

export const tokenReducer = (state = initToken, action: ITokenAction): string => {
    switch (action.type) {
        case 'SIGN_IN':
            if (action.payload){
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
