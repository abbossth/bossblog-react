import { isNull } from "lodash";
import axios from "../api/axios";
import React, { useEffect } from "react";
import { QUERY_TYPES } from "../utils/utils";
import ArticleCard from "../components/article-card";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { getSavedArticles } from "../store/actions/savedArticleAction";

const UserArticles = () => {
  const dispatch = useDispatch();
  const { articles } = useSelector((state) => state.savedArticleReducer);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryTab = searchParams.get("tab");

  const fetchMyArticles = async () => {
    try {
      const res = await axios.get(`/users/meposts`);
      dispatch(getSavedArticles(res?.data));
    } catch (err) {
      console.log(`Unhandled Error in fetching articles ${err}`);
    }
  };

  const fetchDraftArticles = async () => {
    try {
      const res = await axios.get(`/users/meposts?q=draft`);
      dispatch(getSavedArticles(res?.data));
    } catch (err) {
      console.log(`Unhandled Error in fetching articles ${err}`);
    }
  };

  const fetchModerationArticles = async () => {
    try {
      const res = await axios.get(`/users/meposts?q=deleted`);
      dispatch(getSavedArticles(res?.data?.data));
    } catch (err) {
      console.log(`Unhandled Error in fetching articles ${err}`);
    }
  };

  const setQuery = (value = null) => {
    if (value === QUERY_TYPES.DRAFT_POSTS) {
      setSearchParams({ tab: "draftPosts" });
    }
    if (value === QUERY_TYPES.MODERATION_POSTS) {
      setSearchParams({ tab: "moderationPosts" });
    }
    if (isNull(value)) {
      setSearchParams({});
    }
  };

  useEffect(() => {
    if (queryTab === null) {
      fetchMyArticles();
    }
    if (queryTab === QUERY_TYPES.DRAFT_POSTS) {
      console.log("Draft posts");
      fetchDraftArticles();
    }
    if (queryTab === QUERY_TYPES.MODERATION_POSTS) {
      console.log("Moderation posts");
      fetchModerationArticles();
    }
    console.log(queryTab);
  }, [queryTab]);

  console.log("articlesss", articles);
  return (
    <main>
      <section className="es-article-header es-regular-section">
        <div className="es-av-header">
          <div className="container">
            <div className="es-av-title">Maqolalar</div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="#">Asosiy</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Maqolalarim
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <section className="es-regular-section">
        <div className="container">
          <ul className="nav nav-pills es-saved-last-tab" id="pills-tab">
            <li className="nav-item" role="presentation">
              <div
                className={queryTab === null ? `nav-link active` : "nav-link"}
                onClick={() => setQuery()}
              >
                Chop etilganlar
              </div>
            </li>
            <li className="nav-item" role="presentation">
              <div
                className={
                  queryTab === QUERY_TYPES.DRAFT_POSTS
                    ? `nav-link active`
                    : "nav-link"
                }
                onClick={() => setQuery(QUERY_TYPES.DRAFT_POSTS)}
              >
                Qoralamalar
              </div>
            </li>
            <li className="nav-item" role="presentation">
              <div
                className={
                  queryTab === QUERY_TYPES.MODERATION_POSTS
                    ? `nav-link active`
                    : "nav-link"
                }
                onClick={() => setQuery(QUERY_TYPES.MODERATION_POSTS)}
              >
                Moderatsiyaga yuborilganlar
              </div>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-published">
              <div className="es-article-list">
                {articles &&
                  articles.map((x) => (
                    <ArticleCard key={"saved-topic-id-" + x.id} article={x} />
                  ))}
                {!articles?.length && (
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

export default UserArticles;
