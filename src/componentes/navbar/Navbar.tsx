import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='bg-blue-900 min-h-[5vh] font-semibold text-2xl flex justify-between'>
        <div className='flex justify-start'>
          <img src={logo} alt='logo' className='w-[10vh] h-[8vh] py-[-1rem]' />
          <Link to="/" className='px-[-5] flex items-center text-blue-500'>Saúde</Link>
        </div>

        <div className='items-center text-blue-500 flex justify-around'>
          <div className='p-2'>Produtos</div>
          <div className='p-2'>Categorias</div>
          <div className='p-2'>Cadastrar categoria</div>
        </div>
      </div>
    </>
  )
}

export default Navbar