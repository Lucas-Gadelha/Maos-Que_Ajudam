import '../App.css'
import '../fonts.css'

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
    width: '656px',
    height: '258px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    padding: '150px',
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',

}

const CriarConta = ({isOpen}) => {
        if(isOpen) {
            return (
                <div style={BackgroundStyle}>
                    <div style={ModalStyle}>Conta criada com sucesso</div>
                </div>
            )

        }
        return null
        
}

export default CriarConta