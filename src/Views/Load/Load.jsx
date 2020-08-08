import React from "react";
import "./Load.scss";

function Loading({ data }) {
  return (
    <div className="Load">
      <img src={data.logo_url} alt={"zemp-logo"} />
    </div>
  );
}

export default Loading;
