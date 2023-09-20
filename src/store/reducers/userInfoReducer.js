import ActionTypes from "../action-types/actionTypes";

const initialState = {
  userInfo: null,
};

const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.USER.GET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    default:
      return state;
  }
};

export default userInfoReducer;
