import { Link } from "react-router-dom";

function Navbar() {
 return (
  <nav>
   <Link to="/">Home</Link>
   <Link to="/cadastro">Cadastro Trilhas</Link>
   <Link to="/lista">Trilhas</Link>
  </nav>
 );
}

export default Navbar;
