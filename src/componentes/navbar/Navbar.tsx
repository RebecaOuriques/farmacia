import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='h-[8vh] bg-blue-900 font-semibold text-2xl flex justify-between'>
        <div className='flex justify-start'>
          <img src={logo} alt='logo' className='w-[10vh] h-[8vh] py-[-1rem]' />
          <Link to="/" className='px-[-5] flex items-center text-blue-500'>Saúde</Link>
        </div>

        <div className='items-center text-blue-500 flex justify-around text-lg'>
        <Link to='/produtos' className='p-2'>Produtos</Link>
        <Link to='/cadastroProduto' className='p-2'>Cadastrar produto</Link>
          <Link to='/categorias' className='p-2'>Categorias</Link>
          <Link to='/cadastroCategoria' className='p-2'>Cadastrar categoria</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar