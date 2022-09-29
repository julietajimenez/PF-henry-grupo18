import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../../redux/actions/ProductsActions";



export default function SearchToModify (){
    const dispatch = useDispatch()
    const products = useSelector(state=> state.products.products)
    useEffect(()=>{
        dispatch(getAllProducts())
    }, [])
console.log(products);
    return (
        <div> 
             {
                products && products.map(e => {
                    return(
                        <Link to={e.id}>
                          <li>{e.name}</li>  
                        </Link>
                    )
                })
            } 
        </div>
    )
}