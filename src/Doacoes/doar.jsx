import { useNavigate, useParams } from "react-router-dom";
import HeaderLogado from "../header/headerLogado";
import Doacao from "./doacoes";
import { useState, useEffect } from "react";
import axios from "axios";
// import { useEffect } from "react";
// import { useParams } from "react-router-dom";

const Doar = () => {
    const navigate = useNavigate();
    let { id } = useParams()

    const [fecharDoacao, setFecharDoacao] = useState(false)
    // const [doacoes, setDoacoes] = useState([])

    const [mostrarCampoEndereco, setMostrarCampoEndereco] = useState(false);

    let quantidadeItens = 1

    const [tipo, setTipo] = useState("comida")
    const [quantidade, setQuantidade] = useState(quantidadeItens)
    const [beneficiario, setBeneficiario] = useState("")
    const [detalhes, setDetalhes] = useState("")
    const [opcaoSelecionada, setOpcaoSelecionada] = useState({ opcao1: false, opcao2: false });
    const [endereco, setEndereco] = useState("")

    const { opcao1, opcao2 } = opcaoSelecionada

    

    if (fecharDoacao == true) {
        return null
    }


    function handleSubmit(event) {
        event.preventDefault()
        const novaDoacao = { tipo, quantidade, beneficiario, detalhes, opcaoSelecionada, endereco }
        axios.post("http://localhost:3001/doar/register", novaDoacao)
            .then(
                (response) => {
                    // console.log(response.data)
                    alert(`Doacao concluida!`)
                    navigate("/doacoes")
                    
                }
            )
            .catch(error => console.log(error))


    }



    
    


   


    const FecharDoacao = () => {

        setFecharDoacao(true)
        navigate('/doacoes')
    }




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



    return (
        <div className="pagina-doar">
            <HeaderLogado/>
            
            <div className="realizar-doacao">
                <div className="titulo">
                    <h1>Realizar doação</h1>
                </div>
                <form className="conteudo-doar" onSubmit={handleSubmit} >
                    <div className="texto-doar">
                        <label> Qual tipo de doação você deseja realizar?</label>
                        <select name="realizar doacao" required="required" value={tipo} onChange={(event) => setTipo(event.target.value)}>
                            <option value="Comida" > Comida</option>
                            <option value="Roupa">Roupa</option>
                            <option value="Higiene">Itens de Higiene</option>
                            <option value="Outros">Outros</option>
                        </select>

                    </div>
                    <div className="texto-doar">
                        <label>Quantidade de itens: </label>
                        <input className="numItens" type="number" min={1} max={300} name="quantidade" value={quantidade} onChange={(event) => setQuantidade(event.target.value)} required="required"/>

                    </div>
                    <div className="texto-doar">
                        <label>Beneficiário:</label> 
                        <input type="text" className="nomeBeneficiario" name="beneficiario" value={beneficiario} onChange={(event) => setBeneficiario(event.target.value)} />
                        {/* <span name="beneficiario" value={beneficiario} onChange={(event) => setBeneficiario(event.target.value)} /> */}
                    </div>
                    <div className="escrever">
                        <textarea placeholder="Detalhe os itens da sua doação. Ex: Arroz, feijao, sal...."  name="detalhes" value={detalhes} onChange={(event)=>setDetalhes(event.target.value)}  ></textarea>
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
                                <span>Entregar no ponto de coleta um</span>
                            </label>

                        </div>
                        <div className="endereco">
                            <label>
                                <input
                                    type="radio"
                                    value="opcao2"
                                    name="opcao2"
                                    checked={opcao2}
                                    onChange={VerificacaoValorInput}
                                />
                                <span>Não tenho disponibilidade para entregar, desejo informar meu endereço para coleta</span>
                            </label>

                        </div>
                        {mostrarCampoEndereco && (
                            <div className="endereco">
                                <label>
                                    <span>Endereço:</span><input className="escrever-endereco" type="text"  value={endereco} name="endereco" onChange={(event) => setEndereco(event.target.value)} />
                                </label>

                            </div>

                        )}
                        
                        <div className="div-botoes">
                            <div className="div-botao">
                                <button type='submit'   className="Confirmar">Confirmar</button>
                            </div>
                            <div className="div-botao">
                                <button onClick={FecharDoacao} className="Cancelar">Cancelar</button>
                            </div>
                        </div>
                    </div>


                </form>

            </div>
            {fecharDoacao && <Doacao />}
        </div>
    )
}

export default Doar