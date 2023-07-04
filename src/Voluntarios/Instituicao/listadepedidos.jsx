import { useState } from 'react';
import HeaderInstituicao from '../../header/headerInstituicao'
import DetalhesPedido from './detalhesPedido';
import './voluntarioInstituicao.css'
import AdicionarPedido from './adicionarPedido';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from "axios"

const ListaPedidos = () => {
    const navigate = useNavigate()
    const [mostrarDetalhes, setMostrarDetalhes] = useState(false)

    const [mostrarAdicionarPedido, setMostrarAdicionarPedido] = useState(false)

    const [mostrarCampoEndereco, setMostrarCampoEndereco] = useState(false);

    const [solicitacoes, setSolicitacoes] = useState([])

    let quantidadeItens = 1

    // Variaveis ed estado da tela de solicitação
    const [tipo, setTipo] = useState("comida")
    const [quantidade, setQuantidade] = useState(quantidadeItens)
    const [beneficiario, setBeneficiario] = useState("")
    const [detalhes, setDetalhes] = useState("")
    const [opcaoSelecionada, setOpcaoSelecionada] = useState({ opcao1: false, opcao2: false });
    const [endereco, setEndereco] = useState("")

    const { opcao1, opcao2 } = opcaoSelecionada


    function handleSubmit(event) {
        // event.preventDefault()
        const novaSolicitacaoAdm = { tipo, quantidade, beneficiario, detalhes, opcaoSelecionada, endereco }
        axios.post("http://localhost:3001/doacao/register", novaSolicitacaoAdm)
            .then(
                (response) => {
                    // setMostrarDetalhesSolicitacao(false)
                    // console.log(response.data)
                    alert(`Solicitação cadastrada com sucesso!`)

                    navigate("/verPedidos")
                }
            )
            .catch(error => console.log(error))


    }




    const VerificacaoValorInput = (event) => {
        const valorSelecionado = event.target.value;

        if (valorSelecionado === 'opcao1') {
            setOpcaoSelecionada({ ...opcaoSelecionada, opcao1: true, opcao2: false });
        } else if (valorSelecionado === 'opcao2') {
            setOpcaoSelecionada({ ...opcaoSelecionada, opcao1: false, opcao2: true });
        }

        if (valorSelecionado === 'opcao1') {
            setMostrarCampoEndereco(false);
        } else if (valorSelecionado === 'opcao2') {
            setMostrarCampoEndereco(true);
        } else {
            setMostrarCampoEndereco(false);
        }


    };


    useEffect(
        () => {
            axios.get("http://localhost:3001/doacao/listar")
                .then(
                    (response) => {
                        // console.log(response)
                        setSolicitacoes(response.data);

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

    const FecharDetalhes = () => {
        setMostrarDetalhes(false)

    }

    const MostrarAdicionarPedido = () => {
        setMostrarAdicionarPedido(true)
    }

    const FecharAdicionarPedido = () => {
        setMostrarAdicionarPedido(false)
    }

    return (
        <div className="pagina-voluntario-instituicao">
            <HeaderInstituicao />
            <div className='conteudo-pagina-voluntario-instituicao'>
                <div className='titulo-geral-tabela'>
                    <h1>Lista de Pedidos</h1>
                </div>
                <div className="tabela">
                    <div className="todos-os-titulos">
                        <div className="titulo-tabela">
                            <div className='nome-titulo'>
                                <p>Tipo</p>
                            </div>
                            <div className='nome-titulo'>
                                <p>Detalhes</p>
                            </div>
                            <div className='nome-titulo'>
                                <p>Beneficiario</p>
                            </div>
                            <div className='nome-titulo'>
                                <p>Status</p>
                            </div>
                            <div className='nome-titulo'>
                                <p>Data de Solicitação</p>
                            </div>
                        </div>
                    </div>

                    <div className="itens-lista">
                        <div className="linha-itens">
                            <div className="item" onClick={MostrarDetalhes}>
                                <p>Entrega de...</p>
                            </div>
                            <div className="item">
                                <p>Maria</p>
                            </div>
                            <div className="item">
                                <p>Joao</p>
                            </div>
                            <div className="item">
                                <p>Aguardando</p>
                            </div>
                            <div className="item-data">
                                <p>02/02/23</p>
                            </div>
                        </div>

                        {
                            solicitacoes.map(
                                (solicitacao) => {
                                    return (

                                        <div className="linha-itens" >
                                            <div className="item" onClick={MostrarDetalhes}>
                                                <p>{solicitacao.tipo}</p>
                                            </div>
                                            <div className="item">
                                                <p>{solicitacao.detalhes}</p>
                                            </div>
                                            <div className="item">
                                                <p>{solicitacao.beneficiario}</p>
                                            </div>
                                            <div className="item">
                                                <p>Aguardando</p>
                                            </div>
                                            <div className="item-data">
                                                <p>DD/MM/AA</p>
                                            </div>

                                        </div>



                                    )
                                }
                            )
                        }

                    </div>


                </div>

                <div className='botao-adicionar'>
                    <span onClick={MostrarAdicionarPedido} >Adicionar</span>
                </div>

            </div>
            {mostrarDetalhes ? (
                <div className='detalhes'>

                    <div className='detalhes-pedidos-adm'>
                        <div className="titulo">
                            <h1>Detalhes</h1>
                        </div>
                        <div className="conteudo-detalhes-adm">
                            <div className="texto-detalhes-adm">
                                <h4>Nome:</h4>
                            </div>
                            <div className="texto-detalhes-adm">
                                <h4>Resumo:</h4>
                            </div>
                            <div className="texto-detalhes-adm">
                                <h4>Endereço:</h4>
                            </div>
                            <div className="texto-detalhes-adm">
                                <h4>Tipo de Item:</h4>
                            </div>
                            <div className="texto-detalhes-adm">
                                <h4>Destinatário:</h4>
                            </div>
                            <div className="texto-detalhes-adm">
                                <label>Voluntario:</label>
                            </div>
                            <div className="texto-detalhes-adm">
                                <h4>Código:</h4>
                            </div>


                            <div className="botoes">
                                <button onClick={FecharDetalhes} className="botao-ok"><p>OK</p></button>

                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
            {mostrarAdicionarPedido ? (
                <div className="pagina-doar-adm">

                    <div className="realizar-doacao">
                        <div className="titulo">
                            <h1>Adicionar Pedido</h1>
                        </div>
                        <form className="conteudo-doar" onSubmit={handleSubmit} >
                            <div className="texto-doar">
                                <label> Qual tipo de doação você deseja solicitar?</label>
                                <select name="realizar doacao" required="required" value={tipo} onChange={(event) => setTipo(event.target.value)} >
                                    <option value="Comida"> Comida</option>
                                    <option value="Roupa">Roupa</option>
                                    <option value="Higiene">Itens de Higiene</option>
                                    <option value="Outros">Outros</option>
                                </select>

                            </div>
                            <div className="texto-doar">
                                <label>Quantidade de itens:</label>
                                <input className="numItens" type="number" min={1} max={50} required="required" value={quantidade} name="quantidade" onChange={(event) => setQuantidade(event.target.value)} />

                            </div>
                            <div className="texto-doar">
                                <label>Beneficiário:</label>
                                <input className="nomeBeneficiario" type="text" required='required' placeholder="Nome" value={beneficiario} name="beneficiario" onChange={(event) => setBeneficiario(event.target.value)} />
                            </div>
                            <div className="escrever">
                                <textarea placeholder="Detalhe os itens que deseja. Ex: Arroz, feijao, sal...." value={detalhes} name="detalhes" onChange={(event) => setDetalhes(event.target.value)} ></textarea>
                            </div>

                            <div className="texto-doar">
                                <div className="endereco">
                                    <label>
                                        <input
                                            type="radio"
                                            value="opcao1"
                                            checked={opcao1}
                                            onChange={VerificacaoValorInput}
                                        />
                                        <span>Entregar no ponto de coleta um</span>
                                    </label>

                                </div>

                                <div className="endereco">
                                    <label>
                                        <input
                                            type="radio"
                                            value="opcao2"
                                            checked={opcao2}
                                            onChange={VerificacaoValorInput}
                                        />
                                        <span>Não tenho disponibilidade para entregar, desejo informar meu endereço para coleta</span>
                                    </label>

                                </div>
                                {mostrarCampoEndereco && (
                                    <div className="endereco">
                                        <label>
                                            <span>Endereço:</span><input className="escrever-endereco" type="text" />
                                        </label>

                                    </div>

                                )}


                                <div className="div-botoes">
                                    <div className="div-botao">
                                        <button type='submit' className="Confirmar">Confirmar</button>
                                    </div>
                                    <div className="div-botao">
                                        <button type='submit' onClick={FecharAdicionarPedido} className="Cancelar">Cancelar</button>
                                    </div>
                                </div>
                            </div>


                        </form>

                    </div>
                </div>
            ) : null}
        </div>
    )
}


export default ListaPedidos