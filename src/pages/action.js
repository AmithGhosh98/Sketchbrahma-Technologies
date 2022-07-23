import { actionTypes } from "./actionTypes";


export const getMoviesListData = (pageNo) => (
    {
        type: actionTypes.GET_POPULAR_MOVIES_LIST,
        page: pageNo,
    }
)


export const getSearchMoviesList = (pageNo, query) => (
    {
        type: actionTypes.GET_SEARCH_MOVIES_LIST,
        page: pageNo,
        query: query
    }
)