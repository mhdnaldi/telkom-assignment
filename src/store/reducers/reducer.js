import * as actionTypes from "../actions/actionTypes";
const initialState = {
  data: [],
  error: null,
  dataById: {},
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
      console.log(action.data);
      return {
        ...state,
        dataById: action.data,
      };
    case actionTypes.GET_BY_ID_FAILED:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
