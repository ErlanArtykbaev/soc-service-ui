import axios from "./../../axios/axios";
import {CREATE_NEWS_SUCCESS} from "../actionTypes";

const fetchNewsSuccess = news => {
    return {type: CREATE_NEWS_SUCCESS, news};
};

export const fetchNews = () => {
    return dispatch => {
        return axios.get("/news").then(response => {
            dispatch(fetchNewsSuccess(response.data));
        });
    };
};

const createNewsSuccess = () => {
    return {type: CREATE_NEWS_SUCCESS};
};

export const createNews = newsData => {
    return dispatch => {
        return axios.post("/news", newsData).then(() => {
            dispatch(createNewsSuccess());
        });
    };
};