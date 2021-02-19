import React from "react";
import "./Button.css";

const button = (props) => {
  let style = ["button"];
  return (
    <button
      className={style.concat(props.class).join(" ")}
      onClick={props.click}>
      {props.children}
    </button>
  );
};

export default button;
