import ActionTypes from "../action-types/actionTypes";

export const getArticles = (arr) => {
  return {
    type: ActionTypes.ARTICLE.GET_ARTICLES,
    payload: arr,
  };
};

export const loadMoreArticles = () => {
  return {
    type: ActionTypes.ARTICLE.LOAD_MORE_ARTICLES,
  };
};
