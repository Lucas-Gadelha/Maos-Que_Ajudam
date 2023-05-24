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
                        <Link href="">Seja um voluntário</Link>
                    </div>
                    <div className='nome-links'>
                        <Link href="">Fale conosco</Link>
                    </div>
                    <div className='nome-links'>
                        <Link clasName='link-eventos' href="">Eventos</Link>
                    </div>
                    {/* <div className='usuario'>
                        <button className='botao-user' >
                            <img className='icone-user' src={user} alt='user' />
                        </button>
                    </div> */}
                </div>
                <div className='usuario'>
                    <div className='botao-user' >
                        <img className='icone-user' src={user} alt='user' />

                        <div className='conta-active'>
                            <div className='links-active'> <p>Meu perfil</p></div>
                            <div className='links-active' >
                                <Link to={'/login'}><p>Sair</p></Link> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderLogado