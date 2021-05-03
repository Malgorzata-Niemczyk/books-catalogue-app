import { createContext, useReducer } from 'react';
import BooksReducer from '../reducers/books';

const initialState = {
    books: [],
    error: null
};

const BooksStore = ({ children }) => {
    const [state, dispatch] = useReducer(BooksReducer, initialState);
    
    return (
        <BooksContext.Provider value={[state, dispatch]}>
            { children }
        </BooksContext.Provider>
    )
}

export const BooksContext = createContext(initialState);
export default BooksStore;