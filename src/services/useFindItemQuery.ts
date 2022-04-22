import { useQueries } from "react-query";
import axios, { AxiosResponse, AxiosError } from "axios";
import { baseURL, mainHeader } from "./requester";
import { IResFindItemByBarcode, IResSearchItems } from "./requester";

export const findItemByBarcode = (barcode: string) => {
    const token = localStorage.getItem("token")
    if (barcode) {
        return axios.get<IResFindItemByBarcode>(`${baseURL}/items/show?barcode=${barcode}`, {
            headers: {
                ...mainHeader,
                "Authorization": `Bearer ${token}`
            }
        })
    }
}


export const useFindItemByBarcodeQuery = (items: IResSearchItems['items'] | undefined) => {
    return useQueries(items ? items.map(item => {
        return {
            queryKey: ['foundItems', item.name],
            queryFn: () => findItemByBarcode(item.barcode)
        }
    }) : [])
}
