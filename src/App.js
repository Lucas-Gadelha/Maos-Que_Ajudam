import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/home';
import './App.css';
import Doacao from './Doacoes/doacoes';
import Login from './login/login';
import Voluntario from './Voluntarios/voluntario';
import { Eventos } from './Eventos/eventos';
import HomeInstituicao from './Home/homeInstituicao';
import VoluntarioPaginaInstituicao from './Voluntarios/Instituicao/voluntarioInstituicao';
import Cadastro from './Cadastro/cadastro';
import ListaPedidos from './Voluntarios/Instituicao/listadepedidos';
import VerDoacao from './Voluntarios/Instituicao/verDoacao';




function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/doacoes' element={<Doacao/>} />
          <Route path='/seja-um-voluntario' element={<Voluntario/>} />
          <Route path='/eventos' element={<Eventos/>} />

          <Route path='/homeAdmin' element={<HomeInstituicao/>}/>
          <Route path='/voluntarioAdmin' element={<VoluntarioPaginaInstituicao/>} />
          <Route path='/verPedidos' element={<ListaPedidos/>} />
          <Route path='/verDoacoes' element={<VerDoacao/>} />

          <Route path='/login' element={<Login/>} />
          <Route path='cadastro' element={<Cadastro/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
