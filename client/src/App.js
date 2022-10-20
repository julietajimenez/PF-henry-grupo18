import "./App.css";
import { useState, useEffect } from "react";
import Catalogo from "./components/Catalogo/Catalogo.jsx";
import { Routes, Route } from "react-router-dom";
import Cards from "./components/Cards/Cards";
import CarroCompras from "./components/CarroCompras/CarroCompras";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import CreacionCategorias from "./components/Admin/AdminFormularios/CreacionCategorias";
import CreacionProductos from "./components/Admin/AdminFormularios/CreacionProductos";
import UpdateUsuarios from "./components/Admin/AdminFormularios/UpdateUsuarios";
import UpdateUsers from "./components/Admin/AdminFormularios/TabladeUsuarios";
import Detail from "./components/Details/Detail";
import SearchToModify from "./components/Admin/AdminFormularios/SearchToModify";
import UpdateProducts from "./components/Admin/AdminFormularios/UpdateProducts";
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
import MisCompras from "./components/MisCompras/MisCompras";
import { useDispatch } from "react-redux";
import { getAllUsers, updateCarrito } from "./redux/actions/UsersAction";
import { getAllProducts } from "./redux/actions/ProductsActions";
import UserBanned from "./components/UserBanned/UserBanned";
import UserUnverified from "./components/UserUnverified/UserUnverified";
import Error404 from "./components/Error404/Error404";
import DetailCompras from "./components/DetailCompras/DetailCompras";
import Review from "./components/Review/Review";
import toast, { Toaster } from "react-hot-toast";
import { AuthContextProvider } from "./context/authContext";
import ContactUs from "./components/ContactUs/ContactUs";

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

  const [cartItems, setCartItems] = useState(() => {
    try {
      if (cartItems) return cartItems;
      const prodEnLocalStorage = localStorage.getItem("carrito");
      return prodEnLocalStorage
        ? logueado === "invitado" || logueado.carrito.length === 0
          ? JSON.parse(prodEnLocalStorage)
          : JSON.parse(JSON.parse(prodEnLocalStorage))
        : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllProducts());
    if (logueado.id) {
      dispatch(updateCarrito(logueado.id, cartItems));
    }
    localStorage.setItem("carrito", JSON.stringify(cartItems));
  }, [cartItems, dispatch]);

  const notifyAddCart = () =>
    toast.success("Agregado a carrito!", {
      style: {
        background: "rgb(67, 160, 71)",
        color: "white",
      },
    });

  let total = cartItems.reduce((a, c) => a + c.price * c.cantidad, 0);

  const onAddCarrito = (product) => {
    const productAdd = cartItems.find((item) => item.id === product.id);
    if (productAdd) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? {
                ...productAdd,
                cantidad: productAdd.cantidad + 1,
                stock: productAdd.stock - 1,
              }
            : item
        )
      );
      total += product.price;
    } else {
      setCartItems([...cartItems, { ...product, cantidad: 1 }]);
      total += product.price;
      /*       Swal.fire({
      position: "bottom-start",
      icon: "success",
      title: "El producto ha sido añadido al carrito",
      showConfirmButton: false,
      timer: 1500,
    }); */
      notifyAddCart();
    }
  };

  const onRemoveCarrito = (product) => {
    const productRemove = cartItems.find((item) => item.id === product.id);
    if (productRemove.cantidad !== 1) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? {
                ...productRemove,
                cantidad: productRemove.cantidad - 1,
                stock: productRemove.stock + 1,
              }
            : item
        )
      );
    }
  };
  const onRemoveItemCarrito = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  return (
    <div className="App">
      <AuthContextProvider>
        <UserContext.Provider value={{ logueado, setlogueado }}>
          <NavBar usuario={logueado} />
          <Routes>
            {logueado !== "invitado" &&
            logueado.category === "user" &&
            logueado.status === "VERIFIED" &&
            logueado.active === true ? (
              // RUTAS PARA EL USUARIO VERIFICADO

              <>
                <Route
                  path="/"
                  element={<Home onAddCarrito={onAddCarrito} />}
                />
                <Route path="/card" element={<Cards />} />
                <Route path="/miscompras" element={<MisCompras />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                  path="/carrito"
                  element={
                    <CarroCompras
                      cartItems={cartItems}
                      setCartItems={setCartItems}
                      onAddCarrito={onAddCarrito}
                      onRemoveCarrito={onRemoveCarrito}
                      onRemoveItemCarrito={onRemoveItemCarrito}
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
                <Route path="/compras/:id" element={<DetailCompras />} />
                <Route path="/review/:id" element={<Review />} />
                <Route
                  path="/review/edit/:id/:idReview"
                  element={<Review edit="edit" />}
                />
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
                <Route
                  path="/"
                  element={<Home onAddCarrito={onAddCarrito} />}
                />
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
                <Route
                  path="/createcategory"
                  element={<CreacionCategorias />}
                />
                <Route path="/products/:id" element={<Detail />} />
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
                <Route
                  path="/"
                  element={<Home onAddCarrito={onAddCarrito} />}
                />
                <Route
                  path="/catalogo"
                  element={<Catalogo onAddCarrito={onAddCarrito} />}
                />
                <Route path="/card" element={<Cards />} />
                <Route
                  path="/login"
                  element={<Login setCartItems={setCartItems} />}
                />
                <Route path="/register" element={<Register />} />
                <Route
                  path="/carrito"
                  element={
                    <CarroCompras
                      cartItems={cartItems}
                      onAddCarrito={onAddCarrito}
                      onRemoveCarrito={onRemoveCarrito}
                      onRemoveItemCarrito={onRemoveItemCarrito}
                    />
                  }
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
              </>
            ) : null}
            <Route path="/" element={<Home />} />
            <Route path="/support" element={<ContactUs />} />
            <Route path="/*" element={<Error404 />} />
          </Routes>
          <Toaster position="bottom-left" reverseOrder={false} />
          <Footer />
        </UserContext.Provider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
