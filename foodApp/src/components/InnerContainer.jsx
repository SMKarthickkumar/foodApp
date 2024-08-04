import React from "react";
import style from "./innercontainer.module.css";

const InnerContainer = ({ children }) => {
  return <div className={style.innerContainer}>{children}</div>;
};

export default InnerContainer;
