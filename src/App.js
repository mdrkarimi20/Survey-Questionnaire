import React, { useState, useEffect } from "react";
import './App.css';
import Start from "./Views/Start/Start";
import Survey from "./Views/Survey/Survey";
import Template from "./component/ShowPage/ShowPage";
import End from "./Views/End/End";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Container } from 'reactstrap';

function App() {

  const [initialData, setInitialData] = useState({
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
      text: "طراحی سایت چطور است؟",
      options: [
        { key: 1, text: "عالی" },
        { key: 2, text: "معمولی" },
        { key: 3, text: "بد" },
      ],
    },
    {
      id: "4",
      text: "شما جزو کدام دسته از مشتریان ما هستید؟",
      options: [
        { key: 1, text: "بلند مدت" },
        { key: 2, text: "میان مدت" },
        { key: 3, text: "کوتاه مدت" },
      ],
    },
    {
      id: "5",
      text: "از چه طریق با باشگاه مشتریان آسترو آشنا شدید؟؟",
      options: [
        { key: 1, text: "سایت شرکت" },
        { key: 2, text: "اینستاگرام شرکت" },
        { key: 3, text: "سایر" },
      ],
    },
    ],
  },
    {
      id: "6",
      text: "به طور کلی به باشگاه مشتریان آسترو چه امتیازی را می دهید؟",
      options: [
        { key: 1, text: "1" },
        { key: 2, text: "2" },
        { key: 3, text: "3" },
      ],
    }
  )
  const [answers, setAnswers] = useState([]);

  const setNewAnswer = (questionId, answer) => {
    let newAnswers = [...answers];
    newAnswers = newAnswers.map((item) => (item.id !== questionId ? item : { id: questionId, answer: answer }));
    setAnswers(newAnswers);
  };

  useEffect(() => {
    const emptyAnswer = initialData.questions.map((question) => {
      return { id: question.id, answer: null };
    });
    setAnswers(emptyAnswer);
  }, []);

  return (
    <div className='App'>
      <Container fluid={true} className="survey">
        <Router>
          <Template data={initialData}>
            <Switch>
              <Route exact path="/Survey-Questionnaire" >
                <Start data={initialData} />
              </Route>
              <Route exact path="/question/:id" >
                <Survey data={initialData} setNewAnswer={setNewAnswer} answers={answers} />
              </Route>
              <Route exact path="/end" >
                <End data={initialData} />
              </Route>
            </Switch>
          </Template>
        </Router>
      </Container>
    </div>
  );
}

export default App;
