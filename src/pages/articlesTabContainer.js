import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import axios from "../api/axios";
import ArticleCard from "../components/article-card";
import { getForYouArticles } from "../store/actions/forYouAction";
import { getTopicArticles } from "../store/actions/topicArticlesAction";
import { QUERY_TYPES } from "../utils/utils";

const ArticlesTabContainer = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get("tab");
  const topicId = searchParams.get("topic");
  const VALUE = useMemo(() => {
    return tab
      ? { type: QUERY_TYPES.TAB, tab }
      : topicId
      ? { type: QUERY_TYPES.TOPIC, id: topicId }
      : { type: QUERY_TYPES.TAB, tab };
  }, [tab, topicId]);
  const { limit, currentPage, articles } = useSelector(
    (state) => state.forYouArticleReducer
  );
  const { token } = useSelector((state) => state.loginReducer);
  const fetchForYou = useCallback(async () => {
    try {
      const res = await axios.get(
        `/posts/foryou?limit=${limit}&page=${currentPage}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log("For youuu pst", res?.data);
      //   dispatch(getForYouArticles(res?.data));
    } catch (err) {
      console.log("Unhandled Error in trending articles", err);
    }
  }, [limit, currentPage, token]);

  const fetchPostFollows = async () => {
    try {
      const res = await axios.get(
        `/posts/follows?limit=${limit}&page=${currentPage}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("post follows", res);
      // dispatch(getForYouArticles(res?.data));
    } catch (err) {
      console.log("Unhandled Error in trending articles", err);
    }
  };

  const fetchTopicPosts = async (id) => {
    try {
      const res = await axios.get(`/topics/posts/${id}`);
      console.log("Topic Articles", res);
      dispatch(getTopicArticles(res?.data));
    } catch (err) {
      console.log(
        `Unhandled Error while Fetching Topic POSTs with ID: ${topicId}. Error: ${err}`
      );
    }
  };

  useEffect(() => {
    if (VALUE.type === QUERY_TYPES.TAB) {
      if (VALUE.tab === "following") {
        console.log("Following posts!");
        fetchPostFollows();
      }
      if (!VALUE.tab) {
        fetchForYou();
        console.log("For you posts!");
      } else {
        return;
      }
    } else if (VALUE.type === QUERY_TYPES.TOPIC) {
      console.log("Topic posts", VALUE.id);
      fetchTopicPosts(VALUE.id);
    } else {
      console.log("ELSE", VALUE);
    }
    console.log(VALUE);
  }, [VALUE, currentPage]);
  return (
    <div className="es-article-list">
      {articles &&
        articles.map((x, idx) => {
          return <ArticleCard key={"article-" + idx} article={x} />;
        })}
    </div>
  );
};

export default ArticlesTabContainer;
