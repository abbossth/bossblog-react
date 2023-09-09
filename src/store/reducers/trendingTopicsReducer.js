import ActionTypes from "../action-types/actionTypes";

const initialState = {
  trendingTopics: [],
};

const trendingTopicsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.TOPICS.GET_TRENDING_TOPICS:
      return {
        ...state,
        trendingTopics: action.payload,
      };
    default:
      return state;
  }
};

export default trendingTopicsReducer;
