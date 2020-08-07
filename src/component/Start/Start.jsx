import React from "react";
import "./Start.scss";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';
import { CSSTransition } from "react-transition-group";

function Start({ data }) {

    const initialData = {
        organization_name: "",
        organization_name_fa: "زمپ",
        logo_url: "http://panahiazar.ir/images/zemp-logo.png",
        questions: [{
            id: "1",
            text: "سرعت اپلیکیشن ما را چگونه ارزیابی میکنید؟",
            options: [
                { key: 1, text: "خوب" },
                { key: 2, text: "متوسط" },
                { key: 3, text: "بد" },
            ],
        },
        {
            id: "2",
            text: "نظر شما راجب ظاهر اپلیکیشن چیست؟",
            options: [
                { key: 1, text: "زیبا" },
                { key: 2, text: "معمولی" },
                { key: 3, text: "زشت" },
            ],
        },
        {
            id: "3",
            text: "کارایی اپلیکیشن چطور است؟",
            options: [
                { key: 1, text: "خیلی خوب" },
                { key: 2, text: "قابل قبول" },
                { key: 3, text: "بسیار بد" },
            ],
        },
        {
            id: "4",
            text: "چه مدت است از سرویس ما استفاده میکنید؟",
            options: [
                { key: 1, text: "کمتر از ۱ ماه" },
                { key: 2, text: "بین ۱ ماه تا ۱ سال" },
                { key: 3, text: "بیش از ۱ سال" },
            ],
        },
        {
            id: "5",
            text: "آیا از خدمات ما راضی هستید؟",
            options: [
                { key: 1, text: "بله" },
                { key: 2, text: "تقریبا" },
                { key: 3, text: "خیر" },
            ],
        },
        {
            id: "6",
            text: "از چ طریقی با ما اشنا شدید؟",
            options: [
                { key: 1, text: "اینستاگرام" },
                { key: 2, text: "دوستان" },
                { key: 3, text: "تبلیغات" },
            ],
        },
        {
            id: "7",
            text: "آیا برنامه در دستگاه شما به خوبی اجرا میشود؟",
            options: [
                { key: 1, text: "بله" },
                { key: 2, text: "خیر" },
                { key: 3, text: "نمی دانم" },
            ],
        },
        {
            id: "8",
            text: "میزان حجم برنامه مناسب است؟",
            options: [
                { key: 1, text: "بله" },
                { key: 2, text: "تقریبا" },
                { key: 3, text: "خیر" },
            ],
        },
        {
            id: "9",
            text: "نوع فونت و سایز آن مناست است؟",
            options: [
                { key: 1, text: "بله" },
                { key: 2, text: "تقریبا" },
                { key: 3, text: "خیر" },
            ],
        },
        {
            id: "10",
            text: "درکل برنامه چگونه است؟",
            options: [
                { key: 1, text: "عالی" },
                { key: 2, text: "قابل قبول" },
                { key: 3, text: "افتضاح" },
            ],
        },
        ],
    };

    return (
        <CSSTransition appear in classNames="page-transition" timeout={500}>
            <div className="Start">
                <div className="Start-title">
                    <h1 className="Start-title-text">فرم نظرسنجی و ارتقا سطح خدمت رسانی</h1>
                    <div className="logo">
                        <img src={initialData.logo_url} alt={"astro-logo"} height="100%" />
                        <h2>آسترو</h2>
                    </div>
                    <Link to={`/question/${initialData.questions[0].id}`}>
                        <Button color="primary" className="btn btn-lg animated-button victoria-one">شروع</Button>
                    </Link>
                    <div className="Intro">
                        <div>
                            <div className="Intro-logo">Soally</div>
                            <span>قدرت گرفته از</span>
                        </div>
                        <span className="Intro__bottom">آنلاین CRM پلتفرم طراحی فرم های</span>
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
}

export default Start;
