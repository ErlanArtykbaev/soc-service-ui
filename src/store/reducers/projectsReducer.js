import {FETCH_PROJECTS_SUCCESS} from "../actionTypes";

const initialState = {
    projects: [],
};

const projectsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PROJECTS_SUCCESS:
            return {...state, projects: action.projects};
        default:
            return state;
    }
};

export default projectsReducer;