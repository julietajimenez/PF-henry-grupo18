import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
<<<<<<< HEAD
import { productById, removeDetail, pagesControl } from "../../redux/actions/ProductsActions";
import imgDefault from './imageDefault.jpg'

export default function Detail (){
    const {id} = useParams()
    const dispatch= useDispatch()
    const navigate = useNavigate()
    const product = useSelector(state=> state.products.detail)
    const page = useSelector(state=> state.products.pages)
console.log(page);
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
            { product.image? <img src={product.image} alt="nohayimagen" /> : <img style={{height:'270px'}} src={imgDefault}/>}
            <h4>${product.price}USD</h4>
            <h4>{product.description}</h4>
            {
                product.stock < 2 ? <h4>¡Último producto disponible!</h4> : null
            }
            <button onClick={()=>{
                                navigate(-1) 
                                dispatch(pagesControl(page))}}>Volver</button> 
        </div> :
        <h1>CARGANDO...</h1>
    )
}
=======
import {
  productById,
  removeDetail,
  pagesControl,
} from "../../redux/actions/ProductsActions";
import styles from "./Detail.module.css";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector((state) => state.products.detail);
  const page = useSelector((state) => state.products.pages);
  console.log(page);
  useEffect(() => {
    dispatch(productById(id));
    return () => {
      dispatch(removeDetail());
    };
  }, [id]);
  console.log(product);
  return product.name ? (
    <div className={styles.container}>
      <div className={styles.description}>
        <h2>{product.name}</h2>
        <img src={product.image} alt="Imagen del producto" />

        <p>{product.description}</p>
        {product.stock < 2 ? <h4>¡Último producto disponible!</h4> : null}
        <h3>{product.price}</h3>
        <button
          onClick={() => {
            navigate(-1);
            dispatch(pagesControl(page));
          }}
        >
          Volver
        </button>
      </div>
    </div>
  ) : (
    <h1>CARGANDO...</h1>
  );
}
>>>>>>> 3de8eed4453dc9228943161adce1fbf2e043efea
