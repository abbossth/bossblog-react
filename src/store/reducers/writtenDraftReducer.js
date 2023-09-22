import ActionTypes from "../action-types/actionTypes";
import { initialBlocks } from "../../utils/utils";

const initialState = {
  draft: {
    blocks: initialBlocks,
  },
};

const writtenDraftReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.WRITE.GET_WRITTEN_DRAFT:
      return {
        ...state,
        draft: action.payload,
      };
    default:
      return state;
  }
};

export default writtenDraftReducer;
