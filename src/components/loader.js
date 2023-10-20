import React from "react";
import { ReactComponent as LoaderSvg } from "../assets/img/loading.svg";

const Loader = () => {
  return (
    <div className="loader-outer-container">
      <div className="loader-container">
        <LoaderSvg />
      </div>
    </div>
  );
};

export default Loader;
