import ActionTypes from "../action-types/actionTypes";

export const getSavedArticles = (arr) => {
  return {
    type: ActionTypes.ARTICLE.GET_SAVED_ARTICLES,
    payload: arr,
  };
};

export const loadMoreArticles = () => {
  return {
    type: ActionTypes.ARTICLE.LOAD_MORE_ARTICLES,
  };
};