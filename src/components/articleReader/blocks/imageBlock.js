import React from "react";

const ImageBlock = ({ data }) => {
  return (
    <div className="es-av-banner">
      {data && (
        <>
          <img
            className="img-fluid w-100"
            src={`${data?.file?.url}`}
            alt={`${data?.caption}`}
          />
        </>
      )}
      <p>{data.caption}</p>
    </div>
  );
};

export default ImageBlock;
