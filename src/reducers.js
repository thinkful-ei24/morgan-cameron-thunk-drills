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
    }
    else if (action.type === SEARCH_CHARACTERS_SUCCESS) {
        // remove loading state
        // populate the characters array
    }
    else if (action.type === SEARCH_CHARACTERS_ERROR) {
        // remove loading state
        // set the error state
    }
    return state;
}
