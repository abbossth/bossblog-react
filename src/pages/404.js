import React from "react";

const NotFound = () => {
  return (
    <main>
      <section className="es-regular-section es-404-section">
        <div className="container">
          <div className="es-404-container">
            <div className="es-404-img es-404-img-sm">
              <img
                className="img-fluid"
                src={require("../assets/img/404_banner.jpg")}
                alt="404"
              />
            </div>
            <div className="es-404-content">
              <div className="es-404-heading">Voy....</div>
              <div className="es-404-title">Sahifa topilmadi</div>
              <div className="es-404-desc">
                Bu sahifa mavjud emas yoki olib tashlangan! Bosh sahifaga
                qaytishingizni tavsiya qilamiz.
              </div>
              <a type="button" className="btn es-btn-primary es-btn-404">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.3337 6.1666H3.02539L7.09206 2.09993C7.41706 1.77493 7.41706 1.2416 7.09206 0.916602C6.76706 0.591602 6.24206 0.591602 5.91706 0.916602L0.425391 6.40827C0.100391 6.73327 0.100391 7.25827 0.425391 7.58327L5.91706 13.0749C6.24206 13.3999 6.76706 13.3999 7.09206 13.0749C7.41706 12.7499 7.41706 12.2249 7.09206 11.8999L3.02539 7.83327H12.3337C12.7921 7.83327 13.1671 7.45827 13.1671 6.99994C13.1671 6.5416 12.7921 6.1666 12.3337 6.1666Z"
                    fill="white"
                  />
                </svg>
                Bosh sahifaga qaytish
              </a>
            </div>
            <div className="es-404-img sm-hide">
              <img
                className="img-fluid"
                src={require("../assets/img/404_banner.jpg")}
                alt="404"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
