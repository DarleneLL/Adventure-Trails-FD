import * as PropTypes from "prop-types";
import "./style.css";

function CardTrilha({ dadosTrilha }) {
 return (
  <div className="card_container">
   <img
    className="card_imagem"
    width={200}
    src={dadosTrilha.urlImagem}
    alt="imagem trilha"
   />
   <h1>{dadosTrilha.nome}</h1>
   <span>{dadosTrilha.cidadeEstado}</span>
  </div>
 );
}

CardTrilha.propTypes = {
 dadosTrilha: PropTypes.exact({
  nome: PropTypes.string.isRequired,
  cidadeEstado: PropTypes.string,
  duracao: PropTypes.number,
  trajeto: PropTypes.number,
  dificuldade: PropTypes.string,
  tipoTrilha: PropTypes.string,
  criador: PropTypes.string,
  urlImagem: PropTypes.string
 })
};

export default CardTrilha;
