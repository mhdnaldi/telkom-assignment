import * as actionTypes from "../actions/actionTypes";
const initialState = {
  data: [],
  cart: [],
  error: null,
  dataById: {},
  showModal: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SUCCESS:
      return {
        ...state,
        data: action.data,
      };
    case actionTypes.FETCH_FAILED:
      return {
        ...state,
        error: action.error,
      };
    case actionTypes.GET_BY_ID_SUCCESS:
      return {
        ...state,
        dataById: action.data,
      };
    case actionTypes.GET_BY_ID_FAILED:
      return {
        ...state,
        error: action.error,
      };

    case actionTypes.ADD_TO_CART:
      let id = state.cart.map((el) => el.id);
      if (!id.includes(action.data.id)) {
        return {
          ...state,
          cart: state.cart.concat(action.data),
          showModal: true,
        };
      } else {
        return state;
      }

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.splice(0, action.data),
      };

    case actionTypes.CLOSE_MODAL:
      return {
        ...state,
        showModal: null,
      };
    default:
      return state;
  }
};

export default reducer;
