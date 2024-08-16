import React, { useEffect, useState } from 'react'
import Produto from '../../../models/Produto';
import { buscar } from '../../../service/service';
import { toastAlerta } from '../../../utils/toastAlerta';
import CardProduto from '../cardProduto/CardProduto';
import { Dna } from 'react-loader-spinner';

function ListarProdutos() { const [produtos, setProdutos] = useState<Produto[]>([]);

  
    async function buscarProduto() {
      try {
        await buscar('/produtos', setProdutos);
      } catch (error: any) {
        
          toastAlerta ('Erro ao localizar produto', 'info')
        }
      }
  
    useEffect(() => {
      buscarProduto();
    }, [produtos.length]);
  
    return (
      <>
        {produtos.length === 0 && (
          <Dna
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper mx-auto"
          />
        )}
        <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {produtos.map((produto) => (
            <CardProduto key={produto.id} produto={produto} />
          ))}
        </div>
      </>
    );
  }
  

export default ListarProdutos