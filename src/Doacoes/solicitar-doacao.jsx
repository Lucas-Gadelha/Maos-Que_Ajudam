// import { useNavigate } from "react-router-dom";
// import HeaderLogado from "../header/headerLogado";
// import Doacao from "./doacoes"
// import { useState } from "react"

// const Solicitar = () => {
//     const navigate = useNavigate()
    
//     const [fecharDoacao, setFecharDoacao] = useState(false)
//     const [opcaoSelecionada, setOpcaoSelecionada] = useState('');
//     const [mostrarCampoEndereco, setMostrarCampoEndereco] = useState(false);

//     const FecharDoacao = () => {
//         setFecharDoacao(true)
//         navigate('/doacoes')
//     }

//     if (fecharDoacao == true) {
//         return null
//     }


//     const VerificacaoValorInput = (event) => {
//         const valorSelecionado = event.target.value;
//         setOpcaoSelecionada(valorSelecionado);

//         if (valorSelecionado === 'opcao3') {
//             setMostrarCampoEndereco(true);
//         } else {
//             setMostrarCampoEndereco(false);
//         }
//     };


//     return (
//         <div className="pagina-doar">
//             <HeaderLogado/>
//             <div className="realizar-doacao">
//                 <div className="titulo">
//                     <h1>Solicitar doação</h1>
//                 </div>
//                 <div className="conteudo-doar">
//                     <div className="texto-doar">
//                         <label> Qual tipo de doação você deseja solicitar? </label>
//                         <select name="solicitar doacao" required="required">
//                             <option value="comida"> Comida</option>
//                             <option value="roupa">Roupa</option>
//                             <option value="higiene">Itens de Higiene</option>
//                             <option value="outros">Outros</option>
//                         </select>

//                     </div>
//                     <div className="texto-doar">
//                         <label>Quantidade de itens:</label>
//                         <input className="numItens" type="number" min={1} max={50} required="required"/>

//                     </div>
//                     <div className="texto-doar">
//                         <label>Beneficiário:</label>
//                         <input className="nomeBeneficiario" type="text" required='required' />

//                     </div>
//                     <div className="escrever">
//                         <textarea></textarea>
//                     </div>

//                     <div className="texto-doar">
//                         <div className="endereco">
//                             <label>
//                                 <input
//                                     type="radio"
//                                     value="opcao1"
//                                     checked={opcaoSelecionada === 'opcao1'}
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
//                                     checked={opcaoSelecionada === 'opcao2'}
//                                     onChange={VerificacaoValorInput}
//                                 />
//                                 <span>Entregar no ponto de coleta um</span>
//                             </label>

//                         </div>
//                         <div className="endereco">
//                             <label>
//                                 <input
//                                     type="radio" 
//                                     value="opcao3" 
//                                     checked={opcaoSelecionada === 'opcao3'}
//                                     onChange={VerificacaoValorInput}
//                                 /> 
//                                 <span>Não tenho disponibilidade para entregar, desejo informar meu endereço para coleta</span>
//                             </label>

//                         </div>
//                         {mostrarCampoEndereco && (
//                             <div className="endereco">
//                                 <label>
//                                     <span>Endereço:</span><input className="escrever-endereco" type="text" />
//                                 </label>

//                             </div>

//                         )}
//                         {/* <div>
//                             <div className="data-hora">
//                                 <div className="data">
//                                     <label>
//                                         <span>Data:</span><input type="date" />
//                                     </label>

//                                 </div>
//                                 <div className="hora">
//                                     <label>
//                                         <span>Horário:</span><input type="time" />
//                                     </label>

//                                 </div>
//                             </div>
//                         </div> */}
//                         <div className="div-botoes">
//                             <div className="div-botao">
//                                 <span type='submit' onClick={FecharDoacao} className="Confirmar">Confirmar</span>
//                             </div>
//                             <div className="div-botao">
//                                 <span type='submit' onClick={FecharDoacao} className="Cancelar">Cancelar</span>
//                             </div>
//                         </div>
//                     </div>


//                 </div>

//             </div>
//             {fecharDoacao && <Doacao />}
//         </div>
//     )
// }

// export default Solicitar