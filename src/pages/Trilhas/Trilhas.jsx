import CardTrilha from "../../components/CardTrilha";
import { useContext } from "react";
import { TrilhasContext } from "../../context/TrilhasContext";
import "./Trilhas.css";

function Trilhas() {
 const { trilhas, isLoading } = useContext(TrilhasContext);

 return (
  <div className="trilhasContainer">
   <h1 className="titulo">Explore trilhas incríveis</h1>
   {Array.isArray(trilhas) && !isLoading ? (
    trilhas.map((trilha, index) => (
     <CardTrilha dadosTrilha={trilha} key={index} />
    ))
   ) : (
    <span>Não há dados disponíveis</span>
   )}
  </div>
 );
}

export default Trilhas;
