 import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByBrand, getAllProducts } from "../../../redux/actions/ProductsActions";

export default function BrandFiltered (props){
    const dispatch = useDispatch()
    const products = useSelector(state=> state.products.allProducts)

    const brands = [...new Set(products.map(e=> e.brand))]
    function handleSelect(e){
        dispatch(filterByBrand(e.target.value))
        props.setCurrentPage(1)
        //props.setFilter(true)
    }
    function handleClick(){
        dispatch(getAllProducts())
    }
    return (
    <>
    <select onChange={(e)=> handleSelect(e)}>
        <option value={'all'}>Todas las marcas</option>
        {
            brands?.map(e=> {
                return (
                    <option value={e}>{e}</option>
                )
            })
        }
    </select>
    <button onClick={handleClick}>Limpiar filtros</button>
    </>
    )
} 