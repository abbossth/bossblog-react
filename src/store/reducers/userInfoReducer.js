import ActionTypes from "../action-types/actionTypes";

const initialState = {
  userInfo: null,
  tabImage: null,
};

const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.USER.GET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload?.data,
        tabImage: action.payload?.tab_img,
      };
    default:
      return state;
  }
};

export default userInfoReducer;
