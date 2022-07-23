import axios from 'axios';

export const getPopularMoviesListService = (requestUrl) => {
    return axios.get(requestUrl)
        .then((resp) => resp)
        .catch((error) => error.response);
};

export const getsearchMoviesListService = (requestUrl) => {
    return axios.get(requestUrl)
        .then((resp) => resp)
        .catch((error) => error.response);
};