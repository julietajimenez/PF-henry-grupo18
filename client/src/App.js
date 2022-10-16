import "./App.css";
import { useState, useEffect } from "react";
import Catalogo from "./components/Catalogo/Catalogo.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import Cards from "./components/Cards/Cards";
import CarroCompras from "./components/CarroCompras/CarroCompras";
import Login from "./components/Login/Login";
import Searchbar from "./components/Searchbar/Searchbar.jsx";
import Category from "./components/Filters/Filter Category/CategoryFilter.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import CreacionCategorias from "./components/Admin/AdminFormularios/CreacionCategorias";
import CreacionProductos from "./components/Admin/AdminFormularios/CreacionProductos";
import UpdateUsuarios from "./components/Admin/AdminFormularios/UpdateUsuarios";
import UpdateUsers from "./components/Admin/AdminFormularios/UpdateUsers";
import Detail from "./components/Details/Detail";
import SearchToModify from "./components/Admin/AdminFormularios/SearchToModify";
import UpdateProducts from "./components/Admin/AdminFormularios/UpdateProducts";
//import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import Pacifica from "./components/Brands/Pacifica";
import Maybelline from "./components/Brands/Maybelline";
import Revlon from "./components/Brands/Revlon";
import PhysiciansFormula from "./components/Brands/PhysiciansFormula";
import Register from "./components/Register/Register";
import Checkout from "./components/PayPal/Checkout";
import UserContext from "./context/userContext";
import Verify from "./components/VerificadorUsers/Verify";
import Dashboard from "./components/Admin/DashboardComponents/Chart&&widgets";
import swal from "sweetalert2";
import Review from "./components/Review/Review";
import MisCompras from "./components/MisCompras/MisCompras";
import { useDispatch } from "react-redux";
import { getAllUsers } from "./redux/actions/UsersAction";
import { getAllProducts } from "./redux/actions/ProductsActions";
import UserBanned from "./components/UserBanned/UserBanned";
import UserUnverified from "./components/UserUnverified/UserUnverified";
import Error404 from "./components/Error404/Error404";
import Favorites from "./components/Favorites/Favorites";


