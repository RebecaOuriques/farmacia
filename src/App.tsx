import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Navbar from './componentes/navbar/Navbar'
import Footer from './componentes/footer/Footer'
import 'react-toastify/dist/ReactToastify.css';
import ListarCategorias from './componentes/categoria/listarCategorias/ListarCategorias'
import FormCategoria from './componentes/categoria/formCategoria/FormCategoria'
import DeletarCategoria from './componentes/categoria/deletarCategoria/DeletarCategoria'
import { ToastContainer } from 'react-toastify'
import ListarProdutos from './componentes/produto/listarProduto/ListarProdutos'
import FormProduto from './componentes/produto/formProduto/FormProduto'
import DeletarProduto from './componentes/produto/deletarProduto/DeletarProduto'

function App() {
 
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
      <Navbar />
        <div className='min-h-[80vh]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categorias" element={<ListarCategorias />} />
          <Route path="/cadastroCategoria" element={<FormCategoria />} />
          <Route path="/editarCategoria/:id" element={<FormCategoria />} />
          <Route path="/cadastroCategoria" element={<FormCategoria />} />
          <Route path="/deletarCategoria/:id" element={<DeletarCategoria/>} />
          <Route path="/produtos" element={<ListarProdutos />} />
          <Route path="/cadastroProduto" element={<FormProduto />} />
          <Route path="/editarProduto/:id" element={<FormProduto />} />
          <Route path="/cadastroProduto" element={<FormProduto />} />
          <Route path="/deletarProduto/:id" element={<DeletarProduto/>} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
