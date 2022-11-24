import { useContext, useState } from "react";
import ItemCount from "./ItemCount"
import {Link} from "react-router-dom"
import "../App.css"
import { CartContext } from "../context/CartContext";


const ItemDetail= ({item}) =>{
    
    const [itemCount, setItemCount]= useState(0);
    const {addToCart} = useContext(CartContext)


    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
        setItemCount(qty);
        addToCart(item);
    }

    return(
        <div>
            <div className="item-detail">
                <img src={item.imagen}/>
                <div>
                    <h3>{item.nombre}</h3>
                    <p>{item.descripcion}</p>
                    <p>{item.precio}</p>
                    <p>Hay {item.stock} artículos disponibles</p>

                    {
                        itemCount === 0
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        : <Link to='/cart'><button className="button-checkout">CheckOut</button></Link>
                    }

                </div>
            </div>
            
           
        </div>
    )
}

export default ItemDetail;