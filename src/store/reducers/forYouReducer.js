import ActionTypes from "../action-types/actionTypes";

const initialState = {
  forYouArticles: [],
};

const forYouReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ARTICLE.FOR_YOU:
      return {
        ...state,
        forYouArticles: action.payload,
      };
    default:
      return state;
  }
};

export default forYouReducer;
