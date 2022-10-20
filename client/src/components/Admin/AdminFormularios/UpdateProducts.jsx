import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getAllProducts, updateProducts } from '../../../redux/actions/ProductsActions';
import styles from './CreacionProductos.module.css'


function UpdateProducts() {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products.products)
  const { id } = useParams();

  const [input, setInput] = useState({
    name: products.name,
    brand: products.brand,
    price: products.price,
    stock: products.stock,
    image: products.image,
    description: products.description,
    active: products.active
  })

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  const handleActive = (e) => {
    setInput({
      ...input,
      active: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateProducts(id, input));
    alert("Producto actualizado");
    setInput({
      name: '',
      brand: '',
      price: '',
      stock: '',
      image: '',
      description: '',
      active: ''
    });
  };
  return (
    <div style={{ minHeight: "80vh" }} className={styles.flexContainer}>
      {
        products && products.map(e => {

          if (window.location.pathname === `/dashboard/products/update/${e.id}`) {
            return (
              <form autoComplete="off" autoCapitalize="on" onSubmit={(e) => { handleSubmit(e) }} className={styles.container}>
                <div className={styles.formInputs}>
                  <label>Nombre: </label>
                  <input type={'text'} name='name' value={input.name} defaultValue={e.name} onChange={handleChange} />
                </div>
                <div className={styles.formInputs}>
                  <label>Marca: </label>
                  <input type={'text'} name='brand' value={input.brand} defaultValue={e.brand} onChange={handleChange} />
                </div>
                <div className={styles.formInputs}>
                  <label>Precio: </label>
                  <input type={'text'} name='price' value={input.price} defaultValue={e.price} onChange={handleChange} />
                </div>
                <div className={styles.formInputs}>
                  <label>Stock: </label>
                  <input type={'text'} name='stock' value={input.stock} defaultValue={e.stock} onChange={handleChange} />
                </div>
                <div className={styles.formInputs}>
                  <label>Imagen: </label>
                  <input type={'text'} name='image' value={input.image} defaultValue={e.image} onChange={handleChange} />
                </div>
                <div className={styles.formInputs}>
                  <label>Descripción: </label>
                  <textarea type={'text'} name='description' value={input.description} defaultValue={e.description} onChange={handleChange} ></textarea>
                </div>
                <div className={styles.formInputs}>
                  <label>Estado: </label>
                  <label>Activo<input type={'radio'} name={'active'} value={true} onChange={(e) => handleActive(e)} defaultValue={e.active} /></label>
                  <label>Inactivo<input type={'radio'} name={'active'} value={false} onChange={(e) => handleActive(e)} defaultValue={e.active} /></label>
                </div> 
                <button className={styles.btnLogin} type="submit">
                  UPDATE
                </button>
              </form>
            )
          }
        })
      }
    </div>
  )
}


export default UpdateProducts