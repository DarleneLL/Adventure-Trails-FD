import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { TrilhasContextProvider } from "./context/TrilhasContext";

function App() {
 return (
  <TrilhasContextProvider>
   <Navbar />
   <Outlet />
   <Footer />
  </TrilhasContextProvider>
 );
}

export default App;
