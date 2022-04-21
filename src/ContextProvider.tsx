import { createContext, useContext, useReducer, FC } from 'react';
import { tokenReducer, initToken, ITokenAction } from './utils/reducers';

const StateContext = createContext<{
    token: string,
    tokenDispatch: React.Dispatch<ITokenAction>
}>({
    token: initToken,
    tokenDispatch: () => null
})


export const ContextProvider: FC = ({ children }) => {
    const [token, tokenDispatch] = useReducer(tokenReducer, initToken)
    return (
        <StateContext.Provider value={{ token, tokenDispatch }}>
            {children}
        </StateContext.Provider>
    );
};

export const useGetStore = () => useContext(StateContext)