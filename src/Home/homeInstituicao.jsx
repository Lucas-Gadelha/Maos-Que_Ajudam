import './home.css'
import '../fonts.css'
import imagem1 from '../imagens/imagem1.png'
import HeaderInstituicao from '../header/headerInstituicao'

const HomeInstituicao = () => {
    return (
        <div className='toda-pagina'>
            <HeaderInstituicao/>
            <div className='imagem-fundo'>
                <div className='overlay-amarelo'>
                    <div className='texto'>
                        <h1>Olá, bem-vindo de volta!</h1>
                        <h1>Quem vamos ajudar hoje?</h1>
                    </div>
                </div>


            </div>
            <div className='sobre-nos'>
                <div className='conteudo-texto'>
                    <div className='texto-sobre'>
                        <h1>Sobre nós</h1>
                        <p>O Projeto Mãos Que Ajudam é um projeto social que visa ajudar pessoas carentes de vestuário na cidade de Quixadá, Ceará.</p>
                        <p>Trazemos conosco o objetivo de agregar voluntários para que possamos nos fortalecer e conseguir ajudar famílias da cidade de Quixadá.</p>
                        <p>Nossa rede de apoio almeja estabelecer laços entre doadores, voluntários (para entrega de doações) e a quem se destina as doações (beneficiados).</p>
                    </div>
                    <div className='imagem1'>
                        <img src={imagem1} alt="imagem da pagina sobre nos" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomeInstituicao