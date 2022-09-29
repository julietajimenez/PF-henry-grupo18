import "./App.css";
import Catalogo from "./components/Catalogo/Catalogo.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import Cards from "./components/Cards/Cards";
import CreacionCategorias from "./components/Admin/AdminFormularios/CreacionCategorias";
import CreacionProductos from "./components/Admin/AdminFormularios/CreacionProductos";
import UpdateUsuarios from "./components/Admin/AdminFormularios/UpdateUsuarios";
import UpdateUsers from "./components/Admin/AdminFormularios/UpdateUsers";
import Detail from "./components/Details/Detail";
import SearchToModify from "./components/Admin/AdminFormularios/SearchToModify";
import UpdateProducts from "./components/Admin/AdminFormularios/UpdateProducts";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/card" element={<Cards />} />
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
