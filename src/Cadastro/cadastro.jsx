import { useState } from 'react'

import '../App.css'
import '../fonts.css'
import Header from '../header/header'
import './cadastro.css'

import CriarConta from './contaCriada'



const Cadastro = () => {

    const [AbrirModal, setAbrirModal] = useState(false)
    
    return (
        <div className='tudo'>
            <Header />
            <div className='principal-cadastro'>

                <div className='campos'>
                    <div className='cadastre-se'>Cadastre-se</div> <br />
                        <form >
                            <div className='campo-titulo'>Nome Completo</div>
                            <input className='input' type="name" placeholder='Insira seu Nome Completo' /> <br /> <br />
                            <div className='campo-titulo'>E-mail</div>
                            <input className='input' type='email' placeholder='Insira seu melhor e-mail' /> <br /> <br />
                            <div className='campo-titulo'>Senha</div>
                            <input className='input' type='password' placeholder='Crie uma senha forte' /> <br /> <br />
                            <div className='campo-titulo'>Repita Senha</div>
                            <input className='input' type='password' placeholder='Repita a senha' /> <br />    
                        </form>
                        <button onClick={() => setAbrirModal(true)} className='botao'>
                                <p>Criar Conta</p>
                        </button>
                        <CriarConta isOpen={AbrirModal} />
                </div>
            </div>
        </div>
    )
}

export default Cadastro