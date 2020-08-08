import React from "react";
import "./Stepper.scss";
import { NavLink } from "react-router-dom";
import Level from "../Level/Level";

function Stepper({ answers, data }) {
  return (
    <div className="Stepper">
      {data.questions.map((ques) => (
        <NavLink activeClassName="Stepper-Performance" key={ques.id} to={`/question/${ques.id}`}>
          <Level answer={answers.find((item) => item.id === ques.id)} />
        </NavLink>
      ))}
    </div>
  );
}

export default Stepper;
