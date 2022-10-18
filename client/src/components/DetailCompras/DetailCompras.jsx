import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  getCompraById, removeDetailCompra,
} from "../../redux/actions/ComprasAction";
import { getReviews } from '../../redux/actions/ReviewsActions'
import styles from "./DetailCompras.module.css";


export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const compraDetail = useSelector((state) => state.users.compraDetail);
  const reviews = useSelector((state) => state.products.reviews);
  const logueado = JSON.parse(localStorage.logueado);
  
  useEffect(() => {
    dispatch(getCompraById(id));
    dispatch(getReviews());
    return ()=>{
      dispatch(removeDetailCompra())
    }
  }, [id]);
  
  
  
  
  return compraDetail.products ? (
    <div className={styles.card}>
    <h2>CompraId: #{compraDetail.id}</h2>
    <h6>fecha: {compraDetail.createdAt}</h6>
    
    {compraDetail.products.map( p => {      
      
      const reviewsUser = reviews.filter(e => e.userEmail === logueado.email)
      const existeReview = reviewsUser?.find(e => e.productId === p.id)
      

        return <div className={styles.divProducto}>
            <div >
              <div >
                <p>{p.detalle_Compras.cantidad} x <strong>{p.name}</strong></p>
                <p>Precio: ${p.detalle_Compras.price}</p>
                <img src={p.image} alt="" />
              </div>
              {existeReview ? 
                <button className={styles.opinion} onClick={() => navigate(`/review/edit/${p.id}/${existeReview.id}`)}>Click aquí para dejar tu opinión sobre este producto</button>

             : 
                <button className={styles.opinion} onClick={() => navigate(`/review/${p.id}`)}>Click aquí para dejar tu opinión sobre este producto</button>
              }
            </div>
          </div>

})}
    <div >
      <h3 style={{margin:'20px'}}>TOTAL: ${compraDetail.total}</h3>
    </div>
    <div className={styles.button}>
    <Link className={styles.link} to="/miscompras">Volver</Link>
    </div>
</div>
) : (
    <>
      {console.log(compraDetail)}
      <h1>CARGANDO...</h1>
    </>
  );
}
