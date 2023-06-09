import { useState } from "react"
import HeaderLogado from "../header/headerLogado"
import './doacoes.css'
import Overlay from "./doacoes-solicitar"
import Solicitar from "./solicitar-doacao"
import DetalhesSolicitacao from "./detalhes-solicitacao"

const Doacao = () => {
    const [doacoes, setDoacoes] = useState('Doacao 1')
    const [classeCSS, setClasseCSS] = useState('conteudo-historico-doacao-active')
    const [exibirDetalhes, setExibirDetalhes] = useState(false);

    const [exibirPedidos, setExibirPedidos] = useState(true);
    const [exibirSolicitar, setExibirSolicitar] = useState(false);

    const [classePedidoAtiva, setClassePedidoAtiva] = useState('pedidos-doacao-active');
    const [classeSolicitarAtiva, setClasseSolicitarAtiva] = useState('solicitar-doacao');
    
    const [botaoSolicitar, setBotaoSolicitar] = useState(false)

    const [mostrarOverlay, setMostrarOverlay] = useState(false);

    const [mostrarDetalhesSolicitacao, setMostrarDetalhesSolicitacao] = useState(false);


    const AcaoBotao = () => {
        setDoacoes('')
        setClasseCSS('')
        setExibirDetalhes(true)
    }

    const AcaoBotaoVoltar = () => {
        setDoacoes('Doacao 1')
        setExibirDetalhes(false);
        setClasseCSS('conteudo-historico-doacao-active')
    };


    const MostrarOverlay = () => {
        setMostrarOverlay(true)
    }

    const MostrarPedidos = () => {
        setExibirPedidos(true)
        setExibirSolicitar(false)

        setClassePedidoAtiva('pedidos-doacao-active')
        setClasseSolicitarAtiva('solicitar-doacao')

    }

    const MostrarSolicitar = () => {
        setExibirSolicitar(true)
        setExibirPedidos(false)

        setClasseSolicitarAtiva('solicitar-doacao-active')
        setClassePedidoAtiva('pedidos-feitos')

    }

    const AbrirPaginadeSolicitacao = () => {
        setBotaoSolicitar(true)
    }

    const MostrarDetalhesSolicitacao = () => {
        setMostrarDetalhesSolicitacao(true)
    }


    return (
        <div className="toda-pagina">
            <HeaderLogado />

            <div className="doacoes">
                <div className="historico">
                    <div className="titulo">
                        <h1>Histórico de Doações</h1>
                    </div>
                    <div className="lista-conteudo">
                        <div onClick={AcaoBotao} className={classeCSS} >
                            <span>
                                <p>{doacoes}</p>
                            </span>

                        </div>

                        <div onClick={AcaoBotao} className={classeCSS} >
                            <span>
                                <p>{doacoes}</p>
                            </span>

                        </div>

                        {exibirDetalhes ? (

                            <div className="detalhes-conteudo">
                                <div className="titulo-detalhe">
                                    <h4>Resumo:</h4>
                                </div>

                                <div className="titulo-detalhe">
                                    <h4>Endereço:</h4>
                                </div>

                                <div className="titulo-detalhe">
                                    <h4>Tipo de item:</h4>
                                </div>

                                <div className="titulo-detalhe">
                                    <h4>Destinatário:</h4>
                                </div>

                                <div className="titulo-detalhe">
                                    <h4>Voluntário:</h4>
                                </div>

                                <div className="titulo-detalhe">
                                    <h4>Código:</h4>
                                </div>

                                <div className="titulo-detalhe">
                                    <h4>Entregue:</h4>
                                </div>

                                <div className="botao-voltar">
                                    <button onClick={AcaoBotaoVoltar} className="voltar">Voltar</button>
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
                <div className="area-doacao">
                    <div className="titulo">
                        <h1>Doações</h1>
                    </div>
                    <div className="lista-conteudo-doacao">
                        <div className="paginas">
                            <button onClick={MostrarPedidos} className={classePedidoAtiva}>
                                <p>Pedidos</p>
                            </button>
                            <button onClick={MostrarSolicitar} className={classeSolicitarAtiva}>
                                <p>Solicitar</p>
                            </button>

                        </div>
                        <div className="conteudo-box-right">
                            {exibirPedidos ? (
                                <div onClick={MostrarOverlay} className="conteudo-pedidos">
                                    <div className="solicitacoes">
                                        <span >
                                            <p>Solicitação 1</p>
                                        </span>

                                    </div>

                                    <div className="solicitacoes">
                                        <span >
                                            <p>Solicitação 1</p>
                                        </span>

                                    </div>

                                </div>

                            ) : null}

                            {exibirSolicitar ? (
                                <div className="conteudo-solicitar-geral">
                                    <div>
                                        <div className="titulo-solicitar-doacao">
                                            <p>Solicitações em Espera</p>
                                        </div>
                                        <div className="conteudo-solicitar">
                                            <span onClick={MostrarDetalhesSolicitacao} >
                                                <p>Solicitação 1</p>
                                            </span>

                                        </div>
                                    </div>
                                    <div>
                                        <div className="titulo-solicitar-doacao">
                                            <p>Solicitações Concluidas</p>
                                        </div>
                                        <div className="conteudo-solicitar">
                                            <span >
                                                <p>Solicitação 1</p>
                                            </span>

                                        </div>
                                    </div>
                                    <div className="casa-do-botao">
                                        <div onClick={AbrirPaginadeSolicitacao} className="botao-solicitar">
                                            <span>
                                                Solicitar
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            ) : null}

                        
                        </div>


                        {botaoSolicitar && <Solicitar/>}

                        {mostrarOverlay && <Overlay />}

                        {mostrarDetalhesSolicitacao && <DetalhesSolicitacao/>}
                    </div>
                </div>
            </div>

        </div>
    )
}



export default Doacao