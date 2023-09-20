import ActionTypes from "../action-types/actionTypes";

const initialState = {
  followTopics: [],
};

const followTopicsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FOLLOW.GET_FOLLOW_TOPICS:
      return {
        ...state,
        followTopics: action.payload,
      };
    default:
      return state;
  }
};

export default followTopicsReducer;
