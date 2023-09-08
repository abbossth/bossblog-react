import actionTypes from "../action-types/actionTypes";

export const logIn = (data) => {
  return {
    type: actionTypes.AUTH.LOG_IN,
    payload: data,
  };
};

export const logOut = (data) => {
  return {
    type: actionTypes.AUTH.LOG_OUT,
    payload: data,
  };
};