function App() {
  const dispatch = useDispatch();
  const [logueado, setlogueado] = useState(() => {
    try {
      const userLogueado = localStorage.getItem("logueado");
      return userLogueado ? JSON.parse(userLogueado) : "invitado";
    } catch (error) {
      return "invitado";
    }
  });
  console.log(logueado);

  const [cartItems, setCartItems] = useState(() => {
    try {
      const prodEnLocalStorage = localStorage.getItem("carrito");
      return prodEnLocalStorage ? JSON.parse(prodEnLocalStorage) : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllProducts());
    localStorage.setItem("carrito", JSON.stringify(cartItems));
  }, [cartItems]);

  const onAddCarrito = (product) => {
    console.log(product);
    const productAdd = cartItems.find((item) => item.id === product.id);
    if (productAdd) {
      swal.fire({
        position: "bottom-start",
        icon: "warning",
        title: "Producto en carrito",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      setCartItems([...cartItems, { ...product, cantidad: 1 }]);

      swal.fire({
        position: "bottom-start",
        icon: "success",
        title: "El producto ha sido añadido al carrito",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="App">
      <UserContext.Provider value={{ logueado, setlogueado }}>
        <NavBar usuario={logueado} />
        <Routes>
          {logueado !== "invitado" &&
          logueado.category === "user" &&
          logueado.status === "VERIFIED" &&
          logueado.active === true ? (
            // RUTAS PARA EL USUARIO VERIFICADO

            <>
              <Route path="/" element={<Home onAddCarrito={onAddCarrito} />} />
              <Route path="/card" element={<Cards />} />
              <Route path="/miscompras" element={<MisCompras />} />
              <Route path="/favoritss" element={<Favorites />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/carrito"
                element={
                  <CarroCompras
                    cartItems={cartItems}
                    onAddCarrito={onAddCarrito}
                  />
                }
              />
              <Route
                path="/catalogo"
                element={<Catalogo onAddCarrito={onAddCarrito} />}
              />

              <Route path="products/:id" element={<Detail />} />
              <Route
                path="/products/brands/pacifica"
                element={<Pacifica onAddCarrito={onAddCarrito} />}
              />
              <Route
                path="/products/brands/maybelline"
                element={<Maybelline onAddCarrito={onAddCarrito} />}
              />
              <Route
                path="/products/brands/revlon"
                element={<Revlon onAddCarrito={onAddCarrito} />}
              />
              <Route
                path="/products/brands/physiciansFormula"
                element={<PhysiciansFormula onAddCarrito={onAddCarrito} />}
              />
              <Route path="/checkout" element={<Checkout />} />
            </>
          ) : logueado !== "invitado" &&
            logueado.category === "user" &&
            logueado.status === "UNVERIFIED" &&
            logueado.active === true ? (
            <>
              <Route path="/verify/:id" element={<Verify />} />
              <Route path="/*" element={<UserUnverified />} />
            </>
          ) : logueado !== "invitado" &&
            logueado.category === "user" &&
            logueado.active === false ? (
            <Route path="/*" element={<UserBanned />} />
          ) : logueado !== "invitado" && logueado.category === "admin" ? (
            // RUTAS PARA EL ADMINISTRADOR

            <>
              <Route path="/" element={<Home onAddCarrito={onAddCarrito} />} />
              <Route path="/card" element={<Cards />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/carrito"
                element={
                  <CarroCompras
                    cartItems={cartItems}
                    onAddCarrito={onAddCarrito}
                  />
                }
              />
              <Route path="/miscompras" element={<MisCompras />} />

              <Route
                path="/catalogo"
                element={<Catalogo onAddCarrito={onAddCarrito} />}
              />
              <Route path="products/:id" element={<Detail />} />
              <Route
                path="/products/brands/pacifica"
                element={<Pacifica onAddCarrito={onAddCarrito} />}
              />
              <Route
                path="/products/brands/maybelline"
                element={<Maybelline onAddCarrito={onAddCarrito} />}
              />
              <Route
                path="/products/brands/revlon"
                element={<Revlon onAddCarrito={onAddCarrito} />}
              />
              <Route
                path="/products/brands/physiciansFormula"
                element={<PhysiciansFormula onAddCarrito={onAddCarrito} />}
              />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/verify/:id" element={<Verify />} />
              <Route path="/createcategory" element={<CreacionCategorias />} />
              {/* <Route path="/createProduct" element={<CreacionProductos />} /> */}
              {/* <Route path="/update/:id" element={<UpdateUsuarios />} /> */}
              {/* <Route path="/update" element={<UpdateUsers />} /> */}
              <Route path="/products/:id" element={<Detail />} />
              {/* <Route path="/products/update/:id" element={<UpdateProducts />} />
              <Route path="/products/update/" element={<SearchToModify />} /> */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route
                path="/dashboard/products/create"
                element={<CreacionProductos />}
              />
              <Route
                path="/dashboard/update/:id"
                element={<UpdateUsuarios />}
              />
              <Route path="/dashboard/update" element={<UpdateUsers />} />
              <Route
                path="/dashboard/products/update/:id"
                element={<UpdateProducts />}
              />
              <Route
                path="/dashboard/products/update/"
                element={<SearchToModify />}
              />
            </>
          ) : logueado === "invitado" ? (
            <>
              <Route path="/" element={<Home onAddCarrito={onAddCarrito} />} />
              <Route
                path="/catalogo"
                element={<Catalogo onAddCarrito={onAddCarrito} />}
              />
              <Route path="/card" element={<Cards />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/carrito" element={<CarroCompras />} />
              <Route path="products/:id" element={<Detail />} />
              <Route
                path="/products/brands/pacifica"
                element={<Pacifica onAddCarrito={onAddCarrito} />}
              />
              <Route
                path="/products/brands/maybelline"
                element={<Maybelline onAddCarrito={onAddCarrito} />}
              />
              <Route
                path="/products/brands/revlon"
                element={<Revlon onAddCarrito={onAddCarrito} />}
              />
              <Route
                path="/products/brands/physiciansFormula"
                element={<PhysiciansFormula onAddCarrito={onAddCarrito} />}
              />
            </>
          ) : null}
          <Route path="/*" element={<Error404 />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
