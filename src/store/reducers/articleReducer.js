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

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ARTICLE.GET_ARTICLES:
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
    case ActionTypes.ARTICLE.LOAD_MORE_ARTICLES:
      if (state.currentPage !== state.pagination.totalPages) {
        return {
          ...state,
          currentPage: state.currentPage + 1,
        };
      }
      return state;
    default:
      return state;
  }
};

export default articleReducer;
