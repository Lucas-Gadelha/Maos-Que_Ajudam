import { useState } from 'react';
import HeaderInstituicao from '../../header/headerInstituicao'
import DetalhesPedido from './detalhesPedido';
import './voluntarioInstituicao.css'

const VerDoacao = () => {
    const [mostrarDetalhes, setMostrarDetalhes] = useState(false)

    const MostrarDetalhes = () => {
        setMostrarDetalhes(true)
    }



    return (
        <div className="pagina-voluntario-instituicao">
            <HeaderInstituicao/>
            <div className='conteudo-pagina-voluntario-instituicao'>
                <div className='titulo-geral-tabela'>
                    <h1>Lista de Doações</h1>
                </div>
                <div className="tabela">
                    <div className="todos-os-titulos">
                        <div className="titulo-tabela">
                            <div className='nome-titulo-doacoes'>
                                <p>Pedidos</p>
                            </div>
                            <div className='nome-titulo-doacoes'>
                                <p>Doador</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="itens-lista">
                        <div className="linha-itens">
                            <div className="item-doacoes" onClick={MostrarDetalhes}>
                                <p>Pedido...</p>
                            </div>
                            <div className="ultimo-item">
                                <p>Maria</p>
                            </div>
                            
                        </div>

                       


                        
                    </div>
                </div>


            </div>
            {mostrarDetalhes && <DetalhesPedido/>}

        </div>
    )
}


export default VerDoacao