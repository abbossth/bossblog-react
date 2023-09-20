import ActionTypes from "../action-types/actionTypes";

export const getUserInfo = (arr) => {
  return {
    type: ActionTypes.USER.GET_USER_INFO,
    payload: arr,
  };
};
