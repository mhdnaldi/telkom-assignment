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

// GET BY ID

export const getByIdStart = (id) => {
  return (dispatch) =>
    axios
      .get(`http://localhost:8000/items/${id}`)
      .then((res) => {
        dispatch(getByIdSuccess(res.data));
      })
      .catch((err) => dispatch(getByIdFailed(err.message)));
};

export const getByIdSuccess = (data) => {
  return {
    type: actionTypes.GET_BY_ID_SUCCESS,
    data: data,
  };
};

export const getByIdFailed = (err) => {
  return {
    type: actionTypes.GET_BY_ID_FAILED,
    error: err,
  };
};

// CART
export const addToCart = (data) => {
  return {
    type: actionTypes.ADD_TO_CART,
    data: data,
  };
};

export const removeFromCart = (id) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    id,
  };
};

export const closeModal = () => {
  return {
    type: actionTypes.CLOSE_MODAL,
  };
};

export const increment = (id) => {
  return {
    type: actionTypes.INC_QTY,
    id,
  };
};

export const decrement = (id) => {
  return {
    type: actionTypes.DEC_QTY,
    id,
  };
};

export const removeAllCartItems = () => {
  return {
    type: actionTypes.REMOVE_ALL_CART_ITEMS,
  };
};
