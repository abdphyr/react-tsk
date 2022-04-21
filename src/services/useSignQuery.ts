import axios, { AxiosError, AxiosResponse } from "axios";
import { useMutation } from "react-query";


interface PostUser {
    phone_number: string;
    password: string;
}
interface ResponseUser {
    status: string;
    access_token: string;
    user: {
        id: number;
        name: string;
        phone: number;
    }
}

export const baseURL = "https://frontend-task.depocloud.ml/api/mobile"

const postSignIn = (user: PostUser) => {
    return axios.post<ResponseUser>(
        `${baseURL}/login`,
        user,
        {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
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
                "Authorization": `Bearer ${token}`,
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
}

export const useSignInQuery = () => useMutation<AxiosResponse<ResponseUser>, AxiosError, PostUser>(postSignIn)
export const useSignOutQuery = () => useMutation<AxiosResponse<any>, AxiosError, any>(postSignOut)
