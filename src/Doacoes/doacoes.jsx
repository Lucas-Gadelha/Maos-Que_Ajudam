import { useState } from "react"
import HeaderLogado from "../header/headerLogado"
import './doacoes.css'

const Doacao = () => {
    const [doacoes, setDoacoes] = useState('Doacao 1')
    const [classeCSS, setClasseCSS] = useState('conteudo-historico-active')
    const [exibirDetalhes, setExibirDetalhes] = useState(false);


    const AcaoBotao = () => {
        setDoacoes('')
        setClasseCSS('')
        setExibirDetalhes(true)
    }

    const AcaoBotaoVoltar = () => {
        setDoacoes('Doacao 1')
        setExibirDetalhes(false);
        setClasseCSS('conteudo-historico-active')
      };

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
                    <div className="lista-conteudo">
                        <div className="paginas">
                            <button className="pedidos-active">
                                <p>Pedidos</p>
                            </button>
                            <button className="solicitar">
                                <p>Solicitar</p>
                            </button>

                        </div>
                        <div className="conteudo-pedidos">
                            <span>
                                <p>Solicitação 1</p>
                            </span>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}



export default Doacao