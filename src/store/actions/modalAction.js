import ActionTypes from "../action-types/actionTypes";

export const showAuthSignIn = () => {
  return {
    type: ActionTypes.MODALS.SHOW_AUTH_SIGN_IN,
  };
};
export const showAuthSignUp = () => {
  return {
    type: ActionTypes.MODALS.SHOW_AUTH_SIGN_UP,
  };
};
export const closeAuth = () => {
  return {
    type: ActionTypes.MODALS.CLOSE_AUTH,
  };
};
export const showMenuModal = () => {
  return {
    type: ActionTypes.MODALS.SHOW_MENU_MODAL,
  };
};

export const closeMenuModal = () => {
  return {
    type: ActionTypes.MODALS.CLOSE_MENU_MODAL,
  };
};

export const showCommentModal = () => {
  return {
    type: ActionTypes.MODALS.SHOW_COMMENT_MODAL,
  };
};

export const closeCommentModal = () => {
  return {
    type: ActionTypes.MODALS.CLOSE_COMMENT_MODAL,
  };
};
