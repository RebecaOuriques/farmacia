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
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
