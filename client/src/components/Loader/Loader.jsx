import React from "react";
import img from "./loader4.gif";
import style from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={style.container}>
      <img src={img} className={style.img} alt="Loader"/>
    </div>
  );
}
