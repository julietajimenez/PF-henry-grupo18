import "./App.css";
import { useState, useEffect } from 'react'
import Catalogo from "./components/Catalogo/Catalogo.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import Cards from "./components/Cards/Cards";
import CarroCompras from "./components/CarroCompras/CarroCompras";
import Login from "./components/Login/Login";



function App() {

  const [cartItems, setCartItems] = useState(() => {

    
    try {
      const prodEnLocalStorage = localStorage.getItem("carrito")
      return prodEnLocalStorage ? JSON.parse(prodEnLocalStorage) : []
    } catch (error) {
      return [];
    }
  })

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(cartItems))
  }, [cartItems])
  

  const onAddCarrito = (product) => {
    console.log(product)
    const productAdd = cartItems.find(item => item.id === product.id)
    if(productAdd) {
      setCartItems(cartItems.map((item) => item.id === product.id ? {...productAdd, cantidad: productAdd.cantidad + 1} : item))
    } else {
      setCartItems([...cartItems, {...product, cantidad: 1}])
    }
  }

  const onRemoveCarrito = (product) => {
    const productRemove = cartItems.find( item => item.id === product.id)
    if(productRemove.cantidad !== 1) {
      setCartItems(cartItems.map( item => 
        item.id === product.id ? {...productRemove, cantidad: productRemove.cantidad -1} : item
      ))
    }
  }

  const onRemoveItemCarrito = (product) => {
    setCartItems(cartItems.filter(item => item.id !== product.id))
  }

  return (
    <div className="App">
      <Routes>
        <Route  path="/catalogo" element={<Catalogo onAddCarrito={onAddCarrito}/>} />
        <Route path="/card" element={<Cards />} />
        <Route path="/login" element={<Login />} />
        <Route  path="/carrito" element={<CarroCompras cartItems={cartItems} onAddCarrito={onAddCarrito} onRemoveCarrito={onRemoveCarrito} onRemoveItemCarrito={onRemoveItemCarrito} />} />

      </Routes>
    </div>
  );
}

export default App;
