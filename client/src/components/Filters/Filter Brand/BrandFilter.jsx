 import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByBrand, removeFilters } from "../../../redux/actions/ProductsActions";

export default function BrandFiltered (props){
    const dispatch = useDispatch()
    const allProducts = useSelector(state=> state.products.allProducts)
    const products = useSelector(state=> state.products.products)

    

    const brands = [...new Set(allProducts.map(e=> e.brand))]
    function handleSelect(e){
        dispatch(filterByBrand(e.target.value))
        props.setCurrentPage(1)
        //props.setFilter(true)
    }
    function handleClick(){
        dispatch(removeFilters())
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