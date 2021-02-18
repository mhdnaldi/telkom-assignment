import * as actionTypes from "./actionTypes";
import axios from "axios";

export const fetchStart = (data) => {
  return (dispatch) => {
    axios
      .get("http://localhost:8000/items")
      .then((res) => {
        dispatch(fetchSuccess(res.data));
      })
      .catch((err) => dispatch(err.message));
  };
};

export const fetchSuccess = (data) => {
  return {
    type: actionTypes.FETCH_SUCCESS,
    data: data,
  };
};

export const fetchFailed = (err) => {
  return {
    type: actionTypes.FETCH_FAILED,
    error: err,
  };
};
