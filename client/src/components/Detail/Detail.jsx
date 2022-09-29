import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { productById, removeDetail } from "../../redux/actions/ProductsActions";

export default function Detail (){
    const {id} = useParams()
    const dispatch= useDispatch()
    const navigate = useNavigate()
    const product = useSelector(state=> state.products.detail)
//console.log(product);
    useEffect(()=>{
        dispatch(productById(id))
        return ()=> {
            dispatch(removeDetail())
        }
    }, [id])

    return (
        product.name? 
        <div>
            <h1>{product.name}</h1>
            <img src={product.image}/>
            <h4>{product.price}</h4>
            <h4>{product.description}</h4>
            <h4>{product.rating}</h4>
            {
                product.stock === 0 ? <h4>Sin stock</h4> : product.stock === 1 ? <h4>¡Último producto disponible!</h4> : null
            }
            <button onClick={()=>navigate(-1)}>Home</button> 
        </div> :
        <h1>CARGANDO...</h1>
    )
}