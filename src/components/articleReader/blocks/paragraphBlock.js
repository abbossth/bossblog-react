import React from "react";

const ParagraphBlock = ({ data }) => {
  return (
    <div className="es-av-content">
      <p className="es-av-text">{data && data.text}</p>
    </div>
  );
};

export default ParagraphBlock;
