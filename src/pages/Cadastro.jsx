import Header from "../components/Header";
import { Button, TextField } from "@mui/material";

function Cadastro() {
 return (
  <div className="formCadastro">
   <h1>Cadastro de Nova Trilha</h1>;
   <TextField label="Nome da Trilha" />
   <TextField label="Duração Estimada (min)" />
   <TextField label="Trajeto (km)" />
   <TextField label="Cidade" />
   <TextField label="Estado" />
   <TextField label="Nome Completo Usuário" />
   <TextField label="Dificuldade" />
   <TextField label="Tipo de trilho" />
   <TextField label="URL imagem da trilha" />
   <Button
    sx={{ p: 1, my: 2, m: 2 }}
    color="success"
    variant="contained"
    size="small">
    Cadastrar
   </Button>
   <Button
    sx={{ p: 1, my: 2 }}
    color="success"
    variant="contained"
    size="small">
    Voltar
   </Button>
  </div>
 );
}

export default Cadastro;
