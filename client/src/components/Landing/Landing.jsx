import React from "react";
import { Link } from "react-router-dom";
import img from "./pacifica5.jpg";
import imgPacifica4 from "./pacifica4.jpg";
import imgLoreal from "./loreal.jpg";
import imgLoreal2 from "./loreal2.jpg";
import imgPacifica from "./pacifica6.png";
import style from "./Landing.module.css";
import Cards from "../Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductsByBrand } from "../../redux/actions/ProductsActions";
import { UserAuth } from "../../context/authContext";

export default function Landing() {
  const { logOut } = UserAuth();
  const dispatch = useDispatch();

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
