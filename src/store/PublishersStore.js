import { createContext, useReducer } from 'react';
import PublishersReducer from '../reducers/publishers';

const initialState = {
    publishers: [],
    error: null
};

const PublishersStore = ({ children }) => {
    const [state, dispatch] = useReducer(PublishersReducer, initialState);
    
    return (
        <PublishersContext.Provider value={[state, dispatch]}>
            { children }
        </PublishersContext.Provider>
    )
}

export const PublishersContext = createContext(initialState);
export default PublishersStore;