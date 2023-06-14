import { useNavigate } from 'react-router-dom'
import HeaderLogado from '../header/headerLogado'
import './doacoes.css'
// import Doar from './doar'
// import Doacao from './doacoes'
import { useState } from "react"

const DetalhesSolicitacao = () => {
    const navigate = useNavigate()

    const [fecharOverlay, setFecharOverlay] = useState(false)

    const FecharOverlay = () => {
        setFecharOverlay(true)
        navigate("/doacoes")
    }

    if(fecharOverlay==true){
        return null
    }


    return (
        <div className='tudo-detalhes-solicitar' >
            <HeaderLogado/>
            <div className='overlay'>
                {/* <div className='header'> */}
                    

                {/* </div> */}
                <div className='detalhes-pedidos'>
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
                            <button onClick={FecharOverlay} className="botao-ok">OK</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default DetalhesSolicitacao