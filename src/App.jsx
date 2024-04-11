import CardTrilha from "./components/CardTrilha/index";
// import HookUseState from "./components/HookUseState";

function App() {
 
  // const listaTrilhas = [
  //   {
  //     nomeTrilha: "Trilha da Costa da Lagoa",
  //     cidade: "Florianópolis",
  //     estado: "SC",
  //     duracao: 120,
  //     trajeto: 4,
  //     dificuldade: "iniciante",
  //     tipo: "caminhada / trekking",
  //     nomeUsuario: "Guilherme",
  //     urlImagem: "https://images.pexels.com/photos/10031489/pexels-photo-10031489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   }
  // ]

  return (
    <>
      <CardTrilha />
    {/* {
      listaTrilhas.map((trilha, index) => (
        <CardTrilha dadosTrilha={trilha} key={index}/>
      ))
    } */}
    </>
    
  )
    
}

export default App
