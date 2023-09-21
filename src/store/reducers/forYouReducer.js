import ActionTypes from "../action-types/actionTypes";

const initialState = {
  articles: [],
  pagination: {
    page: 1,
    totalCount: 1,
    totalPages: 1,
  },
  currentPage: 1,
  limit: 6,
};

const forYouArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ARTICLE.GET_ARTICLES_FOR_YOU:
      if (state.currentPage === 1) {
        return {
          ...state,
          articles: action.payload?.posts,
          pagination: action.payload?.pagination,
        };
      } else if (state.currentPage > 1) {
        return {
          ...state,
          articles: [...state.articles, ...action.payload?.posts],
          pagination: action.payload?.pagination,
        };
      }
      return state;
    case ActionTypes.ARTICLE.LOAD_MORE_FOR_YOU_ARTICLES:
      if (state?.currentPage !== state?.pagination?.totalPages) {
        return {
          ...state,
          currentPage: state.currentPage + 1,
        };
      }
      return state;
    case ActionTypes.ARTICLE.RESET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: 1,
      };
    default:
      return state;
  }
};

export default forYouArticleReducer;
