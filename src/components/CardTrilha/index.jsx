import * as PropTypes from "prop-types";
import "./style.css";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
function CardTrilha() {
 const [card, setCard] = useState(null);

 useEffect(() => {
  const obterCard = async () => {
   try {
    const resposta = await fetch("./trilha.json");
    if (!resposta.ok) {
     throw new Error("Erro ao obter os dados");
    }
    const dadosJson = await resposta.json();
    setCard(dadosJson);
   } catch (erro) {
    console.error(erro);
   }
  };
  obterCard();
 }, []);

 return (
  <div className="card_container">
   {card && (
    <ul>
     {card.map((item, index) => (
      <li key={index} className="colunas">
       <img width={200} src={item.urlImagem} alt="imagem trilha" />
       <h2>Trilha: {item.nome}</h2>
       <p>Cidade: {item.cidadeEstado}</p>

       {/* Adicione aqui outras propriedades que deseja exibir */}
       <Button>Trilha</Button>
      </li>
     ))}
    </ul>
   )}
  </div>
 );
}

CardTrilha.propTypes = {
 dadosTrilha: PropTypes.exact({
  nomeTrilha: PropTypes.string.isRequired,
  cidade: PropTypes.string,
  estado: PropTypes.string,
  duracao: PropTypes.number,
  trajeto: PropTypes.number,
  dificuldade: PropTypes.string,
  tipo: PropTypes.string,
  nomeUsuario: PropTypes.string,
  urlImagem: PropTypes.string
 })
};

// prop-type

export default CardTrilha;
