import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../redux/actions/ProductsActions";
import { getAllUsers } from "../../redux/actions/UsersAction";
import Landing from "../Landing/Landing";
import ControlledCarousel from "./Carrusel/Carrusel";
import CarruselCards from "./CarruselCards/CarruselCards";


export default function Home (props){
    const { onAddCarrito } = props;
    const dispatch= useDispatch()
    useEffect(()=>{
        dispatch(getAllUsers())
        
        dispatch(getAllProducts())
    },[dispatch])
    return (
        <>
            <ControlledCarousel onAddCarrito={onAddCarrito}/>
            <CarruselCards onAddCarrito={onAddCarrito}/>
            <Landing/>
        </>
    )
}