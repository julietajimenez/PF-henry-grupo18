import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategorys } from '../../../redux/actions/CategorysActions'
import { postProducts } from '../../../redux/actions/ProductsActions'

function CreacionProductos() {
    const dispatch = useDispatch()
    const categories = useSelector(state=> state.categorys.categorys)
    const [input, setInput] = useState({
        name: '',
        marca: '',
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
        category: [...new Set([...input.category, e.target.value])]
    })
}

function handleSubmit (e){
    e.preventDefault()
    dispatch(postProducts(input))
    alert('creado con exito')
    setInput({
        name: '',
        marca: '',
        price: '',
        description: '',
        stock: '',
        image: '',
        category: ''
      });
}
  return (
    <div>
        <form autoComplete="off" autoCapitalize="on" onSubmit={(e)=>handleSubmit(e)}>
           <div>
                <label>Nombre: </label>
                <input type='text' name='name' value={input.name} onChange={handleChange} />
            </div> 
            <div>
                <label>Marca: </label>
                <input type='text' name='marca' value={input.marca} onChange={handleChange} />
            </div> 
            <div>
                <label>Precio: </label>
                <input type='text' name='price' value={input.price} onChange={handleChange} />
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
        </form>
    </div>
  )
}

export default CreacionProductos
