import ActionTypes from "../action-types/actionTypes";

export const getWrittenDraft = (arr) => {
  return {
    type: ActionTypes.WRITE.GET_WRITTEN_DRAFT,
    payload: arr,
  };
};

export const setTitleAndSubtitle = () => {
  return {
    type: ActionTypes.WRITE.SET_TITLE_AND_SUBTITLE,
  };
};

export const setPostId = (data) => {
  return {
    type: ActionTypes.WRITE.SET_POST_ID,
    payload: data,
  };
};

export const changeTitleAndSubtitle = (title, sub_title) => {
  return {
    type: ActionTypes.WRITE.CHANGE_TITLE_AND_SUBTITLE,
    payload: {
      title,
      sub_title,
    },
  };
};
