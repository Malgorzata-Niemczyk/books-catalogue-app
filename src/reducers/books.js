const BooksReducer = (state, action) => {
    switch (action.type) {
        case 'SET_BOOKS':
            return {
                ...state,
                books: action.payload
            };
        case 'ADD_BOOK':
            return {
                ...state,
                books: [...state.books, action.payload]
            };
        case 'REMOVE_BOOK':
            return {
                ...state,
                books: state.books.filter(book => book.id !== action.payload)
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

export default BooksReducer;