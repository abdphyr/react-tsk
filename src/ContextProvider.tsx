import { createContext, useContext, useReducer, FC } from 'react';
import { tokenReducer, initToken, ITokenAction } from './utils/reducers';
import { itemsReducer, initItems, IFindItemAction } from './utils/reducers';
import { IResFindItemByBarcode } from './services/requester';

const StateContext = createContext<{
    token: string,
    tokenDispatch: React.Dispatch<ITokenAction>,
    items: IResFindItemByBarcode['item'][],
    itemsDispatch: React.Dispatch<IFindItemAction>
}>({
    token: initToken,
    tokenDispatch: () => null,
    items: initItems,
    itemsDispatch: () => null
})


export const ContextProvider: FC = ({ children }) => {
    const [token, tokenDispatch] = useReducer(tokenReducer, initToken)
    const [items, itemsDispatch] = useReducer(itemsReducer, initItems)
    return (
        <StateContext.Provider value={{ token, tokenDispatch, items, itemsDispatch }}>
            {children}
        </StateContext.Provider>
    );
};

export const useGetStore = () => useContext(StateContext)