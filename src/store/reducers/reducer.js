import * as actionTypes from "../actions/actionTypes";
const initialState = {
  data: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SUCCESS:
      console.log(action.data);
      return {
        ...state,
        data: action.data,
      };
    case actionTypes.FETCH_FAILED:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
