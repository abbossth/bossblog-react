import axios from "../api/axios";
import { Link, useSearchParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ArticleCard from "../components/article-card";
import { useDispatch, useSelector } from "react-redux";
import { getSavedArticles } from "../store/actions/savedArticleAction";
import { isNull } from "lodash";
import { QUERY_TYPES } from "../utils/utils";

const Saved = () => {
  const dispatch = useDispatch();
  const { articles } = useSelector((state) => state.savedArticleReducer);
  const [searchParams, setSearchParams] = useSearchParams();

  const fetchSavedArticles = async () => {
    try {
      const res = await axios.get(`/saved-posts/giveMine`);
      dispatch(
        getSavedArticles({
          posts: res?.data?.data,
          pagination: {
            page: "1",
            totalPages: 1,
            totalCount: res?.data?.data?.length,
          },
        })
      );
      console.log(res?.data?.data);
    } catch (err) {
      console.log(`Unhandled Error in fetching articles ${err}`);
    }
  };

  const fetchRecentArticles = async () => {
    try {
      const res = await axios.get(`/users/recentPosts`);
      dispatch(
        getSavedArticles({
          posts: res?.data?.data,
          pagination: {
            page: "1",
            totalPages: 1,
            totalCount: res?.data?.data?.length,
          },
        })
      );
      // console.log(res);
    } catch (err) {
      console.log(`Unhandled Error in fetching articles ${err}`);
    }
  };

  const queryTab = searchParams.get("tab");

  const setQuery = (value = null) => {
    if (value === QUERY_TYPES.RECENT_POSTS) {
      setSearchParams({ tab: "recentPosts" });
    }
    if (isNull(value)) {
      setSearchParams({});
    }
  };

  useEffect(() => {
    if (queryTab === null) {
      fetchSavedArticles();
    }
    if (queryTab === QUERY_TYPES.RECENT_POSTS) {
      console.log("Recent posts");
      fetchRecentArticles();
    }
    console.log(queryTab);
  }, [queryTab]);

  console.log("articles", articles);

  return (
    <main>
      <section className="es-article-header es-regular-section">
        <div className="es-av-header">
          <div className="container">
            <div className="es-av-title">Saqlangan maqolalar</div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to={"/"}>Asosiy</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Saqlanganlar va oxirgi o'qilganlar
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <section className="es-regular-section">
        <div className="container">
          <ul
            className="nav nav-pills es-saved-last-tab mb-2"
            id="pills-tab"
            role="tablist"
          >
            <li
              className="nav-item mr-2"
              role="presentation"
              onClick={() => setQuery()}
            >
              <div
                className={
                  queryTab === null
                    ? `es-saved-last-tab nav-link active`
                    : "nav-link"
                }
              >
                Saqlanganlar
              </div>
            </li>
            <li
              className="nav-item"
              role="presentation"
              onClick={() => setQuery(QUERY_TYPES.RECENT_POSTS)}
            >
              <div
                className={
                  queryTab === QUERY_TYPES.RECENT_POSTS
                    ? `es-saved-last-tab nav-link active`
                    : "nav-link"
                }
              >
                Oxirgi o’qilganlar
              </div>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div className={"show-tab-pane"} id="pills-saved">
              <div className="es-article-list">
                {articles &&
                  articles.map((x) => (
                    <ArticleCard key={"saved-topic-id-" + x.id} article={x} />
                  ))}
                {!articles.length && (
                  <p className="text-danger">
                    Saqlangan maqolalar topilmadi...
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Saved;
