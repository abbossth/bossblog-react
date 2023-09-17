import React from "react";
import SearchIcon from "../assets/img/ic_search.svg";
import Add from "../assets/img/ic_add (2).svg";

const Topics = () => {
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
                <button className="btn es-btn-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                  </svg>
                  Obuna bo’lish
                </button>
              </div>
            </div>
            <div className="es-sr-item">
              <div className="es-sr-content">
                <div className="es-sr-title">Dasturlash</div>
                <button className="btn es-btn-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                  </svg>
                  Obuna bo’lish
                </button>
              </div>
            </div>
            <div className="es-sr-item">
              <div className="es-sr-content">
                <div className="es-sr-title">Dasturlash</div>
                <button className="btn es-btn-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                  </svg>
                  Obuna bo’lish
                </button>
              </div>
            </div>
            <div className="es-sr-item">
              <div className="es-sr-content">
                <div className="es-sr-title">Dasturlash</div>
                <button className="btn es-btn-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                  </svg>
                  Obuna bo’lish
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Topics;
