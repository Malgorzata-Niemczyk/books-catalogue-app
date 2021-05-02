const AuthorsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_AUTHORS':
            return {
                ...state,
                authors: action.payload
            };
        case 'ADD_AUTHOR':
            return {
                ...state,
                authors: state.authors.concat(action.payload)
            };
        case 'REMOVE_AUTHOR':
            return {
                ...state,
                authors: state.authors.filter(author => author.id !== action.payload)
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}

export default AuthorsReducer;