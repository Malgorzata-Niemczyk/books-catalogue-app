const PublishersReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PUBLISHERS':
            return {
                ...state,
                publishers: action.payload
            };
        case 'ADD_PUBLISHERS':
            return {
                ...state,
                publishers: state.publishers.concat(action.payload)
            };
        case 'REMOVE_PUBLISHERS':
            return {
                ...state,
                publishers: state.publishers.filter(publisher => publisher.id !== action.payload)
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

export default PublishersReducer;