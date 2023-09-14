import ActionTypes from "../action-types/actionTypes";

const initialState = {
  authModal: false,
};

const modalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.MODALS.SHOW_AUTH:
      return { ...state, authModal: true };
    case ActionTypes.MODALS.CLOSE_AUTH:
      return { ...state, authModal: false };
    case ActionTypes.MODALS.SHOW_MENU_MODAL:
      return { ...state, menuModal: true };
    case ActionTypes.MODALS.CLOSE_MENU_MODAL:
      return { ...state, menuModal: false };
    case ActionTypes.MODALS.SHOW_COMMENT_MODAL:
        return { ...state, comment: true };
    case ActionTypes.MODALS.CLOSE_COMMENT_MODAL:
          return { ...state, comment: false };
    default:
      return state;
  }
};

export default modalsReducer