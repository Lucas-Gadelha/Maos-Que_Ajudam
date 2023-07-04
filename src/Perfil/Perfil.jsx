import './Perfil.css'
import '../fonts.css'
import '../App.css'
import user from '../icones/user.png'

import HeaderLogado from '../header/headerLogado'

import { Box, Button, Container, TextField } from '@mui/material'

const Perfil = () => {
    return (
        <div className='tudo'>
            <HeaderLogado />
            <div className='blocos'>
                {/* <Container>
                    <Box> */}
                        <div className='bloco'>
                            <div className="circulo">
                                <img className='iconePerfil' src={user} alt='user' />
                            </div>
                            <div className="camposImagem">
                                <h2>IMAGEM DE PERFIL</h2>
                                <Button
                                    variant='contained'
                                    sx={{ backgroundColor: "#D9D9D9" }}>
                                    Selecionar imagem
                                </Button>
                                <Button
                                    variant='contained'
                                    sx={{ backgroundColor: "#50738F" }}>
                                    Salvar Alterações
                                </Button>
                            </div>
                        </div>
                    {/* </Box>
                </Container> */}

                <div className="Sobre">
                    <h3>SOBRE VOCÊ</h3>
                    <div className="blocoSobre">
                        <Container>
                            <Box>
                                <TextField
                                    required
                                    margin='normal'
                                    fullWidth

                                    label="Nome de usuário"
                                    id="usuario"
                                    name="usuario"
                                    type='name'
                                />
                                <TextField
                                    required
                                    margin='normal'
                                    // fullWidth

                                    label="Nome"
                                    id="nome"
                                    name="nome"
                                    type='name'
                                />
                                <TextField
                                    required
                                    margin='normal'
                                    // fullWidth

                                    label="Sobrenome"
                                    id="sobrenome"
                                    name="sobrenome"
                                    type='name'
                                />
                                <TextField
                                    required
                                    margin='normal'
                                    fullWidth

                                    label="Endereço"
                                    id="endereco"
                                    name="endereco"
                                    type='adress'
                                />
                                <TextField
                                    required
                                    margin='normal'
                                    fullWidth

                                    // label="Data de nascimento"
                                    id="data"
                                    name="data"
                                    type='date'
                                >Data de Nascimento
                                </TextField>
                                <Button variant="contained">
                                    Salvar Alterações
                                </Button>
                            </Box>
                        </Container>
                    </div>
                </div>

                <div className="Contato">
                    <h3>CONTATO</h3>
                    <div className="blocoContato">
                        <Container>
                            <Box>
                                <TextField
                                    required
                                    margin='normal'

                                    label="E-mail"
                                    id="email"
                                    name="email"
                                    type='email'
                                />
                                <TextField
                                    required
                                    margin='normal'
                                    // fullWidth

                                    label="Telefone"
                                    id="telefone"
                                    name="telefone"
                                    type='phone'
                                />
                                <Button
                                    fullWidth
                                    variant="contained">
                                    Salvar Alterações
                                </Button>
                            </Box>
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Perfil