import { Button } from "@mui/material";
import {
 ButtonsWrapper,
 FormComponent,
 InputWrapper,
 PageContainer,
 PageTitle
} from "./styles";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { TrilhasContext } from "../../context/TrilhasContext";
import { useNavigate } from "react-router-dom";

function PaginaCadastroTrilha() {
 const { register, handleSubmit } = useForm();
 const { addTrail } = useContext(TrilhasContext);
 const navigate = useNavigate();

 function sendForm(formValue) {
  console.log(formValue);
  addTrail({
   ...formValue,
   duracao: Number(formValue.duracao),
   trajeto: Number(formValue.trajeto)
  });

  navigate("/trilhas");
 }

 return (
  <PageContainer>
   <PageTitle>Cadastro de Nova Trilha</PageTitle>
   <FormComponent onSubmit={handleSubmit(sendForm)}>
    <InputWrapper>
     <label htmlFor="nome">Nome da Trilha</label>
     <input
      type="text"
      {...register("nome", {
       required: "Campo obrigatório",
       maxLength: { value: 100, message: "máximo 100 caracteres" }
      })}
     />
    </InputWrapper>
    <InputWrapper>
     <label htmlFor="duracao"> Duração Estimada (min):</label>
     <input
      type="number"
      {...register("duracao", {
       required: "Campo obrigatório"
      })}
     />
    </InputWrapper>
    <InputWrapper>
     <label htmlFor="trajeto">Trajeto (km):</label>
     <input
      type="number"
      {...register("trajeto", {
       required: "Campo obrigatório"
      })}
     />
    </InputWrapper>
    <InputWrapper>
     <label htmlFor="cidade">Cidade:</label>
     <input
      type="text"
      {...register("cidade", {
       required: "Campo obrigatório",
       maxLength: { value: 60, message: "máximo 60 caracteres" }
      })}
     />
    </InputWrapper>
    <InputWrapper>
     <label htmlFor="estado">Estado</label>
     <input
      type="text"
      {...register("estado", {
       required: "Campo obrigatório",
       maxLength: { value: 2, message: "máximo 2 caracteres" }
      })}
     />
    </InputWrapper>
    <InputWrapper>
     <label htmlFor="criador">Nome Completo do Usuário:</label>
     <input
      type="text"
      {...register("criador", {
       required: "Campo obrigatório",
       maxLength: { value: 60, message: "máximo 60 caracteres" }
      })}
     />
    </InputWrapper>
    <InputWrapper>
     <label htmlFor="dificuldade">Dificuldade:</label>
     <select
      {...register("dificuldade", {
       required: "Campo obrigatório"
      })}>
      <option value="">Selecione...</option>
      <option value="facil">Fácil</option>
      <option value="medio">Médio</option>
      <option value="dificil">Difícil</option>
     </select>
    </InputWrapper>
    <InputWrapper>
     <label htmlFor="tipoTrilha">Tipo da Trilha:</label>
     <select
      {...register("tipoTrilha", {
       required: "Campo obrigatório"
      })}>
      <option value="">Selecione...</option>
      <option value="caminhada">Caminhada</option>
      <option value="corrida">Corrida</option>
      <option value="ciclismo">Ciclismo</option>
     </select>
    </InputWrapper>
    <InputWrapper>
     <label htmlFor="urlImagem">Tipo da Trilha:</label>
     <input
      type="text"
      {...register("urlImagem", {
       maxLength: { value: 300, message: "máximo 300 caracteres" }
      })}
     />
    </InputWrapper>

    <ButtonsWrapper>
     <Button variant="outlined" type="submit">
      Cadastrar
     </Button>
     <Button variant="outlined" type="submit">
      Voltar para Home
     </Button>
    </ButtonsWrapper>
   </FormComponent>
  </PageContainer>
 );
}

export default PaginaCadastroTrilha;
