export const getArticles = (arr) => {
  return {
    type: "GET_ARTICLES",
    payload: arr,
  };
};
