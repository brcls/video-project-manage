import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CadastroCliente from './pages/CadastroCliente';
import CadastroVideo from './pages/CadastroVideo';

function Rotas() {
    return (
        <Router>
            <Routes>
                <Route path='/cadastro-cliente' element={<CadastroCliente />} />
                <Route path='/cadastro-video' element={<CadastroVideo />} />
            </Routes>
        </Router>
    );
}

export default Rotas;