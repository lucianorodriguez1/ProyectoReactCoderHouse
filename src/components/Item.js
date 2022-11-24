import { Link } from "react-router-dom";
import "../App.css"

const Item = ({id, nombre, precio, stock, imagen,descripcion}) =>{
    return(
        <div className="producto-container">
            <img src={imagen}/>
            <h3>{nombre}</h3>
            <p>$ {precio}</p>
            <button><Link to={`item/${id}`}>Ver Producto</Link></button>
            <button>Agregar al carrito</button>
        </div>
    )
}

export default Item;
