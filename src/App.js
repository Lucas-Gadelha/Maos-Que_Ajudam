import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/home';
import './App.css';
import Doacao from './Doacoes/doacoes';
import Login from './login/login';
import Contato from './Contato/contato';
import Voluntario from './Voluntarios/voluntario';
// import { Eventos } from './Eventos/eventos';
import Eventos from './Eventos/eventos';
import HomeInstituicao from './Home/homeInstituicao';
import VoluntarioPaginaInstituicao from './Voluntarios/Instituicao/voluntarioInstituicao';
import Cadastro from './Cadastro/cadastro';
import ListaPedidos from './Voluntarios/Instituicao/listadepedidos';
import VerDoacao from './Voluntarios/Instituicao/verDoacao';
// import DetalhesSolicitacao from './Doacoes/detalhes-solicitacao';
import Overlay from './Doacoes/doacoes-solicitar';
import Doar from './Doacoes/doar';
// import Solicitar from './Doacoes/solicitar-doacao';
// import DetalhesSolicitacao from './Doacoes/detalhes-solicitacao';
import OverlayVoluntario from './Voluntarios/overlay-voluntario';
import AdicionarPedido from './Voluntarios/Instituicao/adicionarPedido';
import DetalhesPedido from './Voluntarios/Instituicao/detalhesPedido';
import Adicionar from './Voluntarios/Instituicao/adicionar';
import ContatoInstituicao from './Contato Instituicao/contatoInstituicao';
import { EventosInstituicao } from './Eventos Instituicao/eventos';
import Perfil from './Perfil/Perfil';




function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/doacoes' element={<Doacao/>} />
          <Route path='/seja-um-voluntario' element={<Voluntario/>} />
          <Route path='/eventos' element={<Eventos/>} />
          <Route path='/faleConosco' element={<Contato/>} />
          <Route path='/perfil' element={<Perfil/>} />

          <Route path='/admin' element={<HomeInstituicao/>}/>
          <Route path='/voluntarioAdmin' element={<VoluntarioPaginaInstituicao/>} />
          <Route path='/verPedidos' element={<ListaPedidos/>} />
          <Route path='/verDoacoes' element={<VerDoacao/>} />
          <Route path='/adicionar' element={<AdicionarPedido/>} />
          <Route path='/adicionarAtividade' element={<Adicionar/>} />
          <Route path='/detalhesPedidoAdmin' element={<DetalhesPedido/>} />
          <Route path='/faleConoscoAdmin' element={<ContatoInstituicao/>} />
          <Route path='/eventosInstituicao' element={<EventosInstituicao/>} />
            
          <Route path='/detalhesPedidos' element={<Overlay/>} />
          <Route path='/doar' element={<Doar/>} />
          <Route path='/detalhes' element={<OverlayVoluntario/>} />

          <Route path='/login' element={<Login/>} />
          <Route path='cadastro' element={<Cadastro/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
