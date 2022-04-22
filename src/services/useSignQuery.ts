import axios, { AxiosError, AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { baseURL, mainHeader } from './requester'
import { IReqUser, IResUser } from "./requester";


const postSignIn = (user: IReqUser) => {
    return axios.post<IResUser, AxiosResponse<IResUser>, IReqUser>(
        `${baseURL}/login`,
        user,
        {
            headers: {
                ...mainHeader
            }
        }
    )
}
const postSignOut = () => {
    const token = localStorage.getItem("token")
    return axios.post(
        `${baseURL}/logout`,
        {},
        {
            headers: {
                ...mainHeader,
                "Authorization": `Bearer ${token}`
            }
        })
}

export const useSignInQuery = () => {
    return useMutation<AxiosResponse<IResUser>, AxiosError, IReqUser>(postSignIn)
}
export const useSignOutQuery = () => {
    return useMutation<AxiosResponse<any>, AxiosError, any>(postSignOut)
}