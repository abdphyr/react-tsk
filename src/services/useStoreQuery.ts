import axios, { AxiosError, AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { baseURL, mainHeader, IReqStoreSale, IResStoreSale } from './requester'


const postStoreSale = (sale: IReqStoreSale) => {
    const token = localStorage.getItem("token")
    return axios.post<IResStoreSale, AxiosResponse<IResStoreSale>, IReqStoreSale>(
        `${baseURL}/sales`,
        sale,
        {
            headers: {
                ...mainHeader,
                "Authorization": `Bearer ${token}`
            }
        })
}

export const usePostStoreSaleQuery = (sale: IReqStoreSale) => {
    return useMutation<AxiosResponse<IResStoreSale, any>, AxiosError>(
        () => postStoreSale(sale))
}