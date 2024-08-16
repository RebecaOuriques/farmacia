import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { buscar, deletar } from '../../../service/service'
import { toastAlerta } from '../../../utils/toastAlerta'
import Categoria from '../../../models/Categoria'


const DeletarCategoria = () => {

    const[categoria, setCategoria] = useState<Categoria>({} as Categoria)

    let navigate = useNavigate()

    const {id} = useParams<{id: string} > ()

    async function buscarPorId(id: string) {
        try {
             await buscar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {
            toastAlerta('Erro ao deletar categoria', 'info')
        }
        
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/categorias")
    }

    async function deletarCategoria() {
        try {
            await deletar(`/categorias/${id}`)

            toastAlerta('Categoria apagada com sucesso', 'sucesso')

        } catch (error) {
            toastAlerta('Erro ao apagar a Categoria', 'erro')
        }

        retornar()
    }

  return (
    <div className='container w-1/3 mx-auto'>
    <h1 className='text-4xl text-center my-4'>Deletar categoria</h1>

    <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar a Categoria a seguir?</p>

    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
        <header className='py-2 px-6 bg-blue-600 text-white font-bold text-2xl'>Categoria</header>
        <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.descricao}</p>
        <div className="flex">
            <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>Não</button>
            <button className='w-full text-slate-100 bg-blue-600 hover:bg-blue-900 flex items-center justify-center' onClick={deletarCategoria}>
                Sim
            </button>
        </div>
    </div>
</div>  )
}

export default DeletarCategoria