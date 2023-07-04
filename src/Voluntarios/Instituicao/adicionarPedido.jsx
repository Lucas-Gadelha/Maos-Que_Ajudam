// import { useState } from "react"
// // import ListaPedidos from "./listadepedidos"
// import { useNavigate } from "react-router-dom"
// import HeaderInstituicao from "../../header/headerInstituicao"
// import axios from "axios"

// const AdicionarPedido = () => {
//     const navigate = useNavigate()

//     const [fecharAdicionarPedido, setFecharAdicionarPedido] = useState(false)
//     const [mostrarCampoEndereco, setMostrarCampoEndereco] = useState(false);

//     let quantidadeItens = 1

//     // Variaveis ed estado da tela de solicitação
//     const [tipo, setTipo] = useState("comida")
//     const [quantidade, setQuantidade] = useState(quantidadeItens)
//     const [beneficiario, setBeneficiario] = useState("")
//     const [detalhes, setDetalhes] = useState("")
//     const [opcaoSelecionada, setOpcaoSelecionada] = useState({ opcao1: false, opcao2: false });
//     const [endereco, setEndereco] = useState("")

//     const { opcao1, opcao2 } = opcaoSelecionada


//     function handleSubmit(event) {
//         event.preventDefault()
//         const novaSolicitacaoAdm = { tipo, quantidade, beneficiario, detalhes, opcaoSelecionada, endereco }
//         axios.post("http://localhost:3001/doacao/register", novaSolicitacaoAdm)
//             .then(
//                 (response) => {
//                     // setMostrarDetalhesSolicitacao(false)
//                     console.log(response.data)
//                     alert(`Solicitação cadastrada com sucesso!`)
                    

//                     navigate("/verPedidos")
//                 }
//             )
//             .catch(error => console.log(error))


//     }




//     const FecharAdicionarPedido = () => {
//         setFecharAdicionarPedido(true)
//         // navigate("/verPedidos")
//         console.log("clicou")
//     }

//     if (fecharAdicionarPedido === true) {
//         return null
//     }


//     const VerificacaoValorInput = (event) => {
//         const valorSelecionado = event.target.value;

//         if (valorSelecionado === 'opcao1') {
//             setOpcaoSelecionada({ ...opcaoSelecionada, opcao1: true, opcao2: false });
//         } else if (valorSelecionado === 'opcao2') {
//             setOpcaoSelecionada({ ...opcaoSelecionada, opcao1: false, opcao2: true });
//         }

//         if (valorSelecionado === 'opcao1') {
//             setMostrarCampoEndereco(false);
//         } else if (valorSelecionado === 'opcao2') {
//             setMostrarCampoEndereco(true);
//         } else {
//             setMostrarCampoEndereco(false);
//         }


//     };




//     return (
//         <div className="pagina-doar">
//             <HeaderInstituicao/>
//             <div className="realizar-doacao">
//                 <div className="titulo">
//                     <h1>Adicionar Pedido</h1>
//                 </div>
//                 <form className="conteudo-doar"  >
//                     <div className="texto-doar">
//                         <label> Qual tipo de doação você deseja realizar? </label>
//                         <select name="realizar doacao" required="required" value={tipo} onChange={(event)=>setTipo(event.target.value)}>
//                             <option value="comida"> Comida</option>
//                             <option value="roupa">Roupa</option>
//                             <option value="higiene">Itens de Higiene</option>
//                             <option value="outros">Outros</option>
//                         </select>

//                     </div>
//                     <div className="texto-doar">
//                         <label>Quantidade de itens:</label>
//                         <input className="numItens" type="number" min={1} max={50} required="required" name="quantidade" value={quantidade} onChange={(event)=>setQuantidade(event.target.value)}/>

//                     </div>
//                     <div className="texto-doar">
//                         <label>Beneficiário:</label> 
//                         <input className="nomeBeneficiario" type="text" required='required'  placeholder="Nome" name="beneficiario" value={beneficiario} onChange={(event)=>setBeneficiario(event.target.value)} />
//                     </div>
//                     <div className="escrever">
//                         <textarea placeholder="Detalhe os itens que deseja. Ex: Arroz, feijao, sal...." name="detalhes" value={detalhes} onChange={(event)=>setDetalhes(event.target.value)} ></textarea>
//                     </div>

//                     <div className="texto-doar"> 
//                         <div className="endereco">
//                             <label>
//                                 <input
//                                     type="radio"
//                                     value="opcao1"
//                                     checked={opcao1}
//                                     onChange={VerificacaoValorInput}
//                                 />
//                                 <span>Entregar no ponto de coleta um</span>
//                             </label>

//                         </div>
//                         <div className="endereco">
//                             <label>
//                                 <input
//                                     type="radio"
//                                     value="opcao2"
//                                     checked={opcao2}
//                                     onChange={VerificacaoValorInput}
//                                 />
//                                 <span>Não tenho disponibilidade para entregar, desejo informar meu endereço para coleta</span>
//                             </label>

//                             </div>
//                         {mostrarCampoEndereco && (
//                             <div className="endereco">
//                                 <label>
//                                     <span>Endereço:</span><input className="escrever-endereco" type="text" name="endereco" value={endereco} onChange={(event)=>setEndereco(event.target.value)} />
//                                 </label>

//                             </div>

//                         )}

                        
//                         <div className="todos-botoes">
//                             <div className="div-botao-2">
//                                 <button type='submit' >Confirmar</button>
//                             </div>
//                             <div className="div-botao-2">
//                                 <button type='submit' onClick={FecharAdicionarPedido} className="Cancelar">Cancelar</button>
                                
//                             </div>
//                         </div>
//                     </div>


//                 </form>

//             </div>
//             {/* {fecharAdicionarPedido && <ListaPedidos/>} */}
//         </div>
//     )
// }

// export default AdicionarPedido