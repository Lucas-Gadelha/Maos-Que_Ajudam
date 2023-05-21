import React, { useState } from 'react'
// import {fontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import { faGoogle, faFacebook, faApple } from '@fortawesome/free-brands-svg-icons';
import facebook from '../icones/facebook.png'
import google from '../icones/google.png'
import apple from '../icones/apple.png'
import imagem from '../imagens/imagem.png'

import '../App.css'
import '../fonts.css'
import Header from '../header/header'




const Login = () => {

    // const MostrarEsconderSenha = () => {
    //     const [mostrarSenha, setMostrarSenha] = useState(false)

    //     const AlternarVisibilidadeSenha = () => {
    //         setMostrarSenha(!mostrarSenha);
    //     }
    // }

    return (
        <div className='tudo'>
            <Header />
            <div className='principal-login'>

                <div className='bloco-form' >
                    <div className='img'>
                        <img src={imagem} alt="" />
                    </div>
                    <div className='form'>
                        <h1 className='centralizar'>Seja bem-vindo!</h1>
                        <form >
                            <input className='input' type="email" placeholder='Insira seu e-mail' /> <br />
                            <input className='input' type='password' placeholder='Insira sua senha' />
                            {
                               /* <input className='input' type={mostrarSenha ? 'text' : 'password'} placeholder='Insira sua senha' />
                                 {mostrarSenha ? (
                                <VisibilityOff onClick={AlternarVisibilidadeSenha} />
                            ) : (
                                <Visibility onClick={AlternarVisibilidadeSenha} />
                            )} */}

                        </form>
                        <div className='esqueceu-senha'>
                            <a href="">Esqueceu a senha?</a>
                        </div>
                        <button className='botao'>
                            <p>Enviar</p>
                        </button>
                        <div className='cadastrese'>
                            <p>Ainda não tem conta? <a href="">Cadastre-se</a> </p>
                        </div >
                        <div className='entrecom'>
                            <p>Entre com</p>
                            <div className='todos-icones'>
                                <button className='fundo-icone'>
                                    <div>
                                        <img className='icones' src={facebook} />
                                    </div>

                                </button>
                                <button className='fundo-icone' >
                                    <div>
                                        <img className='icone-google' src={google} />

                                    </div>
                                </button>
                                <button className='fundo-icone' >
                                    <div>
                                        <img className='icones' src={apple} />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    )
}

export default Login