import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './cadastro.css'

// import '../App.css';
import '../fonts.css';
import Header from '../header/header';
import CriarConta from './contaCriada';

const Cadastro = () => {
  const [AbrirModal, setAbrirModal] = useState(false);
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const novoUsuario = { nome, login, telefone, endereco, email, senha };
    axios.post('http://localhost:3001/usuario/register', novoUsuario)
      .then(
        (response) => {
        alert(`Usuário ID ${response.data._id} adicionado!`);
        navigate('/');
      })
      .catch((error) => console.log(error));
  }

  console.log((event) => setEndereco(event.target.value))

  return (
    <div className="tudo">
      <Header />
      <div className="principal-cadastro">
        <div className="campos">
          <div className="cadastre-se">Cadastre-se</div> <br />
          <form onSubmit={handleSubmit}>
            <div className="campo-titulo">Nome Completo</div>
            <input
              className="input"
              name="nome"
              type="text"
              placeholder="Insira seu Nome Completo"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />{' '}
            <br /> <br />
            <input
              className="input"
              name="login"
              type="text"
              placeholder="Crie um nome para login"
              value={login}
              onChange={(event) => setLogin(event.target.value)}
            />{' '}
            <br /> <br />
            <input
              className="input"
              name="telefone"
              type="text"
              placeholder="Telefone"
              value={telefone}
              onChange={(event) => setTelefone(event.target.value)}
            />{' '}
            <br /> <br />
            <input
              className="input"
              name="endereco"
              type="text"
              placeholder="Endereço"
              value={endereco}
              onChange={(event) => setEndereco(event.target.value)}
            />{' '}
            <br /> <br />
            <div className="campo-titulo">E-mail</div>
            <input
              className="input"
              name="email"
              type="email"
              placeholder="Insira seu melhor e-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />{' '}
            <br /> <br />
            <div className="campo-titulo">Senha</div>
            <input
              className="input"
              name="senha"
              type="password"
              placeholder="Crie uma senha forte"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
            />{' '}
            <br /> <br />
            <div className="campo-titulo">Repita Senha</div>
            <input
              className="input"
              type="password"
              placeholder="Repita a senha"
            />{' '}
            <br />
            <button type="submit" className="botao">
              <p>Criar Conta</p>
            </button>
          </form>

          <CriarConta
            isOpen={AbrirModal}
            setModalOpen={() => setAbrirModal(!AbrirModal)}
          >
            Conta Criada com sucesso
          </CriarConta>{' '}
          <br />
          <Link to={'/login'}>
            {' '}
            <div className="sair">Sair</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;