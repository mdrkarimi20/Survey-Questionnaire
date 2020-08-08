import React, { useState, useEffect } from "react";
import "./Level.scss";

function Level({ answer }) {
  return <div className={answer.answer == null ? "Step" : "Step-done"}></div>;
}

export default Level;