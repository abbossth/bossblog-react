import React, { useState } from "react";
import Icon from "../assets/img/ic_topic.svg";
import Time from "../assets/img/ic_time.svg";
import Seen from "../assets/img/ic_seen.svg";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
import ArticleCard from "../components/article-card";

const Topic = () => {
  const [topic, setTopic] = useState(null);
  const [topicPosts, setTopicPosts] = useState(null);
  const { topicId } = useParams();

  const fetchTopic = async () => {
    try {
      const res = await axios.get(`/topics/${topicId}`);
      setTopic(res?.data?.data?.items);
      console.log(res?.data?.data?.items);
    } catch (err) {
      console.log(
        `Unhandled Error while Fetching Topic with ID: ${topicId}. Error: ${err}`
      );
    }
  };

  const fetchTopicPosts = async () => {
    try {
      const res = await axios.get(`/topics/posts/${topicId}`);
      setTopicPosts(res?.data?.posts);
      console.log(res?.data?.posts);
    } catch (err) {
      console.log(
        `Unhandled Error while Fetching Topic POSTs with ID: ${topicId}. Error: ${err}`
      );
    }
  };

  useState(() => {
    fetchTopic();
    fetchTopicPosts();
  }, [topicId]);

  return (
    <main>
      <section className="es-regular-section">
        <div className="container">
          <div className="es-topic-wrp">
            <div className="es-topic-hl-wrp">
              <h1 className="es-topic-title">
                <img src={Icon} alt="topic" /> {topic && topic.name}
              </h1>
              <button className="btn es-btn-primary me-2">Kuzatish</button>
              <button className="btn es-btn-primary">Yozishni boshlash</button>
            </div>
            <div className="es-topic-hr-wrp">
              <div className="d-flex">
                <div className="es-profile-aricles">
                  <div className="es-profile-ar-h">Hikoyalar</div>
                  <div className="es-profile-ar-n">
                    {topic && topic?.post_count}
                  </div>
                </div>
                <div className="es-profile-followers">
                  <div className="es-profile-ar-h">Yozuvchilar</div>
                  <div className="es-profile-ar-n">
                    {topic && topic?.user_count}
                  </div>
                </div>
              </div>
              <div className="es-topic-followers-img">
                {/* {topic &&
                  topic?.users?.map((user) => {
                    return (
                      <div
                        style={{ backgroundImage: `${user?.image}!important` }}
                        className="es-topic-follower-img"
                      >
                        <img src={`${user?.image}`} alt={user?.name} />
                      </div>
                    );
                  })} */}
                <div className="es-topic-follower-img"></div>
                <div className="es-topic-follower-img"></div>
                <div className="es-topic-follower-img"></div>
                <div className="es-topic-follower-img"></div>
                <div className="es-topic-follower-img"></div>
                <div className="es-topic-follower-img"></div>
                <div className="es-topic-follower-img"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="es-regular-section">
        <div className="container">
          <div className="es-article-list">
            {topicPosts &&
              topicPosts.map((x, idx) => {
                return <ArticleCard key={"topic-" + idx} article={x} />;
              })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Topic;
