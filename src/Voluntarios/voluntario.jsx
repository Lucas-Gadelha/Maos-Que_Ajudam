import { useState } from "react"
import HeaderLogado from "../header/headerLogado"
import './voluntarios.css'
import Overlay from "./overlay-voluntario"

const Voluntario = () => {
    //variaveis de estado que controlam se o conteudo do historico do voluntario está visivel
    const [tarefas, setTarefas] = useState('Tarefa 1')
    const [classeCSS, setClasseCSS] = useState('conteudo-historico-active')
    const [exibirDetalhes, setExibirDetalhes] = useState(false);

    const [tarefasEmAndamento, setTarefasEmAndamento] = useState('Tarefa 1')
    const [emAndamentoclasseCSS, setEmAndamentoClasseCSS] = useState('conteudo-tarefas')
    const [exibirDetalhesTarefas, setExibirDetalhesTarefas] = useState(false);

    const [exibirPedidos, setExibirPedidos] = useState(true);
    const [exibirSolicitar, setExibirSolicitar] = useState(false);

    const [classeNovosPedidosAtiva, setClasseNovosPedidosAtiva] = useState('pedidos-active');
    const [classePedidosEmAndamento, setclassePedidosEmAndamento] = useState('solicitar');

    const [mostrarOverlay, setMostrarOverlay] = useState(false);



    const AcaoBotao = () => {
        setTarefas('')
        setClasseCSS('')
        setExibirDetalhes(true)
    }

    const AcaoBotaoVoltar = () => {
        setTarefas('Tarefa 1')
        setExibirDetalhes(false);
        setClasseCSS('conteudo-historico-active')
    };

    const DetalhesTarefas = () => {
        setTarefasEmAndamento('')
        setEmAndamentoClasseCSS('')
        setExibirDetalhesTarefas(true)
    }

    const AcaoBotaoVoltarDetalhes = () => {
        setTarefasEmAndamento('Tarefa 1')
        setEmAndamentoClasseCSS('conteudo-tarefas');
        setExibirDetalhesTarefas(false)
    };


    const MostrarOverlay = () => {
        setMostrarOverlay(true)
    }

    //Função para mostrar os pedidos para o voluntario se cadastrar
    const MostrarNovosPedidos = () => {
        setExibirPedidos(true)
        setExibirSolicitar(false)

        setClasseNovosPedidosAtiva('pedidos-active')
        setclassePedidosEmAndamento('solicitar')

    }
    //Função para mostrar os pedidos em andamento
    const MostrarPedidosEmAndamentos = () => {
        setExibirSolicitar(true)
        setExibirPedidos(false)

        setclassePedidosEmAndamento('solicitar-active')
        setClasseNovosPedidosAtiva('pedidos')

    }


    return (
        <div className="toda-pagina">
            <HeaderLogado />

            <div className="area-voluntario">
                {/* Historico Voluntario */}
                <div className="historico">
                    <div className="titulo">
                        <h1>Histórico de Tarefas</h1>
                    </div>
                    <div className="lista-conteudo">
                        <div onClick={AcaoBotao} className={classeCSS} >
                            <span>
                                <p>{tarefas}</p>
                            </span>

                        </div>

                        <div onClick={AcaoBotao} className={classeCSS} >
                            <span>
                                <p>{tarefas}</p>
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
                {/* Fim do Historico */}

                <div className="area-se-voluntariar">
                    <div className="titulo">
                        <h1>Tarefas</h1>
                    </div>
                    <div className="lista-conteudo">
                        <div className="paginas">
                            <button onClick={MostrarNovosPedidos} className={classeNovosPedidosAtiva}>
                                <p>Novas</p>
                            </button>
                            <button onClick={MostrarPedidosEmAndamentos} className={classePedidosEmAndamento}>
                                <p>Em andamento</p>
                            </button>

                        </div>

                        {exibirPedidos ? (
                            <div onClick={MostrarOverlay} className="conteudo-pedidos-voluntario">
                                <span >
                                    <p>Solicitação 1</p>
                                </span>

                            </div>

                        ) : null}

                        {exibirSolicitar ? (
                            <div>
                                <div className="div-pai-solicitar">
                                    <div className="pedidos-em-andamento">
                                        <div>
                                            <div onClick={DetalhesTarefas} className={emAndamentoclasseCSS}>
                                                <span >
                                                    <p>{tarefasEmAndamento}</p>
                                                </span>

                                            </div>
                                        </div>


                                        {exibirDetalhesTarefas ? (

                                            <div className="detalhes-conteudo">
                                                <div className="titulo-detalhe-voluntario">
                                                    <h4>Resumo:</h4>
                                                </div>

                                                <div className="titulo-detalhe-voluntario">
                                                    <h4>Endereço:</h4>
                                                </div>

                                                <div className="titulo-detalhe-voluntario">
                                                    <h4>Tipo de item:</h4>
                                                </div>

                                                <div className="titulo-detalhe-voluntario">
                                                    <h4>Destinatário:</h4>
                                                </div>

                                                <div className="titulo-detalhe-voluntario">
                                                    <h4>Voluntário:</h4>
                                                </div>

                                                <div className="titulo-detalhe-voluntario">
                                                    <h4>Código:</h4>
                                                </div>

                                                <div className="titulo-detalhe-voluntario">
                                                    <label> Entregue: </label>
                                                    <select name="entregue">
                                                        <option value="sim">Sim</option>
                                                        <option value="nao">Não</option>
                                                    </select>
                                                </div>

                                                <div className="botao-voltar">
                                                    <button onClick={AcaoBotaoVoltarDetalhes} className="voltar">Voltar</button>
                                                </div>
                                            </div>
                                        ) : null}
                                    </div>

                                </div>
                            </div>
                        ) : null}

                        {mostrarOverlay && <Overlay />}

                    </div>
                </div>
            </div>

        </div>
    )
}



export default Voluntario