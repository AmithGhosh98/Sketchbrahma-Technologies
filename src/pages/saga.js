import { all, call, put, takeEvery } from "redux-saga/effects";
import { actionTypes } from "./actionTypes";
import { getPopularMoviesListService, getsearchMoviesListService } from "./services";
import constructURLs from "./URLS";


function* fetchPopularMoviesListData({ page }) {
    try {
        const response = yield call(getPopularMoviesListService, constructURLs('GET_POPULAR_MOVIES_LIST', page));
        if (response.data) {
            yield put({
                type: actionTypes.UPDATE_POPULAR_MOVIES_LIST,
                payload: response.data,
            });
        }
    } catch (error) {
        console.log("Error while Movie data", error);
    }
}

function* fetchSearchMoviesListData({ page, query }) {
    let Obj={
        page:page, 
        query:query
    }
    try {
        const response = yield call(getsearchMoviesListService, constructURLs('GET_SEARCH_MOVIES_LIST', Obj));
        if (response.data) {
            yield put({
                type: actionTypes.UPDATE_SEARCH_MOVIES_LIST,
                payload: response.data,
            });
        }
    } catch (error) {
        console.log("Error while Movie data", error);
    }
}

function* watchGetRequest() {
    yield takeEvery(actionTypes.GET_POPULAR_MOVIES_LIST, fetchPopularMoviesListData)
    yield takeEvery(actionTypes.GET_SEARCH_MOVIES_LIST, fetchSearchMoviesListData)



}
export default function* adminAccountSagas() {
    yield all([watchGetRequest()]);
}





