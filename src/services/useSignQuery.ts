import axios, { AxiosError, AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { IUser } from "../utils/reducers";
import { requester } from "./requester";
const access_token = localStorage.getItem("access_token")

interface PostUser {
    phone_number: string;
    password: string;
}

const postSignIn = (user: PostUser) => {
    return requester<IUser, PostUser>({
        url: '/login',
        method: 'POST',
        data: user,
    })
}
const postSignOut = () => {
    return requester({ 
        url: '/logout', 
        method: 'POST',
     })
}

export const useSignInQuery = () => useMutation<AxiosResponse<IUser>, AxiosError, PostUser>(postSignIn)
export const useSignOutQuery = () => useMutation(postSignOut)
