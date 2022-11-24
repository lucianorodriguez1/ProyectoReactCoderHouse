import {Link} from "react-router-dom"
import "../App.css"
const CartWidget=()=>{
    return(
        <>
        <Link to="/cart"><span class="material-symbols-outlined white">shopping_cart</span></Link>
        </>
    )
}

export default CartWidget; 