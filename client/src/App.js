import "./App.css";
import Catalogo from "./components/Catalogo/Catalogo.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import Cards from "./components/Cards/Cards";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/card" element={<Cards />} />

      </Routes>
    </div>
  );
}

export default App;
