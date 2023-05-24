import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/home';
import './App.css';
import Doacao from './Doacoes/doacoes';
import Login from './login/login';




function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/doacoes' element={<Doacao/>} />

          <Route path='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
