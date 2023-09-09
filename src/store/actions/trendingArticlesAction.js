import ActionTypes from "../action-types/actionTypes";

export const getTrendingArticles = (arr) => {
  return {
    type: ActionTypes.ARTICLE.GET_TRENDING_ARTICLES,
    payload: arr,
  };
};
