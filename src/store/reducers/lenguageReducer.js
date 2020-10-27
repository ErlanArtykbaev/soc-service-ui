import {CHANGE_LANGUAGE_SUCCESS} from "../actionTypes";

const initialState = {
    language: "ru",
};

const languageReducer = (state = initialState, action) => {

    switch(action.type) {
        case CHANGE_LANGUAGE_SUCCESS:
            return {...state, language: action.language};
        default:
            return state;
    }
};

export default languageReducer;