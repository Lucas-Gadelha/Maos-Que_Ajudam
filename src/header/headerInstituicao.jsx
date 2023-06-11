import logo from '../logo/logo.png'
import user from '../icones/user.png'

import '../App.css'
import '../fonts.css'
import { Link } from 'react-router-dom'

const HeaderInstituicao = () => {
    return (
        <div>

            <div className='header'>

                <div >
                    <img className='logo' src={logo} alt="" />
                </div>
                <div className='links'>
                    <div className='nome-links'>
                        <Link to={'/homeAdmin'}>Inicio</Link>
                    </div>

                    <div className='botao-doacoes'> 
                        <div className='conteudo-botao-doacoes'>
                            <div className='nome-links-doacoes'>
                                <Link>Doações</Link>
                            </div>
                            <div className='sub-doacoes'>
                                <Link to={'/verPedidos'} ><div className='links-doacoes'> Verificar Pedidos</div></Link>
                                
                                <Link to={'/verDoacoes'} ><div className='links-doacoes'>Ver Doações</div></Link>
                            </div>

                        </div>

                    </div>

                    <div className='nome-links'>
                        <Link to={'/voluntarioAdmin'} >Seja um voluntário</Link>
                    </div>
                    <div className='nome-links'>
                        <Link to={'/faleConosco'} >Fale conosco</Link>
                    </div>
                    <div className='nome-links'>
                        <Link className='link-eventos' href="">Eventos</Link>
                    </div>
                </div>
                <div className='usuario'>
                    <div className='botao-user' >
                        <img className='icone-user' src={user} alt='user' />

                        <div className='conta-active'>
                            <div className='links-active'> <p>Meu perfil</p></div>
                            <Link to={'/login'}>
                                <div className='links-active' >
                                    <p>Sair</p>
                                </div>
                            </Link> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderInstituicao