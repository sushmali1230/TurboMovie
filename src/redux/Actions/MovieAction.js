export const MOVIES = 'MOVIES';

export const fetMoviews = () => {
    return async dispatch => {
        // The Given YTS api was giving Network Request Failed error that's why Used another API.
        const response = await fetch(
            'https://reactnative.dev/movies.json'
        );
        const json = await response.json();
        dispatch({
            type: MOVIES,
            payload: json.movies
        });
    }
}