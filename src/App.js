import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/home';
import './App.css';
import Doacao from './Doacoes/doacoes';
import Login from './login/login';
import Voluntario from './Voluntarios/voluntario';
import { Eventos } from './Eventos/eventos';
import HomeInstituicao from './Home/homeInstituicao';
import VoluntarioPaginaInstituicao from './Voluntarios/VoluntarioInstituicao/voluntarioInstituicao';
import Cadastro from './Cadastro/cadastro';




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

          <Route path='/login' element={<Login/>} />
          <Route path='cadastro' element={<Cadastro/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
