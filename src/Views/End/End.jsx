import React from "react";
import "./End.scss";


function End({ data }) {

  return (
    <div className="end">
      <div className="end-title">
        <h1 className="end-title-text">با تشکر از وقتی که صرف پاسخگویی به سوالات کردید</h1>
        <div className="end-logo">
          <img src={data.logo_url} alt={"astro-logo"} height="100%" width="25%" />
          <h2 className="astro pr-3">آسترو</h2>
        </div>
        <div className="footer">
          <div class="footer-top">
            <div className="footer-top-logo">Soally</div>
            <span>قدرت گرفته از</span>
          </div>
          <span className="footer-text">آنلاین CRM پلتفرم طراحی فرم های</span>
        </div>
      </div>
    </div>
  );
}

export default End;
