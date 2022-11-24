import CartWidget from "../components/CartWidget";
import '../App.css';
import { Link } from "react-router-dom"

const NavBar =()=>{
    return(

        <div className="navbar display-flex">
            <Link to="/" className="logo">Lucho Garden</Link>
            <ul className="display-flex navbar-ul">
                <li><Link to="/category/1">Notebooks</Link></li>
                <li><Link to="/category/2">Teclados</Link></li>
                <li><Link to="/category/3">Monitores</Link></li>
            </ul>
            <CartWidget className="icono-carrito"/>
        </div>
        
    )
    
}

export default NavBar;