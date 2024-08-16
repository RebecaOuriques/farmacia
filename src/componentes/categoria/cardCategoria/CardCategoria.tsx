//import React from 'react'
import Categoria from '../../../models/Categoria'
import { Link } from 'react-router-dom'

interface CardCategoriaProps {
    categoria: Categoria
}


function CardCategoria({categoria} : CardCategoriaProps) {
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-blue-900 text-white font-bold text-2xl'>Categoria - {categoria.nome}</header>
      <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.descricao}</p>
      <div className="flex">
        <Link to={`/editarCategoria/${categoria.id}`} className='w-full text-slate-100 bg-indigo-400 hover:bg-blue-900 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarCategoria/${categoria.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardCategoria