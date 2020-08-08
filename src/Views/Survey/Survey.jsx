import React, { useState, useEffect } from "react";
import "./Survey.scss";
import { useParams, useHistory } from "react-router-dom";
import Stepper from "../../component/Stepper/Stepper";
import Option from "../../component/Option/Option";
import Logo from "../../component/Logo/Logo";
import Footer from "../../component/Footer/Footer";

function Survey({ data, setNewAnswer, answers}) {
    const history = useHistory();
    const { id } = useParams();

    const [question, setQuestion] = useState(data.questions.find((item) => item.id === id));
    const [questionNumber, setQuestionNumber] = useState(data.questions.findIndex((item) => item.id === id));

    useEffect(() => {
        setQuestion(data.questions.find((item) => item.id === id));
        setQuestionNumber(data.questions.findIndex((item) => item.id === id));
    }, [id]);

    const optionClickHandler = (key) => {
        setNewAnswer(id, key);
        if (data.questions[questionNumber + 1]) {
            history.push(`/question/${data.questions[questionNumber + 1].id}`);
        } else {
            history.push("/end");
        }
    };

    return (
        <div className="Survey">
            <Stepper data={data} answers={answers} />
            <div className="Survey-title pt-5">
                <h1 className="Survey-title-text">{question.text}</h1>
                <div className="Survey-title-options py-5">
                    {question.options.map((item) => (
                        <Option optionClickHandler={optionClickHandler} key={item.key} keyValue={item.key}>
                            {item.text}
                        </Option>
                    ))}
                </div>
            </div>
            <footer>
                <Footer />
                <Logo logo_url={data.logo_url} />
            </footer>
        </div>
    );
}

export default Survey;