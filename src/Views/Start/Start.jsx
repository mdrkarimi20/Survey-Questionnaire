import React from "react";
import "./Start.scss";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';
import { CSSTransition } from "react-transition-group";
import Logo from "../../component/Logo/Logo";
import Footer from "../../component/Footer/Footer";

function Start({data}) {

        return (
        <CSSTransition appear in classNames="page-transition" timeout={500}>
            <div className="Start">
                <div className="Start-title">
                    <h1 className="Start-title-text">فرم نظرسنجی و ارتقا سطح خدمت رسانی</h1>
                    <Logo logo_url={data.logo_url} />
                    <Link to={`/question/${data.questions[0].id}`}>
                        <Button className="button-start">شروع</Button>
                    </Link>
                    <Footer />
                </div>
            </div>
        </CSSTransition>
    );
}

export default Start;
