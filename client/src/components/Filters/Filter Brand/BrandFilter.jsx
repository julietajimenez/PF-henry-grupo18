 import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByBrand, removeFilters } from "../../../redux/actions/ProductsActions";
import style from './BrandFilter.module.css'

export default function BrandFiltered (props){
    const dispatch = useDispatch()
    const allProducts = useSelector(state=> state.products.allProducts)


    

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
    <button className={style.button} onClick={handleClick}>Limpiar filtros</button>
    </>
    )
} 