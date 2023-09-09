import actionTypes from "../action-types/actionTypes";

const initialState = {
  loggedIn: false,
  error: null,
  tokenExpDays: 0,
  userLoggedInTime: null,
  role: null,
  roles: [],
  token: "",
  userId: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH.LOG_IN:
      return {
        ...state,
        loggedIn: true,
        error: null,
        // role: action.payload.role,
        // roles: action.payload.roles,
        // token: action.payload.token,
        // userLoggedInTime: new Date(),
        // userId: action.payload.userId,
      };
    case actionTypes.AUTH.LOG_OUT:
      return {
        ...state,
        loggedIn: false,
        error: action.payload,
        tokenExpDays: 0,
        role: null,
        roles: [],
        token: "",
        userLoggedInTime: null,
        userId: "",
      };
    default:
      return state;
  }
};

export default loginReducer;
