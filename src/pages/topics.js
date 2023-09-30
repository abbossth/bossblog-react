import React, { useEffect } from "react";
import SearchIcon from "../assets/img/ic_search.svg";
import Add from "../assets/img/ic_add (2).svg";
import axios from "../api/axios";
import { useDispatch, useSelector } from "react-redux";
import { getTopics } from "../store/actions/topicsAction";
import { showAuthSignInOptions } from "../store/actions/modalAction";
import { Link } from "react-router-dom";
import { getFollowTopics } from "../store/actions/followTopicsAction";

const Topics = () => {
  const dispatch = useDispatch();
  const { topics } = useSelector((state) => state.topicsReducer);
  const { loggedIn } = useSelector((state) => state.loginReducer);
  const { followTopics } = useSelector((state) => state.followTopicsReducer);

  const fetchFollowingTopics = async () => {
    try {
      const res = await axios.get(`/follow-topic`);
      console.log("follow-topic", res?.data?.data);
      dispatch(getFollowTopics(res?.data?.data));
    } catch (err) {
      console.log(`Unhandled Error While Fetching Follow Topics ${err}`);
    }
  };

  const handleFollowTopic = async (topicId) => {
    try {
      const res = await axios.get(`/follow-topic/${topicId}`);
      fetchFollowingTopics();
    } catch (err) {
      console.log(
        `Unhandled Error while following topic with ID: ${topicId}. Error: ${err}`
      );
    }
  };
  const handleUnfollowTopic = async (topicId) => {
    try {
      const res = await axios.delete(`/follow-topic/${topicId}`);
      fetchFollowingTopics();
    } catch (err) {
      console.log(
        `Unhandled Error while unfollowing topic with ID: ${topicId}. Error: ${err}`
      );
    }
  };

  const fetchTopics = async () => {
    try {
      const res = await axios.get(`/topics`);
      dispatch(getTopics(res?.data?.data));
    } catch (err) {
      console.log(`Unhandled Error While Fetching Topics ${err}`);
    }
  };
  useEffect(() => {
    fetchTopics();
  }, []);

  const handleShowSignInOptions = () => {
    dispatch(showAuthSignInOptions());
  };

  return (
    <main>
      <section className="es-article-header es-regular-section">
        <div className="es-av-header">
          <div className="container">
            <div className="es-av-title">Explore topics</div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Search
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <section className="es-regular-section">
        <div className="container">
          <form className="form-group es-form-search">
            <img src={SearchIcon} alt="search" />
            <input
              className="form-control"
              type="search"
              placeholder="Qidiruv"
              aria-label="Search"
            />
          </form>
          <div className="es-search-recommended">
            Tavsiya etiladi:
            <a href="#">dasturlash</a>
            <a href="#">san'at</a>
            <a href="#">madaniyat</a>
          </div>
        </div>
      </section>
      <section className="es-regular-section">
        <div className="container">
          <div className="es-sr-list">
            {topics &&
              topics?.map((t, idx) => {
                return (
                  <div className="es-sr-item" key={`topic-item-${idx}`}>
                    <div className="es-sr-content">
                      <div className="es-sr-title">
                        <Link to={`/topics/${t.id}`}>{t.name}</Link>
                      </div>
                      {followTopics.find((f) => f.id === t.id) ? (
                        <button
                          className="btn es-btn-primary-outline"
                          onClick={
                            loggedIn
                              ? () => handleUnfollowTopic(t.id)
                              : handleShowSignInOptions
                          }
                        >
                          Obuna bo’lingan
                        </button>
                      ) : (
                        <button
                          className="btn es-btn-primary"
                          onClick={
                            loggedIn
                              ? () => handleFollowTopic(t.id)
                              : handleShowSignInOptions
                          }
                        >
                          Obuna bo’lish
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Topics;
