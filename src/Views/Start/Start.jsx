import React from "react";
import "./Start.scss";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';
import { CSSTransition } from "react-transition-group";
import Logo from "../../component/Logo/Logo";
import Footer from "../../component/Footer/Footer";

function Start() {

    const initialData = {
        organization_name: "",
        organization_name_fa: "زمپ",
        logo_url: "http://mohammadreza-karimi.ir/image/3410491.png",
        questions: [{
            id: "1",
            text: "چقدر از امکانات سایت راضی هستید؟",
            options: [
                { key: 1, text: "زیاد" },
                { key: 2, text: "متوسط" },
                { key: 3, text: "کم" },
            ],
        },
        {
            id: "2",
            text: "میزات تعامل شما با سایت چقدر است؟",
            options: [
                { key: 1, text: "زیاد" },
                { key: 2, text: "متوسط" },
                { key: 3, text: "کم" },
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
                    <Logo logo_url={initialData.logo_url} />
                    <Link to={`/question/${initialData.questions[0].id}`}>
                        <Button className="button-start">شروع</Button>
                    </Link>
                    <Footer />
                </div>
            </div>
        </CSSTransition>
    );
}

export default Start;
