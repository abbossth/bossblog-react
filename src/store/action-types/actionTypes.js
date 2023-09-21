const ActionTypes = {
  AUTH: {
    LOG_IN: "LOG_IN",
    LOG_OUT: "LOG_OUT",
  },
  ARTICLE: {
    GET_ARTICLES: "GET_ARTICLES",
    GET_TRENDING_ARTICLES: "GET_TRENDING_ARTICLES",
    LOAD_MORE_ARTICLES: "LOAD_MORE_ARTICLES",
    GET_ARTICLES_FOR_YOU: "GET_ARTICLES_FOR_YOU",
    LOAD_MORE_FOR_YOU_ARTICLES: "LOAD_MORE_FOR_YOU_ARTICLES",
    RESET_CURRENT_PAGE: "RESET_CURRENT_PAGE",
  },
  USER_ARTICLES: {
    GET_USER_ARTICLES: "GET_USER_ARTICLES",
    LOAD_MORE_USER_ARTICLES: "LOAD_MORE_USER_ARTICLES",
  },
  TOPICS: {
    GET_TRENDING_TOPICS: "GET_TRENDING_TOPICS",
    GET_TOPICS: "GET_TOPICS",
    GET_TOPIC_ARTICLES: "GET_TOPIC_ARTICLES",
    LOAD_MORE_TOPIC_ARTICLES: "LOAD_MORE_TOPIC_ARTICLES",
  },
  MODALS: {
    SHOW_COMMENT_MODAL: "SHOW_COMMENT_MODAL",
    CLOSE_COMMENT_MODAL: "CLOSE_COMMENT_MODAL",
    CLOSE_AUTH: "CLOSE_AUTH",
    SHOW_AUTH_SIGN_IN_OPTIONS: "SHOW_AUTH_SIGN_IN_OPTIONS",
    SHOW_AUTH_SIGN_UP_OPTIONS: "SHOW_AUTH_SIGN_UP_OPTIONS",
    SHOW_AUTH_SIGN_IN: "SHOW_AUTH_SIGN_IN",
    SHOW_AUTH_SIGN_UP: "SHOW_AUTH_SIGN_UP",
    SHOW_EMAIL_VERIFICATION: "SHOW_EMAIL_VERIFICATION",
    SHOW_SEND_CODE: "SHOW_SEND_CODE",
  },
  USER: {
    GET_USER_INFO: "GET_USER_INFO",
  },
  FOLLOW: {
    GET_FOLLOW_TOPICS: "GET_FOLLOW_TOPICS",
  },
};

export default ActionTypes;
