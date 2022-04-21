import axios, { AxiosRequestConfig, AxiosResponse, AxiosRequestHeaders } from "axios";
const token = localStorage.getItem("token")
console.log(token)
const client = axios.create({
    baseURL: "https://frontend-task.depocloud.ml/api/mobile",
    headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
})


export async function requester<D = any, P = any>
    (options: AxiosRequestConfig<P>): Promise<AxiosResponse<D>> {
    // client.defaults.headers.common.Authentication = String(access_token)
    // console.log(client.defaults.headers.common.Authentication)
    return client(options)
}