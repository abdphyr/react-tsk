import { useQuery } from "react-query";
import axios, { AxiosResponse, AxiosError } from "axios";
import { baseURL, mainHeader, IResSingleSale } from "./requester";

const getSale = (saleId: string) => {
    const token = localStorage.getItem("token")
    if(saleId){
        return axios.get<IResSingleSale>(`${baseURL}/sales/show?sale_id=${saleId}`, {
            headers: {
                ...mainHeader,
                "Authorization": `Bearer ${token}`
            }
        })
    }
}

export const useGetSaleQuery = (saleId: string) => {
    return useQuery<AxiosResponse<IResSingleSale, any> | undefined, AxiosError>(["sales", saleId],
        () => getSale(saleId))
}