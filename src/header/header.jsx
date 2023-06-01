import logo from '../logo/logo.png'
import '../App.css'
import '../fonts.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <div className='header'>
                <div >
                    <img className='logo' src={logo} alt="" />
                </div>
                <div className='links'>
                    <div className='nome-links'>
                        <a href="">Inicio</a>
                    </div>
                    <div className='nome-links'>
                        <a href="">Doações</a>
                    </div>
                    <div className='nome-links'>
                        <a href="">Seja um voluntário</a>
                    </div>
                    <div className='nome-links'>
                        <a href="">Fale conosco</a>
                    </div>
                    <div className='nome-links'>
                        <a href="">Eventos</a>
                    </div>
                    <div className='nome-links'>
                        <Link to={'/homeAdmin'}>
                            <button className='botao-entrar'>
                                Entrar
                            </button>
                        
                        </Link>
                    </div>
                    
    
                </div>
            </div>
    )
}

export default Header