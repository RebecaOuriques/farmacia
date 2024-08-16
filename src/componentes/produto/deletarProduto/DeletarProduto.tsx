import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { buscar, deletar } from '../../../service/service'
import { toastAlerta } from '../../../utils/toastAlerta'
import Produto from '../../../models/Produto'

function DeletarProduto() {

  const [produto, setProduto] = useState<Produto>({} as Produto)
  let navigate = useNavigate()

  const { id } = useParams<{ id: string }>()


  async function buscarPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto)
    }
    catch (error: any) {
      toastAlerta('Erro ao buscar produto', 'info')
    }

  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function retornar() {
    navigate("/produtos")
  }

  async function deletarProduto() {
    try {
      await deletar(`/produtos/${id}`)

      toastAlerta('Produto apagado com sucesso', 'sucesso')

    } catch (error) {
      toastAlerta('Erro ao apagar o Produto', 'erro')
    }

    retornar()
  }

  return (
    <div className='container w-1/3 mx-auto'>
      <h1 className='text-4xl text-center my-4'>Deletar produto</h1>

      <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar o produto a seguir?</p>

      <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
        <header className='py-2 px-6 bg-blue-900 text-white font-bold text-2xl'>Produto</header>
        <div className="p-4">
          <div className='flex justify-center items-center'>
          <img src={produto.foto} className='w-[30vh] h-[20vh]'/>
          </div>
          <p className='text-xl h-full'>{produto.nome}</p>
          <p>Descrição: {produto.descricao}</p>
          <p>Quantidade: {produto.quantidade} </p>
          <p>Laboratório: {produto.laboratorio} </p>
          <p>Preço: {produto.preco} </p>
          <p>Categoria: {produto.categoria?.nome} - {produto.categoria?.descricao} </p>
        </div>
        <div className="flex">
          <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>Não</button>
          <button className='w-full text-slate-100 bg-blue-600 hover:bg-blue-900 flex items-center justify-center' onClick={deletarProduto}>
            Sim
          </button>
        </div>
      </div>
    </div>

  )



}

export default DeletarProduto