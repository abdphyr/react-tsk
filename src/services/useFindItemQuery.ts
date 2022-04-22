import { useQuery } from "react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import { baseURL, mainHeader } from "./requester";
import { IResFindItemByBarcode } from "./requester";

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

export const useFindItemByBarcodeQuery = (barcode: string) => {
    return useQuery<AxiosResponse<IResFindItemByBarcode, any> | undefined, AxiosError>(["find", barcode],
        () => findItemByBarcode(barcode))
}