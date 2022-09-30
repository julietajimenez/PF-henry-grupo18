import React from "react";
import { Link } from "react-router-dom";


export default function Nav (){
    return (
        <div>

            <Link to={"/carrito"}>Carrito</Link>
            <Link to={'/catalogo'}>Catalogo</Link>
            <Link to={'/login'}>Login</Link>
        </div>
    )
}