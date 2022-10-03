import React from "react";
import { Link } from "react-router-dom";
import img from './pacifica5.jpg';
import imgPacifica4 from './pacifica4.jpg';
import imgLoreal from './loreal.jpg';
import imgLoreal2 from './loreal2.jpg';
import imgPacifica from './pacifica6.png'
import style from './Landing.module.css'
import Cards from "../Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductsByBrand } from "../../redux/actions/ProductsActions";

export default function Landing (){
const dispatch = useDispatch()


/* useEffect(()=>{
    dispatch(getProductsByBrand('pacifica'))
}, [])  */

    return (
        <div>
            <Link to={`/products/brands/${'pacifica'}`}>
            <img  className={style.img} src={imgPacifica}/>
            <img className={style.img2} src={imgPacifica4} />
         
            </Link>
        </div>
    )
} 















           {/*  <img className={style.img3} src={imgLoreal} /> */}
           {/*  <Cards
                  id={"ab0f3caa-ef0c-4ef6-96c1-96d03e554825"}
                  name={"L'Oreal Color Riche Extraordinaire Lip Color"}
                  image={
                      "https://d3t32hsnjxo7q6.cloudfront.net/i/739bc21253ce772c2b2e7ad40d9d3f44_ra,w158,h184_pa,w158,h184.jpeg"}
                  price={"13.96"}
                  category={"lipstick"}
                  stock={140}
                  onAddCarrito={onAddCarrito}
                /> */}
{/*                       <img className={style.img3} src={imgLoreal2} />
            <Link to='/products/fa211e69-d5e6-4683-b97c-d99ebf74189c'>
                <img src={img} className={style.img} alt='image'/>
            </Link>
            <img src={img2} className={style.img2} alt='image'/>  */}