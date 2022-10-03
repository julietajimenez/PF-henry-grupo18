import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../redux/actions/ProductsActions";
import Landing from "../Landing/Landing";
import Nav from "../Nav/Nav";
import ControlledCarousel from "./Carrusel/Carrusel";
import CarruselCards from "./CarruselCards/CarruselCards";


export default function Home (props){
    const { onAddCarrito } = props;
    const dispatch= useDispatch()
    useEffect(()=>{
        dispatch(getAllProducts())
    },[])
    return (
        <>
            {/* <Nav/> */}
            <ControlledCarousel onAddCarrito={onAddCarrito}/>
            <CarruselCards onAddCarrito={onAddCarrito}/>
            <Landing/>
        </>
    )
}