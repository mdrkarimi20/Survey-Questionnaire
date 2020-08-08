import React, { useState, useEffect } from "react";
import Load from "../../Views/Load/Load";
import "./Template.scss";

function Template({ children, data }) {
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoad(false);
    }, 3500);
  }, []);

  return <>
    {isLoad ? <Load data={data} /> : <div className="Template">{children}</div>}
  </>;
}

export default Template;
