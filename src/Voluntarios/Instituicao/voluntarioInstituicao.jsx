import { useState } from 'react';
import HeaderInstituicao from '../../header/headerInstituicao'
// import DetalhesPedido from './detalhesPedido';
import './voluntarioInstituicao.css'
// import Adicionar from './adicionar';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import moment from 'moment/moment';
import { useEffect } from 'react';

const VoluntarioPaginaInstituicao = () => {
    const navigate = useNavigate()

    const [mostrarDetalhes, setMostrarDetalhes] = useState(false)
    const [mostrarAdicionar, setMostrarAdicionar] = useState(false)


    

    let quantidadeItens = 1

    // Variaveis ed estado da tela de solicitação
    const [titulo, setTitulo] = useState("")
    const [endereco, setEndereco] = useState("")
    const [dataInicial, setDataInicial] = useState("")
    const [dataFinal, setDataFinal] = useState("");
    const [organizador, setOrganizador] = useState("")
    const [detalhes, setDetalhes] = useState("")

    const [atividades, setAtividades] = useState([])


    // const handleDataInicialChange = (event) => {
    //     const selectedDate = event.target.value;
    //     const formattedDate = moment(selectedDate).format('YYYY-MM-DD');
    //     setDataInical(formattedDate);
    //   };

    //   const handleDataFinalChange = (event) => {
    //     const selectedDate = event.target.value;
    //     const formattedDate = moment(selectedDate).format('YYYY-MM-DD');
    //     setDataFnal(formattedDate);
    //   };




    function handleSubmit(event) {
        event.preventDefault()
        const novaAtividade = { titulo, endereco, dataInicial, dataFinal, organizador, detalhes }
        axios.post("http://localhost:3001/atividade/register", novaAtividade)
            .then(
                (response) => {
                    // setMostrarDetalhesSolicitacao(false)
                    console.log(response.data.dataInical)
                    console.log(response.data.dataFianal)
                    alert(`Solicitação cadastrada com sucesso!`)


                    navigate("/voluntarioAdmin")
                }
            )
            .catch(error => console.log(error))


    }

    useEffect(
        () => {
            axios.get("http://localhost:3001/atividade/listar")
                .then(
                    (response) => {
                        // console.log(response)
                        setAtividades(response.data);

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

    const MostrarAdicionar = () => {
        setMostrarAdicionar(true)
        // navigate("/adicionarAtividade")
    }
    const FecharAdicionar = () => {
        setMostrarAdicionar(false)
        // navigate("/adicionarAtividade")
    }

    return (
        <div className="pagina-voluntario-instituicao">
            <HeaderInstituicao />
            <div className='conteudo-pagina-voluntario-instituicao'>
                <div className='titulo-geral-tabela'>
                    <h1>Lista de Atividades</h1>
                </div>
                <div className="tabela">
                    <div className="todos-os-titulos">
                        <div className="titulo-tabela">
                            <div className='nome-titulo'>
                                <p>Atividade</p>
                            </div>
                            <div className='nome-titulo'>
                                <p>Voluntario</p>
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
                            atividades.map(
                                (atividade) => {
                                    return (

                                        <div className="linha-itens" >
                                            <div className="item" onClick={MostrarDetalhes}>
                                                <p>{atividade.titulo}</p>
                                            </div>
                                            <div className="item">
                                                <p>{atividade.endereco}</p>
                                            </div>
                                            <div className="item">
                                                <p>{atividade.organizador}</p>
                                            </div>
                                            <div className="item">
                                                <p>Aguardando</p>
                                            </div>
                                            <div className="item-data">
                                                <p>{atividade.dataInicial}</p>
                                            </div>

                                        </div>



                                    )
                                }
                            )
                        }

                       



                    </div>
                </div>

                <div className='botao-adicionar'>
                    <span onClick={MostrarAdicionar} >Adicionar</span>
                </div>

            </div>
            {/* {mostrarDetalhes && <DetalhesPedido />} */}
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
            {mostrarAdicionar ? (
                <div className="pagina-adicionar-atividade">
                    <div className="realizar-doacao">
                        <div className="titulo">
                            <h1>Adicionar Atividade</h1>
                        </div>
                        <form className="conteudo-adicionar" onSubmit={handleSubmit} >
                            <div className="input-adicionar">
                                <label htmlFor="">Adicione o titulo da sua atividade ou evento</label>
                                <textarea placeholder="Atividade" name='titulo' value={titulo} onChange={(event) => setTitulo(event.target.value)} required="required" ></textarea>

                            </div>
                            <div className="input-adicionar">
                                <label htmlFor="">Adicione o endereco da atividade ou evento</label>
                                <textarea placeholder="Endereço" name='endereco' value={endereco} onChange={(event) => setEndereco(event.target.value)} required="required" ></textarea>
                            </div>
                            <div id="input-datas">
                                <div className="bloco-input-1">
                                    <label htmlFor="">Data Inicial</label>
                                    <input type='text' name='dataInicial' value={dataInicial} onChange={(event) => setDataInicial(event.target.value)} placeholder='21/12/2002' min={10} max={10} required="required" ></input>
                                </div>
                                <div className="bloco-input">
                                    <label htmlFor="">Data Final</label>
                                    <input type='text' name='dataFinal' value={dataFinal} onChange={(event) => setDataFinal(event.target.value)}  placeholder='21/12/2002' min={10} max={10}  required="required" ></input>
                                </div>
                                <div className="bloco-input">
                                    <label htmlFor="">Nome do Organizador do Evento</label>
                                    <input type='text' placeholder="Responsavel pela solicitação" name='organizador' value={organizador} onChange={(event) => setOrganizador(event.target.value)} required="required"  ></input>
                                </div>
                            </div>
                            <div className="input-adicionar-detalhes">
                                Informações Adicionais
                                <textarea placeholder="Descrição da Atividade" name='detalhes' value={detalhes} onChange={(event) => setDetalhes(event.target.value)}  ></textarea>
                            </div>

                            <div className="bloco-botoes">

                                <div className="div-botoes">
                                    <div className="div-botao">
                                        <button type='submit' className="Confirmar">Confirmar</button>
                                    </div>
                                    <div className="div-botao">
                                        <button type='submit' onClick={FecharAdicionar} className="Cancelar">Cancelar</button>
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


export default VoluntarioPaginaInstituicao