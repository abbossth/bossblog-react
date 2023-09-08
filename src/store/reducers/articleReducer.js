import ActionTypes from "../action-types/actionTypes";

const initialState = {
  articles: [],
};

const ArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ARTICLE.GET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      };
    default:
      return state;
  }
};

export default ArticleReducer;
