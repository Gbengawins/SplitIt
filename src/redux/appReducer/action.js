import axios from 'axios';
import * as types from './actionTypes';

const getTasks = () => (dispatch) => {
  dispatch({ type: types.GET_TASKS_REQUEST });
  return axios
    .get(`${process.env.REACT_APP_BASE_API}/tasks`)
    .then((r) => {
      dispatch({ type: types.GET_TASKS_SUCCESS, payload: r.data });
    })
    .catch((e) => {
      dispatch({ type: types.GET_TASKS_FAILURE, payload: e });
    });
};


const createTask = (payload) => (dispatch) => {
    dispatch({ type: types.CREATE_TASKS_REQUEST });
    return axios
        .post(`${process.env.REACT_APP_BASE_API}/tasks`, payload)
        .then((r) => { 
            dispatch({ type: types.CREATE_TASKS_SUCCESS, payload: r });
        })
        .catch((e) => { 
            dispatch({ type: types.CREATE_TASKS_FAILURE, payload: e });
        })
 };