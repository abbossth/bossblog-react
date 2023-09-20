import ActionTypes from "../action-types/actionTypes";

export const forYou = (arr) => {
  return {
    type: ActionTypes.ARTICLE.FOR_YOU,
    payload: arr,
  };
};