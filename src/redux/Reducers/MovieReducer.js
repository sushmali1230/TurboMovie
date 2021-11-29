const initialState = {
    movies: []
}

export const MOVIES = 'MOVIES';

export default function (state=initialState, action) {
    switch(action.type) {
        case MOVIES:
            return {
                ...state,
                movies: action.payload
            }
    }
    return state;
}