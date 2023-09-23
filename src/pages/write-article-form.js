import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  changeTitleAndSubtitle,
  resetDraft,
} from "../store/actions/writtenDraftAction";
import Select from "react-select";
import axios from "../api/axios";

const WriteArticleForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [topic, setTopic] = useState([]);
  const [topicOptions, setTopicOptions] = useState([]);
  const { title, image, sub_title, post_id } = useSelector(
    (state) => state.writtenDraftReducer
  );
  const { userInfo } = useSelector((state) => state.userInfoReducer);
  const [articleTitle, setArticleTitle] = useState("");
  const [articleSubtitle, setArticleSubtitle] = useState("");
  const [articleImage, setArticleImage] = useState("");
  const { topics } = useSelector((state) => state.topicsReducer);

  const handleTitleChange = (e) => {
    setArticleTitle(e.target.value);
  };

  const handleSubtitleChange = (e) => {
    setArticleSubtitle(e.target.value);
  };

  const handleTopicChange = (e) => {
    let topics = [];
    e.forEach((s) => topics.push(s.value));
    setTopic(topics);
  };

  const postPostTopics = async () => {
    try {
      const res = await axios.post(`/post-topic`, {
        post_id,
        topics: topic,
      });
      console.log("Post Topics added", res);
    } catch (err) {
      console.log(`Unhandled Error while posting post topics ${err}`);
    }
  };

  const publishPost = async () => {
    try {
      const res = await axios.patch(`/posts/${post_id}`, {
        status: "published",
      });
      console.log("Published: ", res);
      dispatch(resetDraft());
      navigate("/", { replace: true });
    } catch (err) {
      console.log(`Unhandled Error while publishing post ${err}`);
    }
  };

  const handlePublishPost = () => {
    if (
      window.confirm("Siz haqiqatdan ham maqolani chop etishni xohlaysizmi?")
    ) {
      publishPost();
    }
  };

  const handleSaveDraft = () => {
    if (
      window.confirm("Siz haqiqatdan ham qoralamani saqlashni xohlaysizmi?")
    ) {
      dispatch(resetDraft());
      navigate("/", { replace: true });
    }
  };

  useEffect(() => {
    if (post_id) {
      postPostTopics();
    }
  }, [topic, post_id]);

  useEffect(() => {
    let ts = [];
    topics.forEach((s) => {
      return ts.push({
        ...s,
        value: s.id,
        label: s.name,
      });
    });
    setTopicOptions(ts);
  }, [topics]);

  useEffect(() => {
    setArticleTitle(title);
    setArticleSubtitle(sub_title);
    setArticleImage(image);
  }, [title, image, sub_title]);

  useEffect(() => {
    if (articleSubtitle !== "" || articleTitle !== "") {
      if (articleTitle !== title || articleSubtitle !== sub_title)
        dispatch(changeTitleAndSubtitle(articleTitle, articleSubtitle));
    }
  }, [articleTitle, articleSubtitle]);

  return (
    <main>
      <section className="es-regular-section es-article-form">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-md-12 col-sm-12">
              <div className="form-group es-ar-form">
                <label for="articleImage">Hikoyani oldindan ko'rish</label>
                <div className="es-article-img-wrp">
                  <img
                    className="img-fluid"
                    src={
                      articleImage
                        ? `${articleImage}`
                        : require("../assets/img/banner_profile.jpg")
                    }
                    alt="article"
                  />
                </div>
              </div>
              <div className="form-group es-ar-form">
                {/* <label for="es-article-select" className="es-article-select">
                  Sarlavha
                </label> */}
                <input
                  type="email"
                  className="form-control es-ar-title"
                  id="es-article-select"
                  aria-describedby="es-about-select"
                  placeholder="Sarlavhani kiriting..."
                  value={articleTitle}
                  onChange={handleTitleChange}
                />
                <input
                  type="email"
                  className="form-control es-ar-subtitle"
                  id="es-article-select"
                  aria-describedby="es-about-select"
                  placeholder="Tavsifni kiriting..."
                  value={articleSubtitle}
                  onChange={handleSubtitleChange}
                />
                <small id="es-about-select" className="form-text">
                  Eslatma: Bu yerdagi oʻzgarishlar sizning hikoyangizning
                  ommaviy joylarda, masalan, Medium bosh sahifasida va
                  obunachilarning kirish qutilarida qanday koʻrinishiga taʼsir
                  qiladi, bu hikoyaning oʻziga emas.
                </small>
              </div>
            </div>
            <div className="col-xl-5 col-md-12 col-sm-12">
              <div className="es-article-writer-info">
                Nashriyot: <span> {userInfo && userInfo.full_name}</span>
              </div>
              <div className="input-group es-af-input-group">
                <small
                  id="es-about-ar-key"
                  className="form-text es-about-ar-key"
                >
                  {" "}
                  Mavzularni qo'shing yoki o'zgartiring (3 tagacha) o'quvchilar
                  hikoyangiz nima haqida ekanligini bilishlari uchun
                </small>
                <div>
                  <label for="articleImage" className="fw-bold mb-1">
                    Mavzu tanlang <span className="text-danger">*</span>
                  </label>
                </div>
                <div className="d-flex">
                  <Select
                    defaultValue={[topicOptions[0]]}
                    isMulti
                    options={topicOptions}
                    className="basic-multi-select w-100"
                    classNamePrefix="select"
                    onChange={handleTopicChange}
                    isOptionDisabled={() => topic.length >= 3}
                    onBlur={(e) => {
                      if (topic === null) return setTopic([]);
                    }}
                  />
                </div>
              </div>
              <div className="es-article-form-btn">
                <button
                  onClick={handleSaveDraft}
                  className="btn es-btn-save es-btn-ar-form"
                >
                  Saqlash
                </button>
                <button
                  className="btn es-profile-save es-btn-ar-form"
                  onClick={handlePublishPost}
                >
                  Chop etish
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WriteArticleForm;
