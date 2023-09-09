import { useSelector } from "react-redux";

const Home = () => {
  const { articles } = useSelector((state) => state.articleReducer);
  const { trendingTopics } = useSelector(
    (state) => state.trendingTopicsReducer
  );
  const { trendingArticles } = useSelector(
    (state) => state.trendingArticlesReducer
  );

  console.log("articles", articles);
  console.log("trending topics", trendingTopics);
  console.log("trending articles", trendingArticles);
  return <h5>Home</h5>;
};

export default Home;
