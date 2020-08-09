import React, { useState, useEffect } from "react";
import Load from "../../Views/Load/Load";
import "./ShowPage.scss";

function ShowPage({ children, data }) {
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoad(false);
    }, 3600);
  }, []);

  return <>
    {isLoad ? <Load data={data} /> : <div className="Template">{children}</div>}
  </>;
}

export default ShowPage;
