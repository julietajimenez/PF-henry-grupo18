import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  productById,
  removeDetail,
  pagesControl,
} from "../../redux/actions/ProductsActions";
import { getAllReview } from '../../redux/actions/ReviewsActions'
import styles from "./Detail.module.css";
import imgDefault from "./imageDefault.jpg";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector((state) => state.products.detail);
  const reviews = useSelector((state) => state.products.reviews);
  const page = useSelector((state) => state.products.pages);

  useEffect(() => {
    dispatch(productById(id));
    dispatch(getAllReview(id));
    return () => {
      dispatch(removeDetail());
    };
  }, [id]);

  
  console.log(reviews)
  return product.name ? (
    <div className={styles.container}>
      <div className={styles.description}>
        <h2>{product.name}</h2>
        {product.image ? (
          <img
            src={
              product.image ||
              "https://d3t32hsnjxo7q6.cloudfront.net/i/d03d4a62759d7805ff8b41caebb4cbb0_ra,w158,h184_pa,w158,h184.jpeg"
            }
            alt="nohayimagen"
          />
        ) : (
          <img style={{ height: "270px" }} src={imgDefault} />
        )}
        <h4>${product.price}USD</h4>

        <p>{product.description}</p>
        {product.stock < 2 ? <h4>¡Último producto disponible!</h4> : null}
        <button
          onClick={() => {
            navigate(-1);
            dispatch(pagesControl(page));
          }}
        >
          Volver
        </button>
      </div>
      <div>
        <h2>Reviews</h2>
        <div>
          {reviews ?
          reviews.sort((a, b) => {
            const aDate = new Date(a.createdAt);
            const bDate = new Date(b.createdAt);
            return bDate - aDate ;
          }) 
          .map((r) => {
            return <div className={styles.review}>
              <p>Rating: {r.rating}</p>
              <label>Comentario: </label>
              <p>{r.comment}</p>
              <p>De: {r.userEmail}</p>
            </div>
          }) : 'No hay reviews'}
        </div>
      </div>
    </div>
  ) : (
    <h1>CARGANDO...</h1>
  );
}
