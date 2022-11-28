import { useContext, useState } from "react";
import ItemCount from "./ItemCount"
import {Link} from "react-router-dom"
import "../App.css"
import { CartContext } from "../context/CartContext";


const ItemDetail= ({item}) =>{
    
    const [itemCount, setItemCount]= useState(0);
    const {addToCart} = useContext(CartContext)


    const onAdd = (qty) => {
        alert("Has seleccionado " + qty + " productos.");
        setItemCount(qty);
        addToCart(item, qty);
    }

    return(
        <div>
            <div className="item-detail">
                <img src={item.imagen}/>
                <div className="item-detail-contenedor">
                    <h3>{item.nombre}</h3>
                    <p>{item.descripcion}</p>
                    <p>$ {item.precio}</p>
                    <p>Hay {item.stock} artículos disponibles</p>

                    {
                        itemCount === 0
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        : <Link to='/cart'><button className="button-checkout">Verificar</button></Link>
                    }

                </div>
            </div>
            
           
        </div>
    )
}

export default ItemDetail;