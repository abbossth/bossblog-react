import ActionTypes from "../action-types/actionTypes";

export const getSavedArticles = (arr) => {
  return {
    type: ActionTypes.ARTICLE.GET_SAVED_ARTICLES,
    payload: {
      posts: arr?.posts,
      pagination: arr?.pagination,
    },
  };
};

export const loadMoreArticles = () => {
  return {
    type: ActionTypes.ARTICLE.LOAD_MORE_ARTICLES,
  };
};

export const addToFavorites = (id) => {
  return {
    type: "ADD_TO_FAVORITES",
    payload: id,
  };
};
export const removeFromFavorites = (id) => {
  return {
    type: "REMOVE_FROM_FAVORITES",
    payload: id,
  };
};
