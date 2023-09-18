import ActionTypes from "../action-types/actionTypes";

const initialState = {
  topics: [],
};

const topicsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.TOPICS.GET_TOPICS:
      return {
        ...state,
        topics: action.payload,
      };
    default:
      return state;
  }
};

export default topicsReducer;
