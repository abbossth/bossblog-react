import React from "react";
import SearchIcon from "../assets/img/ic_search.svg";

const Search = () => {
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
            <div className="es-sr-item">
              <div className="es-sr-content">
                <div className="es-sr-title">Dasturlash</div>
                <div className="es-sr-topic-follower">
                  Obunachilar: <span>1234</span>
                </div>
                <div className="es-sr-topic-stories">
                  Maqolalar: <span>777</span>
                </div>
                <button className="btn es-btn-primary">Obuna bo’lish</button>
              </div>
            </div>
            <div className="es-sr-item">
              <div className="es-sr-content">
                <div className="es-sr-title">Dasturlash</div>
                <div className="es-sr-topic-follower">
                  Obunachilar: <span>1234</span>
                </div>
                <div className="es-sr-topic-stories">
                  Maqolalar: <span>777</span>
                </div>
                <button className="btn es-btn-primary">Obuna bo’lish</button>
              </div>
            </div>
            <div className="es-sr-item">
              <div className="es-sr-content">
                <div className="es-sr-title">Dasturlash</div>
                <div className="es-sr-topic-follower">
                  Obunachilar: <span>1234</span>
                </div>
                <div className="es-sr-topic-stories">
                  Maqolalar: <span>777</span>
                </div>
                <button className="btn es-btn-primary">Obuna bo’lish</button>
              </div>
            </div>
            <div className="es-sr-item">
              <div className="es-sr-content">
                <div className="es-sr-title">Dasturlash</div>
                <div className="es-sr-topic-follower">
                  Obunachilar: <span>1234</span>
                </div>
                <div className="es-sr-topic-stories">
                  Maqolalar: <span>777</span>
                </div>
                <button className="btn es-btn-primary">Obuna bo’lish</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Search;
