import React from "react";
import WritePanel from "../components/writePanel";

const WriteArticle = () => {
  return (
    <>
      <main>
        <section className="es-article-header es-regular-section">
          <div className="es-av-header">
            <div className="container">
              <div className="es-av-title">Maqola yozish</div>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Asosiy</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Maqola yozish
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </section>
        <section className="es-regular-section">
          <div className="container">
            <WritePanel />
          </div>
        </section>
      </main>
    </>
  );
};

export default WriteArticle;
