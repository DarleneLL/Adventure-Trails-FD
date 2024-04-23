import { Button } from "@mui/material";
import {
 ButtonsWrapper,
 FormComponent,
 InputWrapper,
 PageContainer,
 PageTitle
} from "./styles";
import { useForm } from "react-hook-form";

function PaginaCadastroTrilha() {
 const { register } = useForm();

 return (
  <PageContainer>
   <PageTitle>Cadastro de Nova Trilha</PageTitle>
   <FormComponent>
    <InputWrapper>
     <label htmlFor="name">Nome da Trilha</label>
     <input
      type="text"
      {...register("name", {
       required: "Campo obrigatório",
       maxLength: { value: 100, message: "máximo 100 caracteres" }
      })}
     />
    </InputWrapper>
    <InputWrapper>
     <label htmlFor="estimated-duration"> Duração Estimada (min):</label>
     <input
      type="number"
      {...register("estimated-duration", {
       required: "Campo obrigatório"
      })}
     />
    </InputWrapper>
    <InputWrapper>
     <label htmlFor="route-size">Trajeto (km):</label>
     <input
      type="number"
      {...register("route-size", {
       required: "Campo obrigatório"
      })}
     />
    </InputWrapper>
    <InputWrapper>
     <label htmlFor="city">Cidade:</label>
     <input
      type="text"
      {...register("city", {
       required: "Campo obrigatório",
       maxLength: { value: 60, message: "máximo 60 caracteres" }
      })}
     />
    </InputWrapper>
    <InputWrapper>
     <label htmlFor="state">Estado</label>
     <input
      type="text"
      {...register("text", {
       required: "Campo obrigatório",
       maxLength: { value: 2, message: "máximo 2 caracteres" }
      })}
     />
    </InputWrapper>
    <InputWrapper>
     <label htmlFor="username">Nome Completo do Usuário:</label>
     <input
      type="text"
      {...register("username", {
       required: "Campo obrigatório",
       maxLength: { value: 60, message: "máximo 60 caracteres" }
      })}
     />
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
     <input
      type="text"
      {...register("urlImage", {
       maxLength: { value: 300, message: "máximo 300 caracteres" }
      })}
     />
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
