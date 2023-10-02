import ActionTypes from "../action-types/actionTypes";

export const getArticleReactionsActions = (arr) => {
  return {
    type: ActionTypes.REACTIONS.GET_POST_REACTIONS,
    payload: arr,
  };
};

export const removeArticleReactionActions = (arr) => {
  return {
    type: ActionTypes.REACTIONS.REMOVE_POST_REACTION,
    payload: arr,
  };
};
