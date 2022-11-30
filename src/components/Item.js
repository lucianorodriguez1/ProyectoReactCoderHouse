import { Link } from "react-router-dom";
import "../App.css"

const Item = ({id, nombre, precio, stock, imagen,descripcion}) =>{
    return(
        <div className="producto-container">
            <img src={imagen}/>
            <h3>{nombre}</h3>
            <p>$ {precio}</p>
            <Link to={`item/${id}`}><button>Ver Producto</button></Link>
        </div>
    )
}

export default Item;
