import "./App.css";
import Catalogo from "./components/Catalogo/Catalogo.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import Cards from "./components/Cards/Cards";
import CreacionCategorias from "./components/Admin/AdminFormularios/CreacionCategorias";
import CreacionProductos from "./components/Admin/AdminFormularios/CreacionProductos";
import UpdateUsuarios from "./components/Admin/AdminFormularios/UpdateUsuarios";
import UpdateUsers from "./components/Admin/AdminFormularios/UpdateUsers";

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

        


      </Routes>
    </div>
  );
}

export default App;
