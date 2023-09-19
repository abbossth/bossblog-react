import ActionTypes from "../action-types/actionTypes";

export const getTopicArticles = (arr) => {
  return {
    type: ActionTypes.TOPICS.GET_TOPIC_ARTICLES,
    payload: arr,
  };
};

export const loadMoreTopicArticles = () => {
  return {
    type: ActionTypes.TOPICS.LOAD_MORE_TOPIC_ARTICLES,
  };
};
