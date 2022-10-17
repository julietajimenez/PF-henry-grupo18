import React from 'react';
import style from './Error.module.css';
import img from './404.webp'
import { useNavigate } from 'react-router-dom';

function Error404() {
  const navigate = useNavigate()
  return (
    <>
    <img src={img} className={style.img}/>
    <button onClick={()=>navigate('/')} className={style.button}>GO TO MAIN</button>
    </>
  )
}

export default Error404