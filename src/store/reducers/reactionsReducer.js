import ActionTypes from "../action-types/actionTypes";

const initialState = {
  postReactions: [],
};

const postReactionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REACTIONS.GET_POST_REACTIONS:
      return {
        ...state,
        postReactions: [...state.postReactions, action.payload],
      };
    case ActionTypes.REACTIONS.REMOVE_POST_REACTION:
      const newReactions = state.postReactions.filter(
        (r) => r !== action.payload
      );
      return {
        ...state,
        postReactions: [...newReactions],
      };
    default:
      return state;
  }
};

export default postReactionsReducer;
