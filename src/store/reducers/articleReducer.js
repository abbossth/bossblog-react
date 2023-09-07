const initialState = {
  articles: [],
};

const ArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ARTICLES":
      return {
        ...state,
        articles: action.payload,
      };
    default:
      return state;
  }
};

export default ArticleReducer;
