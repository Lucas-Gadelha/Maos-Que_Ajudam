import HeaderLogado from "../header/headerLogado"
import './doacoes.css'

const Doacao = () => {
    return (
        <div className="toda-pagina">
            <HeaderLogado />

            <div className="doacoes">
                <div className="historico">
                    <div className="titulo">
                        <h1>Histórico de Doações</h1>
                    </div>
                    <div className="lista-conteudo">
                        <div className="conteudo">
                            <span>
                                <p>Doação 1</p>
                            </span>
                            
                        </div>
                        <div className="detalhes-conteudo">
                            <p>djddfjf</p>
                        </div>
                    </div>
                </div>
                <div className="area-doacao">
                    <div className="titulo">
                        <h1>Doações</h1>
                    </div>
                    <div className="lista-conteudo">
                        <div className="paginas">
                            <button className="pedidos">
                                <p>Pedidos</p>
                            </button>
                            <button className="solicitar">
                                <p>Solicitar</p>
                            </button>

                        </div>
                        <div className="conteudo">
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