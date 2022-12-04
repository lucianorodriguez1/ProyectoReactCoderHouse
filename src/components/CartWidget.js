import { useContext } from "react"
import {Link} from "react-router-dom"
import { Badge } from "@mui/material"
import "../App.css"
import { CartContext } from "../context/CartContext"
const CartWidget=()=>{

    const myContext= useContext(CartContext)
    return(
        <>
        <Badge badgeContent={myContext.calcItemsQty()} color="primary">
            <Link to="/cart"><span class="material-symbols-outlined white">shopping_cart</span></Link>
        </Badge>
        </>
    )
}

export default CartWidget; 