import React from "react";

import { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from 'react-router-dom';
import { postReview } from "../../redux/actions/ReviewsActions";
import { useParams } from 'react-router-dom';

import UserContext from "../../context/userContext";
import styles from "./review.module.css";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";



function Review() {

    const { id } = useParams();
    
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {logueado, setlogueado} = useContext(UserContext)

    const [errors, setErrors] = useState({});
    
    const [rating, setRating] = useState(5);
    const [hover, setHover] = useState(0);

    const [input, setInput] = useState({
        idProduct: id,
        comment: 'Espectacular',
        userEmail: logueado.email,
        rating: 5
    });



  function handleSubmit(e) {
    e.preventDefault();

      dispatch(postReview(input));
      /* Swal.fire({
        position: "bottom-start",
        icon: "success",
        title: "Gracias por su opinion",
        showConfirmButton: false,
        timer: 1500,
      }); */
      toast("Gracias por su opinion", {
        icon: '👏',
      });
      setInput({
          comment: 'Espectacular',
          rating: 5
      });
      if(input.rating === 1) {
        alert("Por favor, comentenos un poco mas sobre el producto");
        navigate('/contacto/' + id)
      } else {
        navigate('/products/' + id)
      }

  }

  const handleRating = (index) => {
    setRating(index)
  }

  const handleSelect = (e) => {
    
    let rating = 0
    if(e.target.value === 'Espectacular') {
      rating = 5
    }
    if(e.target.value === 'Excelente relacion precio-calidad') {
      rating = 4
    }
    if(e.target.value === 'Regular') {
      rating = 3
    }
    if(e.target.value === 'Malo') {
      rating = 1
    }
    
    setInput({
      ...input,
      comment: e.target.value,
      rating: rating
    })
    handleRating(rating)
  }
  
  return (
    <div className={styles.flexContainer}>
        
      <form
        className={styles.container}
        autoComplete="off"
        autoCapitalize="on"
        onSubmit={(e) => handleSubmit(e)}
        >
        <h1>¿Qué te pareció tu producto?</h1>

        <div className={styles.formInputs}>
          <label>Dejanos tu opinion: </label>
          <select onChange={handleSelect}>
            <option value='Espectacular'>Espectacular</option>
            <option value='Excelente relacion precio-calidad'>Excelente relacion precio-calidad</option>
            <option value='Regular'>Regular</option>
            <option value='Malo'>Malo</option>

            
          </select>
        </div>

        
        <div >
        {[...Array(5)].map((star, index) => {
            index += 1;
            return (
            <button
                type="button"
                key={index}
                className={index <= (hover || rating) ? styles.on : styles.off}
                
    
            >
                <span className={styles.star}>&#9733;</span>
            </button>
            );
        })}
        {errors.rating && <p className={styles.error}>{errors.rating}</p>}
        </div>



        <button className={styles.btnLogin} type="submit">
          ENVIAR
        </button>
      </form>

      <Toaster
      position="top-center"
      reverseOrder={true}
       />
    </div>

  );
}

export default Review;