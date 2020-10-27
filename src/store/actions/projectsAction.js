import axios from "./../../axios/axios";
import {CREATE_PROJECTS_SUCCESS} from "../actionTypes";

const fetchProjectsSuccess = projects => {
    return {type: CREATE_PROJECTS_SUCCESS, projects};
};

export const fetchProjects = () => {
    return dispatch => {
        return axios.get("/projects").then(response => {
            dispatch(fetchProjectsSuccess(response.data));
        });
    };
};

const createProjectsSuccess = () => {
    return {type: CREATE_PROJECTS_SUCCESS};
};

export const createProjects = projectData => {
    return dispatch => {
        return axios.post("/projects", projectData).then(() => {
            dispatch(createProjectsSuccess());
        });
    };
};