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
console.log(product);
    useEffect(()=>{
        dispatch(productById(id))
        return ()=> {
            dispatch(removeDetail())
        }
    }, [id])
console.log(product);
    return (
        product.name? 
        <div>
            <h1>{product.name}</h1>
            <img src={product.image}/>
            <h4>${product.price} USD</h4>
            <h3>Descripción</h3>
            <span>{product.description}</span>
            {
                product.stock < 2 ? <h4>¡Último producto disponible!</h4> : null
            }
            <button onClick={()=>navigate( '/catalogo')}>Home</button> 
        </div> :
        <h1>CARGANDO...</h1>
    )
}