import actionTypes from "../action-types/actionTypes";

const initialState = {
  loggedIn: false,
  error: null,
  role: null,
  roles: [],
  token: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH.LOG_IN:
      return {
        ...state,
        loggedIn: true,
        error: null,
        token: action.payload.token,
      };
    case actionTypes.AUTH.LOG_OUT:
      return {
        ...state,
        loggedIn: false,
        error: action.payload,
        tokenExpDays: 0,
        token: "",
      };
    default:
      return state;
  }
};

export default loginReducer;
