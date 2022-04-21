export interface IUser {
    access_token: string,
}

export interface IUserAction {
    type: "SIGN_IN" | "SIGN_OUT",
    payload: IUser
}

export const initialUserState: IUser = {
    access_token: '',
}

export const userReducer = (state = initialUserState, action: IUserAction): IUser => {
    switch (action.type) {
        case 'SIGN_IN':
            localStorage.setItem("access_token", String(action.payload.access_token))
            return action.payload
        case 'SIGN_OUT':
            localStorage.removeItem("access_token")
            return {
                access_token: '',
            }
        default:
            return state
    }
}
