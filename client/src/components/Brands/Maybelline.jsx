import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate} from "react-router-dom";
import {removeDetail, pagesControl, getProductsByBrand, getAllProducts } from "../../redux/actions/ProductsActions";
import Cards from "../Cards/Cards";

export default function Maybelline (props){

    const dispatch= useDispatch()
    const navigate = useNavigate()
    const product = useSelector(state=> state.products.allProducts)
    const page = useSelector(state=> state.products.pages)


    useEffect(()=>{
        dispatch(getProductsByBrand('maybelline'))
        return ()=> {
            dispatch(removeDetail())
        }
    }, [])
    const labiales = product.filter(e=>e.category === 'lipstick' && e.brand === 'maybelline')
    return (
        <div>
            {
                labiales?.map(e=> {
                    return (
                        <Cards
                        key={e.id}
                          id={e.id}
                          name={e.name}
                          image={e.image}
                          price={e.price}
                          category={e.category}
                          stock={e.stock}
                          onAddCarrito={props.onAddCarrito} 
                        />
                      );
                })
            }
            <button onClick={()=>{
                                navigate(-1) 
                                dispatch(pagesControl(page))}}>Volver</button> 
        </div>
    )
}