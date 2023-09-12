import React from "react";

const WriteArticle = () => {
  return (
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
    </main>
  );
};

export default WriteArticle;
