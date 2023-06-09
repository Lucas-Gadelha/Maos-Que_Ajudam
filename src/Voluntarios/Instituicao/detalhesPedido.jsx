import { useState } from "react"
import './voluntarioInstituicao.css'

const DetalhesPedido = () => {
    const [fecharDetalhes, setFecharDetalhes] = useState(false)

    const FecharDetalhes = () => {
        setFecharDetalhes(true)
    }

    if(fecharDetalhes==true){
        return null
    }

    return (
        //Esse código aparece quando o administrador clica em um pedido

        <div>

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
        </div>
    )
}

export default DetalhesPedido