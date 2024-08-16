import React from 'react'
import Produto from '../../../models/Produto'
import { Link } from 'react-router-dom'

interface CardProdutoProps {
    produto : Produto
}

function CardProduto({produto} : CardProdutoProps) {
  return (
<div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
      <div>
        <div className="flex w-full bg-blue-600 py-2 px-4 items-center gap-4">
          <img src={produto.foto} className='h-12 rounded-full' alt="" />
          <h3 className='text-lg font-bold text-center uppercase '>{produto.nome}</h3>
        </div>
        <div className='p-4 '>
          <h4 className='text-lg font-semibold uppercase'>{produto.nome}</h4>
            <p>{produto.descricao}</p>
            <p>Categoria: {produto.categoria?.nome} - {produto.categoria?.descricao} </p>
            <p>Preço: {produto.preco}</p>
            <p>Laboratório: {produto.laboratorio}</p>
            <p>Quantidade: {produto.quantidade}</p>
        </div>
      </div>
      <div className="flex">
      <Link to={`/editarProduto/${produto.id}`} className='w-full text-white bg-blue-400 hover:bg-blue-900 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarProduto/${produto.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
    
)
}

export default CardProduto