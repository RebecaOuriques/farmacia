//import React from 'react';
import FormProduto from '../formProduto/FormProduto';

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

import './ModalProduto.css'


function ModalProduto() {
    return (
        <>
            <Popup
                trigger={<button className='border rounded px-4 hover:bg-white hover:text-blue-900'>Novo produto</button>} modal>
                <div>
                    <FormProduto />
                </div>
            </Popup>
        </>
    );
}

export default ModalProduto;