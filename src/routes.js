import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CadastroCliente from "./pages/CadastroCliente";
import CadastroVideo from "./pages/CadastroVideo";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Clientes from "./pages/Clientes";

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro-cliente" element={<CadastroCliente />} />
        <Route path="/cadastro-video" element={<CadastroVideo />} />
        <Route path="/home" element={<Home />} />
        <Route path="/clientes" element={<Clientes />} />
      </Routes>
    </Router>
  );
}

export default Rotas;
