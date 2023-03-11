import * as React from "react";
import style from "./style.module.css";

const Button = ({ title, className, onClick, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={[className, style.button].join(" ")}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
