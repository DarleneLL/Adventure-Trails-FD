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

   <div className="dadosTrilha">
    <h1>{dadosTrilha.nome}</h1>
    <p>
     {dadosTrilha.cidade} / {dadosTrilha.estado}
    </p>
    <p>{dadosTrilha.duracao} min</p>
    <p>{dadosTrilha.trajeto} km</p>
    <p>{dadosTrilha.dificuldade}</p>
    <p>{dadosTrilha.tipoTrilha}</p>
   </div>
  </div>
 );
}

CardTrilha.propTypes = {
 dadosTrilha: PropTypes.exact({
  nome: PropTypes.string.isRequired,
  cidade: PropTypes.string,
  estado: PropTypes.string,
  duracao: PropTypes.number,
  trajeto: PropTypes.number,
  dificuldade: PropTypes.string,
  tipoTrilha: PropTypes.string,
  criador: PropTypes.string,
  urlImagem: PropTypes.string
 })
};

export default CardTrilha;
