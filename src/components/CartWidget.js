import { useContext } from "react"
import {Link} from "react-router-dom"
import { Badge } from "@mui/material"
import "../App.css"
import { CartContext } from "../context/CartContext"
const CartWidget=()=>{

    const test= useContext(CartContext)
    return(
        <>
        <Badge badgeContent={test.calcItemsQty()} color="primary">
            <Link to="/cart"><span class="material-symbols-outlined white">shopping_cart</span></Link>
        </Badge>
        </>
    )
}

export default CartWidget; 