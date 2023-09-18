import ActionTypes from "../action-types/actionTypes";

export const getTopics = (arr) => {
  return {
    type: ActionTypes.TOPICS.GET_TOPICS,
    payload: arr,
  };
};
