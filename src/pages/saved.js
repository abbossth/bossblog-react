import axios from "../api/axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ArticleCard from "../components/article-card";
import { useDispatch, useSelector } from "react-redux";
import savedArticleReducer from "../store/reducers/savedArticleReducer";

const Saved = () => {
  const { articles } = useSelector((state) => state.savedArticleReducer);
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(1);
  const dispatch = useDispatch();

  const fetchSavedArticles = async () => {
    try {
      const res = await axios.get(`/saved-posts`);
      dispatch(savedArticleReducer(res?.data));
    } catch (err) {
      console.log(`Unhandled Error in fetching articles ${err}`);
    }
  };

  useEffect(() => {
    fetchSavedArticles();
  }, []);


  const updateToggle = (id) => {
    setToggle(id);
  }

  const handleClick = (event) => {
    setActive(event.target.id);
  }

  console.log("articles", articles)

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
            className="nav nav-pills es-saved-last-tab"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item mr-2" role="presentation" onClick={() => updateToggle(1)}>
              <div
                className={active === "1" ? `es-saved-last-tab + nav-link + active` : "nav-link"}
                id={"1"}
                onClick={handleClick}
              >
                Saqlanganlar
              </div>
            </li>
            <li className="nav-item" role="presentation" onClick={() => updateToggle(2)}>
              <div
                className={active === "2" ? `es-saved-last-tab + nav-link + active` : "nav-link"}
                onClick={handleClick}
                id={"2"}
              >
                Oxirgi o’qilganlar
              </div>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className={toggle === 1 ? "show-tab-pane" : "tab-pane"}
              id="pills-saved"
            >
              <div className="es-article-list">
                {articles.map((x) => (
                  <ArticleCard key={"saved-topic-id-" + x.id} />
                ))}
              </div>
            </div>
            <div
              className={toggle === 2 ? "show-tab-pane" : "tab-pane"}
              id="pills-last"
            >
              <div className="es-article-list">
                <ArticleCard />
                <ArticleCard />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Saved;
