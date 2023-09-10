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
    default:
      return state;
  }
};

export default modalsReducer