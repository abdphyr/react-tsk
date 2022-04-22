import { useQuery } from "react-query";
import axios, { AxiosResponse, AxiosError } from "axios";
import { baseURL, mainHeader, IResSales } from "./requester";

const getSales = () => {
    const token = localStorage.getItem("token")
    return axios.get<IResSales>(`${baseURL}/sales`, {
        headers: {
            ...mainHeader,
            "Authorization": `Bearer ${token}`
        }
    })
}

export const useGetSalesQuery = () => {
    return useQuery<AxiosResponse<IResSales, any>, AxiosError>(["sales"], getSales)
}
