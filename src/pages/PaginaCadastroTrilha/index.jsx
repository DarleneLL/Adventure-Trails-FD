import { Button } from "@mui/material";
import {
 ButtonsWrapper,
 FormComponent,
 InputWrapper,
 PageContainer,
 PageTitle
} from "./styles";

function PaginaCadastroTrilha() {
 return (
  <PageContainer>
   <PageTitle>Cadastro de Nova Trilha</PageTitle>
   <FormComponent>
    <InputWrapper>
     <label htmlFor="name">Nome da Trilha</label>
     <input type="text" name="name" />
    </InputWrapper>
    <InputWrapper>
     <label htmlFor="name"> Duração Estimada (min):</label>
     <input type="number" name="estimated-duration" />
    </InputWrapper>
    <InputWrapper>
     <label htmlFor="route-size">Trajeto (km):</label>
     <input type="number" name="route-size" />
    </InputWrapper>
    <InputWrapper>
     <label htmlFor="city">Cidade:</label>
     <input type="text" name="city" />
    </InputWrapper>
    <InputWrapper>
     <label htmlFor="state">Estado</label>
     <input type="text" name="state" />
    </InputWrapper>
    <InputWrapper>
     <label htmlFor="username">Nome Completo do Usuário:</label>
     <input type="text" name="username" />
    </InputWrapper>
    <InputWrapper>
     <label htmlFor="difficult">Dificuldade:</label>
     <select name="difficult">
      <option value="">Selecione...</option>
      <option value="facil">Fácil</option>
      <option value="medio">Médio</option>
      <option value="dificil">Difícil</option>
     </select>
    </InputWrapper>
    <InputWrapper>
     <label htmlFor="dificult">Tipo da Trilha:</label>
     <select name="tipoTrilha">
      <option value="">Selecione...</option>
      <option value="caminhada">Caminhada</option>
      <option value="corrida">Corrida</option>
      <option value="ciclismo">Ciclismo</option>
     </select>
    </InputWrapper>
    <InputWrapper>
     <label htmlFor="urlImage">Tipo da Trilha:</label>
     <input type="text" name="urlImage" />
    </InputWrapper>

    <ButtonsWrapper>
     <Button variant="outlined" type="button">
      Cadastrar
     </Button>
     <Button variant="outlined" type="button">
      Voltar para Home
     </Button>
    </ButtonsWrapper>
   </FormComponent>
  </PageContainer>
 );
}

export default PaginaCadastroTrilha;
