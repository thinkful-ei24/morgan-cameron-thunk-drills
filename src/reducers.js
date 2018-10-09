import {
    SEARCH_CHARACTERS_REQUEST,
    SEARCH_CHARACTERS_SUCCESS,
    SEARCH_CHARACTERS_ERROR
} from './actions';

const initialState = {
    characters: [],
    loading: false,
    error: null
};

export function characterReducer(state=initialState, action) {
    // Handle these sync actions
    if (action.type === SEARCH_CHARACTERS_REQUEST) {
        // set loading state
        return Object.assign({}, state, {
            loading: true,
            characters: []
        });
    }
    else if (action.type === SEARCH_CHARACTERS_SUCCESS) {
        // remove loading state
        // populate the characters array
        return Object.assign({}, state, {
            loading: false,
            characters: action.characters
        });
    }
    else if (action.type === SEARCH_CHARACTERS_ERROR) {
        // remove loading state
        // set the error state
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    }
    return state;
}
