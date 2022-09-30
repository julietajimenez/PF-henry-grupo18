import React from "react";
import img from './loader4.gif';
import style from './Loader.module.css'; 



export default function Loader(){
    return(
        <div>
            <img src={img} className={style.img}/> 
        </div>
    )
}