import "./App.css";
import { useState, useEffect } from "react";
import Catalogo from "./components/Catalogo/Catalogo.jsx";
import { Routes, Route} from "react-router-dom";
import Cards from "./components/Cards/Cards";
import CarroCompras from "./components/CarroCompras/CarroCompras";
import Login from "./components/Login/Login";
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
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productAdd, cantidad: productAdd.cantidad + 1 }
            : item
        )
      );
      swal.fire({
        position: "bottom-start",
        icon: "success",
        title: "El producto ha sido añadido al carrito",
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
        <NavBar />
        <Routes>
          {/* <Route path="/" element={<Landing/>} /> */}
          <Route path="/" element={<Home onAddCarrito={onAddCarrito} />} />
         {/*  <Route
            path="/catalogo"
            element={<Catalogo onAddCarrito={onAddCarrito} />}
          /> */}
          <Route path="/card" element={<Cards />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/carrito"
            element={
              <CarroCompras cartItems={cartItems} onAddCarrito={onAddCarrito} />
            }
          />
          <Route path="/createcategory" element={<CreacionCategorias />} />
          <Route path="/createProduct" element={<CreacionProductos />} />
          <Route path="/update/:id" element={<UpdateUsuarios />} />
          <Route path="/update" element={<UpdateUsers />} />
          <Route path="/products/:id" element={<Detail />} />
          <Route path="/products/update/:id" element={<UpdateProducts />} />
          <Route path="/products/update/" element={<SearchToModify />} />
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
          <Route path="/review/:id" element={<Review />} />
          <Route path="/miscompras" element={<MisCompras />} />

          {/* /* //////////ADMIN////////////////////////// */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/createcategory" element={<CreacionCategorias />} />
          <Route
            path="/dashboard/products/create"
            element={<CreacionProductos />}
          />
          <Route path="/dashboard/update/:id" element={<UpdateUsuarios />} />
          <Route path="/dashboard/update" element={<UpdateUsers />} />
          <Route
            path="/dashboard/products/update/:id"
            element={<UpdateProducts />}
          />
          <Route
            path="/dashboard/products/update/"
            element={<SearchToModify />}
          />

          {/* ///////////////USUARIO///////////////// */}
          <Route path="/" element={<Home onAddCarrito={onAddCarrito} />} />
          <Route
            path="/catalogo"
            element={<Catalogo logueado={logueado} onAddCarrito={onAddCarrito} />}
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
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/verify/:id" element={<Verify />} />
          <Route path="/favoritos" element={<Favorites />} />

        </Routes>
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
