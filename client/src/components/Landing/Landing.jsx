import React from "react";
import { Link } from "react-router-dom";
import imgPacifica4 from './pacifica4.jpg';
import imgPacifica from './pacifica6.png'
import style from './Landing.module.css'

export default function Landing (){


    return (
        <div>
            <Link to={`/products/brands/${'pacifica'}`}>
            <img  className={style.img} src={imgPacifica} alt="Pacifica productos"/>
            <img className={style.img2} src={imgPacifica4} alt="Pacifica Pacifica"/>
         
            </Link>
        </div>
    )
} 















