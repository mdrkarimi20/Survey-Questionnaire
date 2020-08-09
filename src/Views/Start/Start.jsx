import React from "react";
import "./Start.scss";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';
import { CSSTransition } from "react-transition-group";

function Start({ data }) {

    return (
        <CSSTransition appear in classNames="page-transition" timeout={500}>
            <div className="Start">
                <div className="Start-title">
                    <h1 className="Start-title-text pb-3">فرم نظرسنجی و ارتقا سطح خدمت رسانی</h1>
                    <div className="logo">
                        <img src={data.logo_url} alt={"astro-logo"} height="100%" width="25%" />
                        <h2 className="astro pr-3">آسترو</h2>
                    </div>
                    <Link to={`/question/${data.questions[0].id}`}>
                        <Button className="button-start">شروع</Button>
                    </Link>
                    <div className="footer">
                        <div class="footer-top">
                            <div className="footer-top-logo">Soally</div>
                            <span>قدرت گرفته از</span>
                        </div>
                        <span className="footer-text">آنلاین CRM پلتفرم طراحی فرم های</span>
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
}

export default Start;
