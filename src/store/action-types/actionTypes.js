const ActionTypes = {
  AUTH: {
    LOG_IN: "LOG_IN",
    LOG_OUT: "LOG_OUT",
  },
  ARTICLE: {
    GET_ARTICLES: "GET_ARTICLES",
    GET_TRENDING_ARTICLES: "GET_TRENDING_ARTICLES",
    LOAD_MORE_ARTICLES: "LOAD_MORE_ARTICLES",
  },
  TOPICS: {
    GET_TRENDING_TOPICS: "GET_TRENDING_TOPICS",
  },
  MODALS: {
    SHOW_MENU_MODAL: "SHOW_MENU_MODAL",
    CLOSE_MENU_MODAL: "CLOSE_MENU_MODAL",
    SHOW_COMMENT_MODAL: "SHOW_COMMENT_MODAL",
    CLOSE_COMMENT_MODAL: "CLOSE_COMMENT_MODAL",
    CLOSE_AUTH: "CLOSE_AUTH",
    SHOW_AUTH_SIGN_IN_OPTIONS: "SHOW_AUTH_SIGN_IN_OPTIONS",
    SHOW_AUTH_SIGN_UP_OPTIONS: "SHOW_AUTH_SIGN_UP_OPTIONS",
    SHOW_AUTH_SIGN_IN: "SHOW_AUTH_SIGN_IN",
    SHOW_AUTH_SIGN_UP: "SHOW_AUTH_SIGN_UP",
    SHOW_EMAIL_VERIFICATION: "SHOW_EMAIL_VERIFICATION"
  },
};

export default ActionTypes;
