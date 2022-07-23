import { combineReducers } from "redux";
import { actionTypes } from "./actionTypes"


const initialState = {
    MoviesList: {}
}

const MainReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_POPULAR_MOVIES_LIST:
        case actionTypes.GET_SEARCH_MOVIES_LIST:
            return { ...state };



        case actionTypes.UPDATE_SEARCH_MOVIES_LIST:
        case actionTypes.UPDATE_POPULAR_MOVIES_LIST:
            return { ...state, MoviesList: action.payload }
        default: return state
    }
}

export default combineReducers({ MainReducer })