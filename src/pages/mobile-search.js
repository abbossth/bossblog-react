import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import SearchIcon from "../assets/img/ic_search.svg";

const MobileSearch = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const search = async () => {
      try {
        const res = await axios.get(
          `https://api.bossblog.uz/api/v1/posts/search?search=${searchTerm}`
        );
        setSearchResults(res?.data?.data.slice(0, 5));
        setError(null);
      } catch (error) {
        setError(error.response.statusText);
        console.log("error", error?.response?.statusText);
      }
    };

    if (searchTerm !== "") {
      search();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <main>
      <section className="es-article-header es-regular-section">
        <div className="es-av-header">
          <div className="container">
            <div className="es-av-title">Qidiruv</div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to={"/"}>Asosiy</Link>
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
              value={searchTerm}
              onChange={handleInputChange}
            />
          </form>
          {error && (
            <p className="es-search-error">
              {error === "Bad Request" ? "Topilmadi" : ""}
            </p>
          )}
          {!error && (
            <div>
              <div className="es-search-results">
                {searchResults.map((y) => (
                  <div className="es-search-result" key={y.id}>
                    <div className="d-flex mb-2">
                      <div className="es-search-result-img">
                        <Link to={`/article/${y?.id}`}>
                          {y?.image === "null" ? (
                            <img
                              src={require("../assets/img/article_2.jpg")}
                              alt="article"
                            />
                          ) : (
                            <img src={y?.image} alt="article" />
                          )}
                        </Link>
                      </div>
                      <div className="es-search-result-title">
                        <Link to={`/article/${y?.id}`}>{y.title}</Link>
                      </div>
                    </div>
                    <div className="es-search-result-footer">
                      <div className="es-article-type">
                        {moment(y.createdAt).format("ll")}
                      </div>
                      <button className="btn es-btn-light es-btn-save">
                        <svg
                          width="12"
                          height="16"
                          viewBox="0 0 12 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.166 0.5H1.83268C0.916016 0.5 0.166016 1.25 0.166016 2.16667V15.5L5.99935 13L11.8327 15.5V2.16667C11.8327 1.25 11.0827 0.5 10.166 0.5Z"
                            fill="#969696"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default MobileSearch;
