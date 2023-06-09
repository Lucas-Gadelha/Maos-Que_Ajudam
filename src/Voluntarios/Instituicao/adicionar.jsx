
import { useState } from "react"
import VoluntarioPaginaInstituicao from "./voluntarioInstituicao";

const  Adicionar= () => {
    const [fecharAdicionar, setFecharAdicionar] = useState(false)

    const FecharAdicionar = () => {
        setFecharAdicionar(true)
    }

    if (fecharAdicionar == true) {
        return null
    }

    return (
        <div className="pagina-doar">
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
                                <span type='submit' onClick={FecharAdicionar} className="Confirmar">Confirmar</span>
                            </div>
                            <div className="div-botao">
                                <span type='submit' onClick={FecharAdicionar} className="Cancelar">Cancelar</span>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
            {fecharAdicionar && <VoluntarioPaginaInstituicao />}
        </div>
    )
}

export default Adicionar