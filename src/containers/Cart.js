import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () =>{

    const {cartList} = useContext(CartContext)


    return(
        <>
            {
                cartList.length === 0 
                ?<li>No hay productoss en el carrito</li>
                :cartList.map(item=> <li>{item.nombre}</li>)
            }
        </>
    )
}

export default Cart;