import ActionTypes from "../action-types/actionTypes";

export const getTrendingTopics = (arr) => {
  return {
    type: ActionTypes.TOPICS.GET_TRENDING_TOPICS,
    payload: arr,
  };
};
