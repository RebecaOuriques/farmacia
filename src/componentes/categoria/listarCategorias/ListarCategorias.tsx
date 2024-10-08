//import React, { useEffect, useState } from 'react'
import Categoria from '../../../models/Categoria';
import { buscar } from '../../../service/service';
import { toastAlerta } from '../../../utils/toastAlerta';
import { Dna } from 'react-loader-spinner';
import CardCategoria from '../cardCategoria/CardCategoria';
import { useEffect, useState } from 'react';


const ListarCategorias = () => {
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    async function buscarCategoria() {

        try {
            await buscar('/categorias', setCategorias)

        } catch (error: any) {
            toastAlerta('Erro ao buscar categoria', 'info')
        }

    }
        useEffect(() => {
            buscarCategoria();
        }, [categorias.length]);

    return (
        <>
            {categorias.length === 0 && (
                <Dna
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categorias.map((categoria) => (
                            <>
                                <CardCategoria key={categoria.id} categoria={categoria} />
                            </>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default ListarCategorias