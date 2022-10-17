import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getAllProducts, updateProducts } from '../../../redux/actions/ProductsActions';


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
    <div style={{ minHeight: "80vh" }}>
      {
        products && products.map(e => {

          if (window.location.pathname === `/dashboard/products/update/${e.id}`) {
            return (
              <form autoComplete="off" autoCapitalize="on" onSubmit={(e) => { handleSubmit(e) }}>
                <div>
                  <label>Nombre: </label>
                  <input type={'text'} name='name' value={input.name} defaultValue={e.name} onChange={handleChange} />
                </div>
                <div>
                  <label>Marca: </label>
                  <input type={'text'} name='brand' value={input.brand} defaultValue={e.brand} onChange={handleChange} />
                </div>
                <div>
                  <label>Precio: </label>
                  <input type={'text'} name='price' value={input.price} defaultValue={e.price} onChange={handleChange} />
                </div>
                <div>
                  <label>Stock: </label>
                  <input type={'text'} name='stock' value={input.stock} defaultValue={e.stock} onChange={handleChange} />
                </div>
                <div>
                  <label>Imagen: </label>
                  <input type={'text'} name='image' value={input.image} defaultValue={e.image} onChange={handleChange} />
                </div>
                <div>
                  <label>Descripción: </label>
                  <textarea type={'text'} name='description' value={input.description} defaultValue={e.description} onChange={handleChange} ></textarea>
                </div>
                <div>
                  <label>Estado: </label>
                  <label>Activo<input type={'radio'} name={'active'} value={true} onChange={(e) => handleActive(e)} defaultValue={e.active} /></label>
                  <label>Inactivo<input type={'radio'} name={'active'} value={false} onChange={(e) => handleActive(e)} defaultValue={e.active} /></label>
                </div> 
                <button className="submitButton" type="submit">
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