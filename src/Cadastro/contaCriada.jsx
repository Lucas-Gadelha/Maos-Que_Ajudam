import { Children } from 'react'
import '../App.css'
import '../fonts.css'
import confirma from '../icones/confirma.jpg'

const BackgroundStyle = {
    position: "fixed",
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgb(0,0,0, 0.7',
    zIndex: '1000'    
}

const ModalStyle = {

    position: "fixed",
    width: '30vw',
    height: '10vh',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    padding: '150px',
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',

}

const CriarConta = ({isOpen, setModalOpen, children}) => {
        if(isOpen) {
            return (
                <div style={BackgroundStyle}>
                    <div style={ModalStyle}>
                        <div className='fechar' onClick={setModalOpen}>x</div>
                        <div className='conta-criada'>
                            {children}
                            <button onClick={setModalOpen}>
                                <img src={confirma} alt="" className='confirma' />
                            </button>
                        </div>
                        
                    </div>
                </div>
            )

        }
        return null
        
}

export default CriarConta