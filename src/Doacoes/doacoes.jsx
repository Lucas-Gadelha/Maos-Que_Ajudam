// AIzaSyBcul-fdwyBjSUDN7c8NtMYTbxuBm4rxh8
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import HeaderLogado from "../header/headerLogado"
import axios from "axios"
import { useEffect } from "react"
import './doacoes.css'
import Login from "../login/login"
import Overlay from "./doacoes-solicitar"
import Solicitar from "./solicitar-doacao"
import DetalhesSolicitacao from "./detalhes-solicitacao"
import { useParams } from "react-router-dom"
// import Doar from "./doar"

const Doacao = () => {
    const navigate = useNavigate();
    let { id } = useParams()

    const [todasAsDoacoes, setTodasAsDoacoes] = useState([])
    const [doacoes, setDoacoes] = useState([])
    const [historico, setHistorico] = useState([])
    const [classeCSS, setClasseCSS] = useState('conteudo-historico-doacao-active')
    const [exibirDetalhes, setExibirDetalhes] = useState(false);

    const [exibirPedidos, setExibirPedidos] = useState(true);
    const [exibirSolicitar, setExibirSolicitar] = useState(false);

    const [classePedidoAtiva, setClassePedidoAtiva] = useState('pedidos-doacao-active');
    const [classeSolicitarAtiva, setClasseSolicitarAtiva] = useState('solicitar-doacao');

    const [botaoSolicitar, setBotaoSolicitar] = useState(false)

    const [mostrarOverlay, setMostrarOverlay] = useState(false);

    const [mostrarDetalhesSolicitacao, setMostrarDetalhesSolicitacao] = useState(false);


    const [mostrarCampoEndereco, setMostrarCampoEndereco] = useState(false);

    const [doar, setDoar] = useState(false)

    let quantidadeItens = 1

    // Variaveis ed estado da tela de solicitação
    const [tipo, setTipo] = useState("comida")
    const [quantidade, setQuantidade] = useState(quantidadeItens)
    const [beneficiario, setBeneficiario] = useState("")
    const [detalhes, setDetalhes] = useState("")
    const [opcaoSelecionada, setOpcaoSelecionada] = useState({ opcao1: false, opcao2: false });
    const [endereco, setEndereco] = useState("")

    const { opcao1, opcao2 } = opcaoSelecionada

    const [login, setLogin] = useState('');




    function handleSubmit(event) {
        const novaSolicitacao = { tipo, quantidade, beneficiario, detalhes, opcaoSelecionada, endereco }
        axios.post("http://localhost:3001/doacao/register", novaSolicitacao)
            .then(
                (response) => {
                    setMostrarDetalhesSolicitacao(false)
                    alert(`Solicitação concluida!`)

                    navigate("/doacoes")
                }
            )
            .catch(error => console.log(error))


    }





    // const usuarioAutenticado = usuarios.find(
    //     (usuario) => usuario.login === login && usuario._id === login && usuario.senha === senha
    //   );

    useEffect(
        () => {
            axios.get("http://localhost:3001/usuario/listar")
                .then(
                    (response) => {
                        // console.log(response.data._id)
                        setLogin(response.data)

                    }
                )
                .catch(error => console.log(error))
        }
        ,
        []
    )


    useEffect(
        () => {
            axios.get("http://localhost:3001/doacao/listar")
                .then(
                    (response) => {
                        // console.log(response)
                        const todasAsDoacoes = response.data;
                        const doacoesDoUsuario = todasAsDoacoes.filter((doacao) => doacao._id === login);

                        setDoacoes(doacoesDoUsuario);
                        setTodasAsDoacoes(todasAsDoacoes);

                    }
                )
                .catch(error => console.log(error))
        }
        ,
        []
    )



    useEffect(
        () => {
            axios.get("http://localhost:3001/doar/listar")
                .then(
                    (response) => {
                        setHistorico(response.data);
                        // setTodasAsDoacoes(todasAsDoacoes);

                    }
                )
                .catch(error => console.log(error))
        }
        ,
        []
    )

    //FUNÇÃO PRA TENTAR PEGAR A DOCACAO DE ACORDO COM O ID DO USUARIO

    const autenticar = (event) => {
        event.preventDefault();
        const IdAutenticado = todasAsDoacoes.find(
            (doacao) => doacao._id === doacao.tipo
        );

        if (IdAutenticado) {
            console.log("foi")
        } else {
            // Autenticação falhou, exibir mensagem de erro
            console.log("nao deu")
        }

    };


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








    const AbrirPaginaDoar = (event) => {
        event.preventDefault()
        setDoar(true)
    }

    const FecharPaginaDoar = () => {
        setDoar(false)
    }







    const AcaoBotao = () => {
        setDoacoes('')
        setClasseCSS('')
        setExibirDetalhes(true)
    }

    const AcaoBotaoVoltar = () => {
        setDoacoes([])
        setExibirDetalhes(false);
        setClasseCSS('conteudo-historico-doacao-active')
    };

    // Mostrar detalhes dos pedidos que o beneficiario fez
    const MostrarOverlay = () => {
        // setMostrarOverlay(true)
        navigate("/doar")
        // navigate("/detalhesPedidos")
    }

    const FecharOverlay = () => {
        setMostrarOverlay(false)
        // console.log('Clicou')


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

    // função do botao solicitar
    const AbrirPaginadeSolicitacao = () => {
        setBotaoSolicitar(true)
        // navigate("/solicitar")
    }

    const FecharPaginadeSolicitacao = () => {
        setBotaoSolicitar(false)
        // navigate("/solicitar")
    }

    const MostrarDetalhesSolicitacao = () => {
        setMostrarDetalhesSolicitacao(true)
        // navigate("/detalhesMinhaSolicitacao")
    }

    const FecharDetalhesSolicitacao = () => {
        setMostrarDetalhesSolicitacao(false)
        // navigate("/detalhesMinhaSolicitacao")
    }







    return (
        <div className="toda-pagina">
            <HeaderLogado />
            <div >
                <div className="frase" >
                    <div className="Frase-Doar" >
                        <h2 className="largura-da-frase">
                            Doar é estender a mão para o próximo e criar uma corrente de amor que se multiplica,
                            de ação em ação, e faz a diferença no mundo. Seja um transformador do futuro!
                            <span className="botao-doar-aqui" onClick={MostrarOverlay} >CLIQUE AQUI PARA DOAR</span>
                        </h2>

                    </div>

                </div>

                <div className="doacoes">

                    <div className="historico">
                        <div className="titulo">
                            <h1>Histórico de Doações</h1>
                        </div>
                        <div className="lista-conteudo-historico">
                            {
                                historico.map(
                                    (historico) => {
                                        return (
                                            
                                                <div onClick={AcaoBotao}  className={classeCSS} key={historico._id} >
                                                    <span>
                                                    {!exibirDetalhes && <p>{`Doação de ${historico.tipo}`}</p>}


                                                    </span>

                                                </div>

                                           

                                        )
                                    }
                                )
                            }


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

                                    todasAsDoacoes.map(
                                        (doacao) => {
                                            return (
                                                <div>
                                                    <div onClick={MostrarOverlay} className="conteudo-pedidos" key={doacao._id} >
                                                        <div className="solicitacoes">
                                                            <p>{`Solicitação de ${doacao.tipo}`}</p>


                                                        </div>

                                                    </div>

                                                </div>

                                            )
                                        }
                                    )



                                ) : null}

                                {exibirSolicitar ? (


                                    <div className="conteudo-solicitar-geral">


                                        <div >
                                            <div className="titulo-solicitar-doacao">
                                                <p>Solicitações em Espera</p>
                                            </div>
                                            {doacoes.map(
                                                (doacao) => {
                                                    return (
                                                        <div className="conteudo-solicitar" key={doacao._id}>
                                                            <span onClick={MostrarDetalhesSolicitacao} >
                                                                <p>{doacao.tipo}</p>

                                                            </span>


                                                        </div>

                                                    )
                                                }
                                            )
                                            }
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

                        </div>
                    </div>
                </div>
            </div>

            {mostrarOverlay ? (
                <div className='tudo-detalhes-solicitar' >

                    <div className='overlay'>
                        <div className='detalhes-pedidos-pag-doacoes'>
                            <div className="titulo">
                                <h1>Detalhes</h1>
                            </div>
                            <div className="conteudo-detalhes">

                                <div className="texto-detalhes"  >
                                    <h4>Resumo: <input type="text" name="tipo" value={tipo} onChange={(event) => setTipo(event.target.value)} /> </h4>
                                </div>
                                <div className="texto-detalhes">
                                    <h4>Endereço: <input type="text" name="endereco" value={endereco} onChange={(event) => setEndereco(event.target.value)} /> </h4>
                                </div>
                                <div className="texto-detalhes">
                                    <h4>Tipo de Item:  <input type="text" name="tipo" value={tipo} onChange={(event) => setTipo(event.target.value)} /> </h4>
                                </div>
                                <div className="texto-detalhes">
                                    <h4>Destinatário: <input type="text" name="beneficiario" value={beneficiario} onChange={(event) => setBeneficiario(event.target.value)} /> </h4>
                                    {console.log(beneficiario)}
                                </div>
                                <div className="botoes">
                                    <button onClick={AbrirPaginaDoar} className="botao-doar">Doar</button>
                                    <button onClick={FecharOverlay} className="botao-ok">OK</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}



            {/* BLOCO QUE MOSTRA OS DETALHES DA SOLICITAÇÃO DO BENEFICIARIO QUANDO ELE CLICA EM ALGUMA SOLICITAÇÃO QUE ESTÁ EM SOLICITAÇÕES SOLOCITADAS */}
            {mostrarDetalhesSolicitacao ? (
                <div className='tudo-detalhes-solicitar' >

                    <div className='overlay'>

                        <div className='detalhes-solicitacoes'>
                            <div className="titulo">
                                <h1>Detalhes</h1>
                            </div>
                            <div className="conteudo-detalhes">
                                <div className="texto-detalhes">
                                    <h4>Resumo:</h4>
                                </div>
                                <div className="texto-detalhes">
                                    <h4>Endereço:</h4>
                                </div>
                                <div className="texto-detalhes">
                                    <h4>Tipo de Item:</h4>
                                </div>
                                <div className="texto-detalhes">
                                    <h4>Destinatário:</h4>
                                </div>
                                <div className="texto-detalhes">
                                    <h4>Volunatario:</h4>
                                </div>
                                <div className="texto-detalhes">
                                    <h4>Código:</h4>
                                </div>
                                <div className="botoes">
                                    <button onClick={FecharDetalhesSolicitacao} className="botao-ok">OK</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}

            {botaoSolicitar ? (
                <div className="pagina-solicitar">

                    <div className="realizar-doacao">
                        <div className="titulo">
                            <h1>Solicitar doação</h1>
                        </div>
                        <form className="conteudo-doar" onSubmit={handleSubmit} >
                            <div className="texto-doar">
                                <label> Qual tipo de doação você deseja solicitar? </label>
                                <select name="tipo" required="required" value={tipo} onChange={(event) => setTipo(event.target.value)} >
                                    <option value="Comida"> Comida</option>
                                    <option value="Roupa">Roupa</option>
                                    <option value="Higiene">Itens de Higiene</option>
                                    <option value="Outros">Outros</option>
                                </select>

                            </div>
                            <div className="texto-doar">
                                <label>Quantidade de itens:</label>
                                <input className="numItens" name="quantidade" value={quantidade} type="number" min={1} max={50} required="required" onChange={(event) => setQuantidade(event.target.value)} />

                            </div>
                            <div className="texto-doar">
                                <label>Beneficiário:</label>
                                <input className="nomeBeneficiario" name="beneficiario" value={beneficiario} type="text" required='required' onChange={(event) => setBeneficiario(event.target.value)} />

                            </div>
                            <div className="escrever">
                                <textarea name="detalhes" value={detalhes} onChange={(event) => setDetalhes(event.target.value)} ></textarea>
                            </div>

                            <div className="texto-doar">
                                <div className="endereco">
                                    <label>
                                        <input
                                            type="radio"
                                            value="opcao1"
                                            name="opcao1"
                                            checked={opcao1}
                                            onChange={VerificacaoValorInput}
                                        />
                                        <span>Retirar na Rua Dr. Rui Maia</span>
                                    </label>

                                </div>
                                {/* <div className="endereco">
                                    <label>
                                        <input
                                            type="radio"
                                            value="opcao2"
                                            checked={opcaoSelecionada === 'opcao2'}
                                            onChange={VerificacaoValorInput}
                                        />
                                        <span>Retirar no ponto de coleta dois</span>
                                    </label>

                                </div> */}
                                <div className="endereco">
                                    <label>
                                        <input
                                            type="radio"
                                            value="opcao2"
                                            name="opcao2"
                                            checked={opcao2}
                                            onChange={VerificacaoValorInput}
                                        />
                                        <span>Não tenho disponibilidade para retirar, desejo informar meu endereço para entrega</span>
                                    </label>

                                </div>
                                {mostrarCampoEndereco && (
                                    <div className="endereco">
                                        <label>
                                            <span>Endereço:</span><input className="escrever-endereco" type="text" value={endereco} name="endereco" onChange={(event) => setEndereco(event.target.value)} />
                                        </label>

                                    </div>

                                )}
                                {/* <div>
                            <div className="data-hora">
                                <div className="data">
                                    <label>
                                        <span>Data:</span><input type="date" />
                                    </label>

                                </div>
                                <div className="hora">
                                    <label>
                                        <span>Horário:</span><input type="time" />
                                    </label>

                                </div>
                            </div>
                            </div> */}
                                <div className="div-botoes">
                                    <div className="div-botao">
                                        <button type='submit' className="Confirmar">Confirmar</button>
                                    </div>
                                    <div className="div-botao">
                                        <button onClick={FecharPaginadeSolicitacao} className="Cancelar">Cancelar</button>
                                    </div>
                                </div>
                            </div>


                        </form>

                    </div>
                    {/* {fecharDoacao && <Doacao />} */}
                </div>
            ) : null}


        </div>
    )
}



export default Doacao