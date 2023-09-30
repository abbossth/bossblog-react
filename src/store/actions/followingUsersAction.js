import ActionTypes from "../action-types/actionTypes";

export const getFollowingUsers = (data) => {
  return {
    type: ActionTypes.FOLLOW.GET_FOLLOWING_USERS,
    payload: data,
  };
};
