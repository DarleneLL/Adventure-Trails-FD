import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
 return (
  <nav className="Navbar">
   <p>Adventure Trolls FD</p>
   <div className="menuHeader">
    <Link to="/">Home</Link>
    <Link to="/cadastro">Cadastro Trilhas</Link>
    <Link to="/trilhas">Trilhas</Link>
   </div>
  </nav>
 );
}

export default Navbar;
