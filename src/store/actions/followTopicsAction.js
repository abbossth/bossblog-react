import ActionTypes from "../action-types/actionTypes";

export const getFollowTopics = (arr) => {
  return {
    type: ActionTypes.FOLLOW.GET_FOLLOW_TOPICS,
    payload: arr,
  };
};
