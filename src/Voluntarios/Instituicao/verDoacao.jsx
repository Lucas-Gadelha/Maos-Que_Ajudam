import { useState } from 'react';
import HeaderInstituicao from '../../header/headerInstituicao'
import DetalhesPedido from './detalhesPedido';
import './voluntarioInstituicao.css'
import { useEffect } from 'react';
import axios from 'axios';

const VerDoacao = () => {
    const [mostrarDetalhes, setMostrarDetalhes] = useState(false)
    const [todasAsDoacoes, setTodasAsDoacoes] = useState([])

    useEffect(
        () => {
            axios.get("http://localhost:3001/doar/listar")
                .then(
                    (response) => {
                        setTodasAsDoacoes(response.data);
                        // setTodasAsDoacoes(todasAsDoacoes);

                    }
                )
                .catch(error => console.log(error))
        }
        ,
        []
    )

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
                                <p>Detalhes</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="itens-lista">
                    {
                            todasAsDoacoes.map(
                                (solicitacao) => {
                                    return (

                                        <div className="linha-itens" >
                                            <div className="item-doacoes" onClick={MostrarDetalhes}>
                                                <p>{solicitacao.tipo}</p>
                                            </div>
                                            <div className="ultimo-item">
                                                <p>{solicitacao.detalhes}</p>
                                            </div>

                                        </div>



                                    )
                                }
                            )
                        }

                        {/* <div className="linha-itens">
                            <div className="item-doacoes" onClick={MostrarDetalhes}>
                                <p>Pedido...</p>
                            </div>
                            <div className="ultimo-item">
                                <p>Maria</p>
                            </div>
                            
                        </div> */}

                       


                        
                    </div>
                </div>


            </div>
            {mostrarDetalhes && <DetalhesPedido/>}

        </div>
    )
}


export default VerDoacao