import { createContext, useContext, useReducer, FC } from 'react';
import { initialUserState, userReducer } from './reducers';
import { IUserAction, IUser } from './reducers';

const StateContext = createContext<{
    user: IUser,
    userDispatch: React.Dispatch<IUserAction>
}>({
    user: initialUserState,
    userDispatch: () => null
})


export const useGetState = () => useContext(StateContext)

export const ContextProvider: FC = ({ children }) => {
    const [user, userDispatch] = useReducer(userReducer, initialUserState)
    return (
        <StateContext.Provider value={{ user, userDispatch }}>
            {children}
        </StateContext.Provider>
    );
};
