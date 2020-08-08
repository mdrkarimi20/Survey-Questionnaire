import React, { useState, useEffect } from "react";
import "./Question.scss";
import { useParams, useHistory } from "react-router-dom";
import Stepper from "../../Components/Stepper/Stepper";
import Option from "../../Components/Option/Option";
import Brand from "../../Components/Brand/Brand";
import Intro from "../../Components/Intro/Intro";

function Survey({initialData, setNewAnswer, answers }) {
    const history = useHistory();
    const { id } = useParams();

    const [ques, setQues] = useState(data.questions.find((item) => item.id === id));
    const [quesIndex, setQuesIndex] = useState(data.questions.findIndex((item) => item.id === id));

    useEffect(() => {
        setQues(data.questions.find((item) => item.id === id));
        setQuesIndex(data.questions.findIndex((item) => item.id === id));
    }, [id]);

    const optionClickHandler = (key) => {
        setNewAnswer(id, key);
        if (data.questions[quesIndex + 1]) {
            history.push(`/question/${data.questions[quesIndex + 1].id}`);
        } else {
            history.push("/end");
        }
    };

    return (
        <div className="Question">
            <Stepper initialData={initialData} answers={answers} />
            <div className="Question__topic">
                <h1 className="Question__topic--title">{ques.text}</h1>
                <div className="Question__topic--options">
                    {ques.options.map((item) => (
                        <Option optionClickHandler={optionClickHandler} key={item.key} keyValue={item.key}>
                            {item.text}
                        </Option>
                    ))}
                </div>
            </div>
            <footer>
                <Intro />
                <Brand data={data} />
            </footer>
        </div>
    );
}

export default Survey;