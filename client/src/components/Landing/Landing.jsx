import React from "react";
import { Link } from "react-router-dom";
import imgPacifica4 from "./pacifica4.jpg";
import imgPacifica from "./pacifica6.png";
import style from "./Landing.module.css";
import { useEffect } from "react";
import { UserAuth } from "../../context/authContext";

export default function Landing() {
  const { logOut } = UserAuth();

  useEffect(() => {
    logOut();
  }, []);

  return (
    <div>
      <Link to={`/products/brands/${"pacifica"}`}>
        <img className={style.img} src={imgPacifica} />
        <img className={style.img2} src={imgPacifica4} />
      </Link>
    </div>
  );
}
