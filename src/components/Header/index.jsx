import "./style.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Header() {
 const navigate = useNavigate();

 const handleNavigateTrilhas = () => {
  navigate("/trilhas");
 };
 return (
  <header className="headerContainer">
   <p className="textHeader">Que tal aproveitar um tempo com a natureza?</p>
   <p className="textBody">
    Junte-se à comunidade de entusiastas ao ar livre, compartilhe suas aventuras
    e inspire-se com as experiências de outros aventureiros. Prepare-se para
    explorar novos horizontes e se conectar com a natureza através do Adventure
    Trails!
   </p>
   <Button
    variant="contained"
    color="success"
    sx={{ ml: 50 }}
    onClick={handleNavigateTrilhas}>
    Explore Trilhas
   </Button>
  </header>
 );
}

export default Header;
