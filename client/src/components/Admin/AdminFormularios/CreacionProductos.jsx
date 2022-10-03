import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategorys } from "../../../redux/actions/CategorysActions";
import { postProducts } from "../../../redux/actions/ProductsActions";
import { useNavigate } from 'react-router-dom';
import styles from "./CreacionProductos.module.css";

function CreacionProductos() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const categories = useSelector((state) => state.categorys.categorys);
  const [input, setInput] = useState({
    name: "",
    brand: "",
    price: "",
    description: "",
    stock: "",
    image: "",
    category: "",
  });
  useEffect(() => {
    dispatch(getAllCategorys());
  }, []);
  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSelect(e){
    setInput({
        ...input,
        category: e.target.value
    })
}

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postProducts(input));
    alert("creado con exito");
    setInput({
      name: "",
      brand: "",
      price: "",
      description: "",
      stock: "",
      image: "",
      category: "",
    });
    navigate('/catalogo')
  }
  return (
    <div className={styles.flexContainer}>
      <form
        className={styles.container}
        autoComplete="off"
        autoCapitalize="on"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className={styles.formInputs}>
          <label>Nombre: </label>
          <input
          required
            type="text"
            name="name"
            value={input.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formInputs}>
          <label>Marca: </label>
          <input
          required
            type="text"
            name="brand"
            value={input.brand}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formInputs}>
          <label>Precio: </label>
          <input
          required
            type="text"
            name="price"
            value={input.price}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formInputs}>
          <label>Imagen: </label>
          <input
            type="text"
            name="image"
            value={input.image}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formInputs}>
          <label>Stock: </label>
          <input
            type="number"
            name="stock"
            value={input.stock}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formInputs}>
          <label>Descripción: </label>
          <textarea
            type="text"
            name="description"
            value={input.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className={styles.formInputs}>
          <select onChange={(e) => handleSelect(e)}>
            {categories &&
              categories.map((e) => {
                return <option value={e}>{e}</option>;
              })}
          </select>
        </div>
        <button className={styles.btnLogin} type="submit">
          ENVIAR
        </button>
      </form>
    </div>
  );
}

export default CreacionProductos;

/* import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllCategorys } from '../../../redux/actions/CategorysActions'
import { postProducts } from '../../../redux/actions/ProductsActions'

function CreacionProductos() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const categories = useSelector(state=> state.categorys.categorys)
    const [input, setInput] = useState({
        name: '',
        brand: '',
        price: '', 
        description: '',
        stock: '',
        image: '',
        category: ''
    })
useEffect(()=>{
    dispatch(getAllCategorys())
}, [])
function handleChange (e){
    setInput({
        ...input, 
        [e.target.name]: e.target.value
    })
}

function handleSelect(e){
    setInput({
        ...input,
        category: e.target.value
    })
}

function handleSubmit (e){
    e.preventDefault()
    dispatch(postProducts(input))
    console.log(input);
    alert('creado con exito')
    setInput({
        name: '',
        brand: '',
        price: '',
        description: '',
        stock: '',
        image: '',
        category: ''
      });
    navigate('/catalogo')
}
  return (
    <div>
        <form autoComplete="off" autoCapitalize="on" onSubmit={(e)=>handleSubmit(e)}>
           <div>
                <label>Nombre: </label>
                <input type='text' required name='name' value={input.name} onChange={handleChange} />
            </div> 
            <div>
                <label>Marca: </label>
                <input type='text' required name='brand' value={input.brand} onChange={handleChange} />
            </div> 
            <div>
                <label>Precio: </label>
                <input type='text' required name='price' value={input.price} onChange={handleChange} />
            </div> 
            <div>
                <label>Imagen: </label>
                <input type='text' name='image' value={input.image} onChange={handleChange} />
            </div> 
            <div>
                <label>Stock: </label>
                <input type='number' name='stock' value={input.stock} onChange={handleChange} />
            </div> 
            <div>
                <label>Descripción: </label>
                <textarea type='text' name='description' value={input.description} onChange={handleChange}></textarea>
            </div> 
             <div>
                <label>Categoria: </label>  
                <select onChange={(e)=>handleSelect(e)}>
                    {
                        categories && categories.map(e => {
                            return(
                                <option value={e}>{e}</option>
                            )
                        })
                    }
                </select>
            </div>  
            <button type='submit'>ENVIAR</button>
        </form> */