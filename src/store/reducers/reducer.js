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

    // CART
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
      console.log(action.id);
      return {
        ...state,
        cart: state.cart.filter((el) => el.id !== action.id),
      };

    case actionTypes.CLOSE_MODAL:
      return {
        ...state,
        showModal: null,
      };

    case actionTypes.INC_QTY:
      let inc = [...state.cart];
      inc[action.id].qty += 1;
      return {
        ...state,
        cart: inc,
      };

    case actionTypes.DEC_QTY:
      let dec = [...state.cart];
      if (dec[action.id].qty > 1) {
        dec[action.id].qty -= 1;
      }
      return {
        ...state,
        cart: dec,
      };

    case actionTypes.REMOVE_ALL_CART_ITEMS:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export default reducer;
