import { useQuery } from "react-query";
import axios, { AxiosResponse, AxiosError } from "axios";
import { baseURL, mainHeader } from "./requester";
import { IResSearchItems } from "./requester";

const searchItems = (query: string) => {
    const token = localStorage.getItem("token")
    if (query && query.length > 1){
        return axios.get<IResSearchItems>(`${baseURL}/items/search?query=${query}`, {
            headers: {
                ...mainHeader,
                "Authorization": `Bearer ${token}`
            }
        })
    }
}

export const useItemsSerchQuery = (query: string) => {
    return useQuery<AxiosResponse<IResSearchItems, any> | undefined, AxiosError>(["search", query], 
    () => searchItems(query))
}
