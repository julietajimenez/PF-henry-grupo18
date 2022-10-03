/* import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllCategorys} from '../../redux/actions/CategorysActions'


export default function OtroFiltro (props){
    const dispatch = useDispatch()
    const [filtro, setFiltro] = useState({
        brand: '',
        category: ''
    })
    useEffect(() => {
        dispatch(getAllCategorys(filtro));
      }, [dispatch, filtro]);
    
    const products = useSelector(state=> state.products.allProducts)
    const categorys = useSelector((state) => state.categorys.allCategorys);
    const setBrand = [...new Set(products.map(e=> e.brand))];

    const handleSelectBrands = (e) => {
        e.preventDefault(e);
        setFiltro({
          ...filtro,
          brand: e.target.value,
        });
        props.setCurrentPage(1)
        console.log(e.target.value);
      };

      const handleSelectCategory = (e) => {
        e.preventDefault(e);
        setFiltro({
          ...filtro,
          category: e.target.value,
        });
        props.setCurrentPage(1)
        console.log(e.target.value);
      };


    return (
        <div>
            <select onClick={(e)=>handleSelectBrands(e)}>
                <option>Marcas</option>
            {
                setBrand?.map(e => {
                    return(
                                <option value={e}>{e}</option>
                    )
                })
            }
            </select>
            <select onClick={(e)=>handleSelectCategory(e)}>
                {
                    categorys?.map(e => {
                        return (
                            <option value={e} key={e}>{e}</option>
                        )
                    })
                }
            </select>
           <button type="submit">Aplicar filtro</button> 
        </div>
    )
}  */