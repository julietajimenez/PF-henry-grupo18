import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  productById,
  removeDetail,
  pagesControl,
} from "../../redux/actions/ProductsActions";
import styles from "./Detail.module.css";
import imgDefault from './imageDefault.jpg'

<<<<<<< HEAD
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
        { product.image? <img src={product.image} alt="nohayimagen" /> : <img style={{height:'270px'}} src={imgDefault}/>}
            <h4>${product.price}USD</h4>

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
=======
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
>>>>>>> 7ef66a54fdf7e9e7cb13f24d34032f25305cabe9
