import React from "react";
import "./Load.scss";

function Load({ data }) {
  return (
    <div className="load">
      <div class="image-container">
        <img src={data.logo_url} alt={"astro"} />
      </div>
      <div class="text-container">
        <h1>آسترو</h1>
        <div class="fading-effect"></div>
      </div>
    </div>
  );
}

export default Load;
