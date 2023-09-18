import React from "react";
import SearchIcon from "../assets/img/ic_search.svg";
import Newspaper from "../assets/img/ic_newspaper.svg";

const MobileSearch = () => {
  return (
    <main>
      <section className="es-article-header es-regular-section">
        <div className="es-av-header">
          <div className="container">
            <div className="es-av-title">Qidiruv</div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Asosiy</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Qidiruv
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
          <div>
            <div className="es-search-results">
              <div className="es-search-result">
               <div className="es-search-result-img">
                <a href="#">
                   <img
                     src={require("../assets/img/article_2.jpg")}
                     alt="article"
                   />
                 </a>
               </div>
                <div className="es-search-result-title">
                  <a href="#">
                  ChatGPT-dan UI/UX dizayneri sifatida qanday foydalanaman
                  </a>
                 </div>
              </div>
              <div className="es-search-result">
               <div className="es-search-result-img">
                <a href="#">
                   <img
                     src={require("../assets/img/article_2.jpg")}
                     alt="article"
                   />
                 </a>
               </div>
                <div className="es-search-result-title">
                  <a href="#">
                  ChatGPT-dan UI/UX dizayneri sifatida qanday foydalanaman
                  </a>
                 </div>
              </div>
              <div className="es-search-result">
               <div className="es-search-result-img">
                <a href="#">
                   <img
                     src={require("../assets/img/article_2.jpg")}
                     alt="article"
                   />
                 </a>
               </div>
                <div className="es-search-result-title">
                  <a href="#">
                  ChatGPT-dan UI/UX dizayneri sifatida qanday foydalanaman
                  </a>
                 </div>
              </div>
              <div className="es-search-result">
               <div className="es-search-result-img">
                <a href="#">
                   <img
                     src={require("../assets/img/article_2.jpg")}
                     alt="article"
                   />
                 </a>
               </div>
                <div className="es-search-result-title">
                  <a href="#">
                  ChatGPT-dan UI/UX dizayneri sifatida qanday foydalanaman
                  </a>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MobileSearch;
