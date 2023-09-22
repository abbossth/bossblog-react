import ActionTypes from "../action-types/actionTypes";
import { WRITE_ARTICLE_STATUS, initialBlocks } from "../../utils/utils";

const initialState = {
  body: {
    blocks: initialBlocks,
  },
  title: "",
  sub_title: "",
  image: "",
  postTopics: [],
  status: WRITE_ARTICLE_STATUS.DRAFT,
};

const writtenDraftReducer = (state = initialState, action) => {
  const img = state.body.blocks.filter((b) => b.type === "image")?.[0]?.data
    ?.file?.url;
  switch (action.type) {
    case ActionTypes.WRITE.GET_WRITTEN_DRAFT:
      return {
        ...state,
        body: action.payload,
      };
    case ActionTypes.WRITE.SET_TITLE_AND_SUBTITLE:
      return {
        ...state,
        title: state.body.blocks.filter((b) => b.type === "header")?.[0]?.data
          ?.text,
        sub_title: state.body.blocks.filter((b) => b.type === "paragraph")?.[0]
          ?.data?.text,
        image: img ? img : null,
      };
    case ActionTypes.WRITE.CHANGE_TITLE_AND_SUBTITLE:
      return {
        ...state,
        title: action.payload.title,
        sub_title: action.payload.sub_title,
      };
    default:
      return state;
  }
};

export default writtenDraftReducer;
