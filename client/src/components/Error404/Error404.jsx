import React from 'react';
import style from './Error.module.css';
import img from './404nuevo.jpg'
import { useNavigate } from 'react-router-dom';

function Error404() {
  const navigate = useNavigate()
  return (
    <div style={{ minHeight: '80vh'}}>
    <img src={img} className={style.img}/>
    </div>
  )
}

export default Error404