export const baseURL = "https://frontend-task.depocloud.ml/api/mobile"

export const mainHeader = {
    "Accept": "application/json",
    "Content-Type": "application/json"
}

export interface IReqUser {
    phone_number: string;
    password: string;
}
export interface IResUser {
    status: string;
    access_token: string;
    user: {
        id: number;
        name: string;
        phone: number;
    }
}
export interface IResSearchItems {
    items: {
        name: string;
        barcode: string;
    }[]
}

export interface IResFindItemByBarcode {
    item: {
        id: number;
        name: string;
        unit_id: number,
        cost: number;
        price: number;
        qty: number;
    }
}
export interface IResSales {
    sales: {
        id: number;
        cashier: string;
        client: string | null;
        subtotal: number;
        total: number;
        state: number;
        created_at: string;
    }
}

export interface IResSingleSale {
    sale: {
        id: number;
        store_id: number;
        cashier_id: number;
        subtotal: number;
        total: number;
        discount: number;
        state: number;
        created_at: string;
        items: {
            id: number;
            sale_id: number;
            item_id: number;
            qty: number;
            price: number;
            total: number;
        }[]
    }
}

export interface IReqStoreSale {
    items: {
        item_id: number;
        qty: number;
        total: number
    }[]
}
export interface IResStoreSale {
    store_id: number;
    cash_desk_id: number;
    cashier_id: number;
    state: number;
    discount: number;
    updated_at: string,
    id: number;
    subtotal: number;
    total: number;
}


