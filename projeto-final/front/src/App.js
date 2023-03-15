import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Categorias from "./pages/Categorias";
import MeusPedidos from "./pages/MeusPedidos";
import DetalhesProduto from "./pages/DetalhesProduto";

import "./index.css";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/produtos" element={<Produtos/>} />
          <Route path="/categorias" element={<Categorias/>} />
          <Route path="/meus-pedidos" element={<MeusPedidos/>} />
          <Route path="/produtos/:id" element={<DetalhesProduto/>} />
          
          <Route path="/produtos/:id" element={<DetalhesProduto/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
