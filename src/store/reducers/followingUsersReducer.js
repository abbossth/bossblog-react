import ActionTypes from "../action-types/actionTypes";

const initialState = {
  followingUsers: [],
};

const followingUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FOLLOW.GET_FOLLOWING_USERS:
      return {
        ...state,
        followingUsers: action.payload,
      };
    default:
      return state;
  }
};

export default followingUsersReducer;
