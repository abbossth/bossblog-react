import ActionTypes from "../action-types/actionTypes";

const initialState = {
  trendingArticles: [],
};

const trendingArticlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ARTICLE.GET_TRENDING_ARTICLES:
      return {
        ...state,
        trendingArticles: action.payload,
      };
    default:
      return state;
  }
};

export default trendingArticlesReducer;
