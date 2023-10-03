import React from "react";

const HeaderBlock = ({ data }) => {
  return (
    <div className="es-av-content">
      <h2 className="es-av-heading">{data && data.text}</h2>
    </div>
  );
};

export default HeaderBlock;
