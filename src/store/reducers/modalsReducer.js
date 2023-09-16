import { MODAL_TYPES } from "../../utils/utils";
import ActionTypes from "../action-types/actionTypes";

const initialState = {
  authModal: false,
  menuModal: false,
  comment: false,
  store: {
    modalType: null,
  },
};

const modalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.MODALS.SHOW_AUTH_SIGN_IN_OPTIONS:
      return {
        ...state,
        authModal: true,
        store: { modalType: MODAL_TYPES.SIGN_IN_MODAL },
      };
    case ActionTypes.MODALS.SHOW_AUTH_SIGN_UP_OPTIONS:
      return {
        ...state,
        authModal: true,
        store: { modalType: MODAL_TYPES.SIGN_UP_MODAL },
      };
    case ActionTypes.MODALS.CLOSE_AUTH:
      return { ...state, authModal: false, store: { modalType: null } };
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

export default modalsReducer;
