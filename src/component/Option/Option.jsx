import React from "react";
import "./Option.scss";

function Option({ children, optionClickHandler, keyValue }) {
  return (
    <button onClick={() => optionClickHandler(keyValue)} className="Option">
      {children}
    </button>
  );
}

export default Option;
