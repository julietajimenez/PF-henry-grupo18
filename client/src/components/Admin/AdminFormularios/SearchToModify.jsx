import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../../redux/actions/ProductsActions";
import Loader from "../../Loader/Loader";



export default function SearchToModify (){
    const dispatch = useDispatch()
    const products = useSelector(state=> state.products.products)
    useEffect(()=>{
        dispatch(getAllProducts())
    }, [dispatch])

    if (products.length <= 0) {
        return <Loader />
      }
    return (
        <div style={{ minHeight: "80vh" }}> 
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