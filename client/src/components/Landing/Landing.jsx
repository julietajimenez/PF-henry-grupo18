import React from "react";
import { Link } from "react-router-dom";
import img from './fondo-landing.jpg';
import style from './Landing.module.css'

export default function Landing (){
    return (
        <div>
            <img className={style.img} src={img} alt='image' />
            <Link to='/home'>
                <button className={style.button}>Ingresar</button>
            </Link>
        </div>
    )
}