import React from 'react';
import "./Logo.scss";

function Logo({ logo_url }) {
    return (
        <div className="logo">
            <img src={logo_url} alt={"astro-logo"} height="100%" />
            <h2 className="astro">آسترو</h2>
        </div>
    )
}

export default Logo;
