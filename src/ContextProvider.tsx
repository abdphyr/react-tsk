import React, { createContext, useContext, useReducer, useState, FC } from 'react';
import { tokenReducer, initToken, ITokenAction } from './utils/reducers';
import { itemsReducer, initItems, IFindItemAction } from './utils/reducers';
import { IResFindItemByBarcode } from './services/requester';

const StateContext = createContext<{
    token: string,
    tokenDispatch: React.Dispatch<ITokenAction>,
    items: IResFindItemByBarcode['item'][],
    itemsDispatch: React.Dispatch<IFindItemAction>,
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>
}>({
    token: initToken,
    tokenDispatch: () => null,
    items: initItems,
    itemsDispatch: () => null,
    search: '',
    setSearch: () => null
})


export const ContextProvider: FC = ({ children }) => {
    const [search, setSearch] = useState('')
    const [token, tokenDispatch] = useReducer(tokenReducer, initToken)
    const [items, itemsDispatch] = useReducer(itemsReducer, initItems)
    return (
        <StateContext.Provider value={{ token, tokenDispatch, items, itemsDispatch, search, setSearch }}>
            {children}
        </StateContext.Provider>
    );
};

export const useGetStore = () => useContext(StateContext)