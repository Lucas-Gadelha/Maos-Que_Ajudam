import '../App.css'
import { useState } from 'react'
import {Visibility, VisibilityOff} from '@material-ui/icons'

const MostrarEsconderSenha = () => {
    const [mostrarSenha, setMostrarSenha] = useState(false)

    const AlternarVisibilidadeSenha = () => {
        setMostrarSenha(!mostrarSenha);
    }

    return (
        <form>
            <input className='input' type="email" placeholder='Insira seu e-mail' /> <br />
            <input className='input' type={mostrarSenha ? 'text' : 'password'} placeholder='Insira sua senha' />
            {mostrarSenha ? (
                <VisibilityOff onClick={AlternarVisibilidadeSenha} />
            ) : (
                <Visibility onClick={AlternarVisibilidadeSenha} />
            )}


        </form>
    )
}

export default MostrarEsconderSenha