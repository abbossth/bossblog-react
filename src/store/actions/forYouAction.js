import ActionTypes from "../action-types/actionTypes";

export const getForYouArticles = (arr) => {
  return {
    type: ActionTypes.ARTICLE.GET_ARTICLES_FOR_YOU,
    payload: arr,
  };
};

export const loadMoreForYouArticles = () => {
  return {
    type: ActionTypes.ARTICLE.LOAD_MORE_FOR_YOU_ARTICLES,
  };
};
