import "./App.css";
import { useState, useEffect } from 'react'
import Catalogo from "./components/Catalogo/Catalogo.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import Cards from "./components/Cards/Cards";
import CarroCompras from "./components/CarroCompras/CarroCompras";
import Login from "./components/Login/Login";


import CreacionCategorias from "./components/Admin/AdminFormularios/CreacionCategorias";
import CreacionProductos from "./components/Admin/AdminFormularios/CreacionProductos";
import UpdateUsuarios from "./components/Admin/AdminFormularios/UpdateUsuarios";
import UpdateUsers from "./components/Admin/AdminFormularios/UpdateUsers";
import Detail from "./components/Details/Detail";
import SearchToModify from "./components/Admin/AdminFormularios/SearchToModify";
import UpdateProducts from "./components/Admin/AdminFormularios/UpdateProducts";


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
        <Route path="/updatecategory" element={<CreacionCategorias />} />
        <Route path="/createProduct" element={<CreacionProductos />} />
        <Route path="/update/:id" element={<UpdateUsuarios />} />
        <Route path="/update" element= {<UpdateUsers/>}/>
        <Route path="/products/:id" element= {<Detail/>}/>
        <Route path="/products/update/:id" element= {<UpdateProducts />}/>
        <Route path="/products/update/" element= {<SearchToModify/>}/>




        


      </Routes>
    </div>
  );
}

export default App;
