import axios, { AxiosRequestConfig, AxiosResponse, AxiosRequestHeaders } from "axios";
import { initialUserState } from "../utils/reducers";
const access_token = localStorage.getItem("access_token")


const client = axios.create({
    baseURL: "https://frontend-task.depocloud.ml/api/mobile",
    headers: {
        // Authorization: `Bearer 294|atyzBbR9TzjKP2j0gG2dZsxpdeywi08g2JZ4f274`,
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
})
// client.defaults.headers.common = {'Authorization': `Bearer ${access_token}`}

export async function requester<D = any, P = any>
    (options: AxiosRequestConfig<P>): Promise<AxiosResponse<D>> {
    // client.defaults.headers.common.Authentication = String(access_token)
    // console.log(client.defaults.headers.common.Authentication)
    return client(options)
}