import {CHANGE_LANGUAGE_SUCCESS} from "../actionTypes";

const changeLanguageSuccess = language => {
    return {type: CHANGE_LANGUAGE_SUCCESS, language};
};

export const changeLanguage = (lang) => {
    console.log(lang)
    return dispatch => {
        return dispatch(changeLanguageSuccess(lang));
    };
    // return dispatch => {
    //     return dispatch(changeLanguageSuccess(lang));
    // };
};
