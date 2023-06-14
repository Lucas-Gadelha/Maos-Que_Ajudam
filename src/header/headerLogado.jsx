import logo from '../logo/logo.png'
import user from '../icones/user.png'

import '../App.css'
import '../fonts.css'
import { Link } from 'react-router-dom'

const HeaderLogado = () => {
    return (
        <div>

            <div className='header'>

                <div >
                    <img className='logo' src={logo} alt="" />
                </div>
                <div className='links'>
                    <div className='nome-links'>
                        <Link to={'/'}>Inicio</Link>
                    </div>
                    <div className='nome-links'>
                        <Link to={'/doacoes'} >Doações</Link>
                    </div>
                    <div className='nome-links'>
                        <Link to={'/seja-um-voluntario'}>Seja um voluntário</Link>
                    </div>
                    <div className='nome-links'>
                        <Link to={'/faleConosco'}>Fale conosco</Link>
                    </div>
                    <div className='nome-links'>
                        <Link to={'/eventos'} className='link-eventos' href="">Eventos</Link>
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

export default HeaderLogado