
import { useState } from "react"
import VoluntarioPaginaInstituicao from "./voluntarioInstituicao";
// import Header from "../../header/header";
import { useNavigate } from "react-router-dom";
import HeaderInstituicao from "../../header/headerInstituicao";
import './voluntarioInstituicao'

const  Adicionar= () => {
    const navigate = useNavigate()
    const [fecharAdicionar, setFecharAdicionar] = useState(false)

    const FecharAdicionar = () => {
        setFecharAdicionar(true)
        navigate("/voluntarioAdmin")
    }

    if (fecharAdicionar == true) {
        return null
    }

    return (
        <div className="pagina-doar">
            <HeaderInstituicao/>
            <div className="realizar-doacao">
                <div className="titulo">
                    <h1>Adicionar Atividade</h1>
                </div>
                <div className="conteudo-adicionar">
                    <div className="input-adicionar">
                        <textarea placeholder="Atividade"></textarea>  

                    </div>
                    <div className="input-adicionar">
                        <textarea placeholder="Endereço"></textarea>
                    </div>
                    <div id="input-datas">
                        <div className="bloco-input-1">
                            <input type='date' ></input>
                        </div>
                        <div className="bloco-input">
                            <input type='date' ></input>
                        </div>
                        <div className="bloco-input">
                            <input type='text' placeholder="Responsavel pela solicitação" ></input>
                        </div>
                    </div>
                    <div className="input-adicionar-detalhes">
                        <textarea placeholder="Descrição da Atividade"></textarea>
                    </div>

                    <div className="bloco-botoes">

                        <div className="div-botoes">
                            <div className="div-botao">
                                <button type='submit' onClick={FecharAdicionar} className="Confirmar">Confirmar</button>
                            </div>
                            <div className="div-botao">
                                <button type='submit' onClick={FecharAdicionar} className="Cancelar">Cancelar</button>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
            {/* {fecharAdicionar && <VoluntarioPaginaInstituicao />} */}
        </div>
    )
}

export default Adicionar