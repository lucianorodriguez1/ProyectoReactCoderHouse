import CartWidget from "../components/CartWidget";
import '../App.css';

const NavBar =()=>{
    return(

        <div className="navbar display-flex">
            <a className="logo">Lucho Garden</a>
            <ul className="display-flex navbar-ul">
                <li><a>Notebooks</a></li>
                <li><a>Teclados</a></li>
                <li><a>Monitores</a></li>
            </ul>
            <CartWidget className="icono-carrito"/>
        </div>
        
    )
    
}

export default NavBar;