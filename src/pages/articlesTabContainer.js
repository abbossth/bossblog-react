import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import axios from "../api/axios";
import ArticleCard from "../components/article-card";
import { QUERY_TYPES } from "../utils/utils";
import {
  getForYouArticles,
  resetCurrentPage,
} from "../store/actions/forYouAction";

const ArticlesTabContainer = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { limit, currentPage, articles, pagination } = useSelector(
    (state) => state.forYouArticleReducer
  );
  const { token } = useSelector((state) => state.loginReducer);
  const tab = searchParams.get("tab");
  const topicId = searchParams.get("topic");
  const VALUE = useMemo(() => {
    return tab
      ? { type: QUERY_TYPES.TAB, tab }
      : topicId
      ? { type: QUERY_TYPES.TOPIC, id: topicId }
      : { type: QUERY_TYPES.TAB, tab };
  }, [tab, topicId]);
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
      dispatch(getForYouArticles(res?.data));
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
      dispatch(getForYouArticles(res?.data));
    } catch (err) {
      console.log("Unhandled Error in trending articles", err);
    }
  };

  const fetchTopicPosts = async (id) => {
    try {
      const res = await axios.get(
        `/topics/posts/${id}?limit=${limit}&page=${currentPage}`
      );
      dispatch(getForYouArticles(res?.data));
    } catch (err) {
      console.log(
        `Unhandled Error while Fetching Topic POSTs with ID: ${topicId}. Error: ${err}`
      );
    }
  };

  useEffect(() => {
    if (VALUE.type === QUERY_TYPES.TAB) {
      if (VALUE.tab === "following") {
        fetchPostFollows();
      }
      if (!VALUE.tab) {
        fetchForYou();
      } else {
        return;
      }
    } else if (VALUE.type === QUERY_TYPES.TOPIC) {
      fetchTopicPosts(VALUE.id);
    } else {
      console.log("ELSE", VALUE);
    }
    console.log(VALUE);
  }, [VALUE, currentPage]);

  useEffect(() => {
    dispatch(resetCurrentPage());
    console.log(pagination);
  }, [VALUE]);

  //   useEffect(() => {
  //     if (currentPage === 1 || currentPage !== pagination.page) {
  //       fetchArticles();
  //     }
  //   }, [currentPage]);

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
