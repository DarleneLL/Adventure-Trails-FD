import Navbar from "../Navbar";
import "./style.css";
import { Button } from "@mui/material";

function Header() {
 return (
  <header className="headerContainer">
   <div className="headerItens">
    <p>Adventure Trolls FD</p>
    <div className="menuHeader">
     <Navbar />
    </div>
   </div>
   <p className="textHeader">Que tal aproveitar um tempo com a natureza?</p>
   <p className="textBody">
    Junte-se à comunidade de entusiastas ao ar livre, compartilhe suas aventuras
    e inspire-se com as experiências de outros aventureiros. Prepare-se para
    explorar novos horizontes e se conectar com a natureza através do Adventure
    Trails!
   </p>
   <Button variant="contained" color="success" sx={{ ml: 50 }}>
    Explore Trilhas
   </Button>
  </header>
 );
}

export default Header;
