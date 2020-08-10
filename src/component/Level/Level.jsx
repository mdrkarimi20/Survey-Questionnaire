import React from "react";
import "./Level.scss";

function Level({ answer }) {
  return <div className={answer.answer == null ? "Level" : "Level-done"}></div>;
}

export default Level;