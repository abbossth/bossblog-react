import ActionTypes from "../action-types/actionTypes";

export const getWrittenDraft = (arr) => {
  return {
    type: ActionTypes.WRITE.GET_WRITTEN_DRAFT,
    payload: arr,
  };
};
