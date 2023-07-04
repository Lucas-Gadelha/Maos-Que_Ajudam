import { useState, useEffect } from 'react';
import axios from 'axios';
import facebook from '../icones/facebook.png';
import google from '../icones/google.png';
import apple from '../icones/apple.png';
import imagem from '../imagens/imagem.png';
import '../App.css';
import '../fonts.css';
import Header from '../header/header';
import { Link } from 'react-router-dom';

const Login = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [erroAutenticacao, setErroAutenticacao] = useState(false);


  //PRECISA DAR O NPM START NO CRUD
  useEffect(() => {
    axios
      .get('http://localhost:3001/usuario/listar')
      .then((response) => {
        setUsuarios(response.data);
        // console.log(response.data)
      })
      .catch((error) => console.log(error));
  }, []);

  // console.log(setUsuarios)

// useEffect(() => {
//     const usuariosCadastrados = [
//       { login: 'instituição', senha: '1234' },
//       { login: 'voluntario', senha: '0000' },
//     ];
//     setUsuarios(usuariosCadastrados);
//   }, []);

  const autenticar = (event) => {
    event.preventDefault();
    const usuarioAutenticado = usuarios.find(
      (usuario) =>  usuario.login === login && usuario.senha === senha
    );

    if (usuarioAutenticado) {
      // Autenticação bem-sucedida, redirecionar para a página principal
      setErroAutenticacao(false);
      if (usuarioAutenticado.login === 'Instituicao') {
        // Redirecionar o administrador para a página de administrador
        window.location.href = '/admin';
      } else {
        // Redirecionar o usuário comum para a página de usuário
        window.location.href = '/';
      }

      // Redirecionar para a página principal
      // window.location.href = '/';
    } else {
      // Autenticação falhou, exibir mensagem de erro
      setErroAutenticacao(true);
    }

  };
  

  return (
    <div className='tudo'>
      <Header />
      <div className='principal-login'>
        <div className='bloco-form'>
          <div className='img'>
            <img src={imagem} alt='' />
          </div>
          <div className='form'>
            <h1 className='centralizar'>Seja bem-vindo!</h1>
            <form onSubmit={autenticar}>
              <input
                className='input'
                type='email'
                placeholder='Insira seu e-mail'
                value={login}
                onChange={(event) => setLogin(event.target.value)}
              />
              <br />
              <input
                className='input'
                type='password'
                placeholder='Insira sua senha'
                value={senha}
                onChange={(event) => setSenha(event.target.value)}
              />
            </form>
            <div className='esqueceu-senha'>
              <a href=''>Esqueceu a senha?</a>
            </div>
            {erroAutenticacao && (
              <p className='erro-autenticacao'>Login ou senha incorretos.</p>
            )}
            <button className='botao' onClick={autenticar}>
              <p>Entrar</p>
            </button>
            <div className='cadastrese'>
              <p>
                Ainda não tem conta?{' '}
                <Link to={'/cadastro'}>
                  <a>Cadastre-se</a>
                </Link>{' '}
              </p>
            </div>
            <div className='entrecom'>
              <p>Entre com</p>
              <div className='todos-icones'>
                <button className='fundo-icone'>
                  <div>
                    <img className='icones' src={facebook} alt='Facebook' />
                  </div>
                </button>
                <button className='fundo-icone'>
                  <div>
                    <img className='icone-google' src={google} alt='Google' />
                  </div>
                </button>
                <button className='fundo-icone'>
                  <div>
                    <img className='icones' src={apple} alt='Apple' />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;