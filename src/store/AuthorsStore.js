import { createContext, useReducer } from 'react';
import AuthorsReducer from '../reducers/authors';

const initialState = {
    authors: [],
    error: null
};

const AuthorsStore = ({ children }) => {
    const [state, dispatch] = useReducer(AuthorsReducer, initialState);
    
    return (
        <AuthorsContext.Provider value={[state, dispatch]}>
            { children }
        </AuthorsContext.Provider>
    )
}

export const AuthorsContext = createContext(initialState);
export default AuthorsStore;