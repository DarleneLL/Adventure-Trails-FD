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
// function CardTrilha() {
//  const { trilhas, setTrilhas } = useContext(TrilhasContext);
//  const [card, setCard] = useState(null);

//  useEffect(() => {
//   const obterCard = async () => {
//    try {
//     const resposta = await fetch("./trilha.json");
//     if (!resposta.ok) {
//      throw new Error("Erro ao obter os dados");
//     }
//     const dadosJson = await resposta.json();
//     setCard(dadosJson);
//    } catch (erro) {
//     console.error(erro);
//    }
//   };
//   obterCard();
//  }, []);

//  return (
//   <div className="card_container">
//    {card && (
//     <ul>
//      {card.map((item, index) => (
//       <li key={index} className="colunas">
//        <img width={200} src={item.urlImagem} alt="imagem trilha" />
//        <h2>Trilha: {item.nome}</h2>
//        <p>Cidade: {item.cidadeEstado}</p>

//        {/* Adicione aqui outras propriedades que deseja exibir */}
//       </li>
//      ))}
//     </ul>
//    )}
//   </div>
//  );
// }

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
