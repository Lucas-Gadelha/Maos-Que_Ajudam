import { useNavigate } from 'react-router-dom'
import HeaderLogado from '../header/headerLogado'
import './voluntarios.css'
// import Doar from './doar'
// import Doacao from './doacoes'
import { useState } from "react"

const OverlayVoluntario = () => {
    const navigate = useNavigate()
    const [fecharOverlay, setFecharOverlay] = useState(false)
    // const [doar, setDoar] = useState(false)

    const FecharOverlay = () => {
        setFecharOverlay(true)
        navigate("/seja-um-voluntario")
    }

    if(fecharOverlay==true){
        return null
    }

    return (
        //Esse código aparece quando o voluntário clica em uma tarefa, para colocar a data e a hora que vai fazer a tarefa. Tem a opção confirmar ou cancelar

        <div>

            <div className='overlay-voluntarios'>
                <HeaderLogado/>
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
                            <h4>Código:</h4>
                        </div>
                        <div className="texto-detalhes">
                            <label>Voluntario:</label>
                            <input type="text" placeholder='Escreva seu nome' />
                        </div>
                       
                        <div className="texto-detalhes">
                            <h4 className='data-voluntario'>
                                <label>
                                    <span>Que dia voce gostaria de fazer a entrega? </span><input type='date'></input>
                                </label>
                            </h4>
                        </div>
                        <div className="texto-detalhes">
                            <h4>
                                <label  className='hora-voluntario' >
                                    <span>Que horas voce gostaria de fazer a entrega? </span><input type='time'></input>
                                </label>
                            </h4>
                        </div>
                    
                        <div className="botoes">
                            <button onClick={FecharOverlay} className="Confirmar"><p>Confirmar</p></button>
                            <button onClick={FecharOverlay} className="Cancelar"><p>Cancelar</p></button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default OverlayVoluntario