import Navbar from "../Navbar";
import "./style.css";

function Header() {
 return (
  <header className="header">
   <p>Adventure Trolls FD</p>
   <div className="menuHeader">
    <Navbar />
   </div>
  </header>
 );
}

export default Header;
