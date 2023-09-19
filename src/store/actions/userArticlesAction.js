import ActionTypes from "../action-types/actionTypes";

export const getUserArticles = (arr) => {
  return {
    type: ActionTypes.USER_ARTICLES.GET_USER_ARTICLES,
    payload: arr,
  };
};

export const loadMoreUserArticles = () => {
  return {
    type: ActionTypes.USER_ARTICLES.LOAD_MORE_USER_ARTICLES,
  };
};
