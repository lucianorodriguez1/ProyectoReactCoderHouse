import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../App.css"
import {serverTimestamp} from 'firebase/firestore';
import { createOrderInFirestore } from '../utils/firestoreFetch';


const Cart = () =>{

    const test = useContext(CartContext);

    const createOrder = () => {
        let order = {
          buyer: {
            name: 'Luciano Rodriguez',
            phone: '123456789',
            email: 'lucho@gmail.com'
          },
          items: test.cartList.map(item => ({
            id: item.idItem,
            price: item.precioItem,
            title: item.nombreItem,
            qty: item.qtyItem
          })),
          date: serverTimestamp(),
          total: test.calcTotal(),
          
        }
        createOrderInFirestore(order)
        .then(result => alert('Tu orden ha sido creada con éxito. '))
        .catch(error => console.log(error))

      test.removeList();
    }

        

    


    return(
        <>
        
            <h1 className="titulo-carrito">Tu Carrito</h1>
            <div className="d-flex">
                <button className="continua-comprando"><Link to="/">Continua Comprando</Link></button>

                {
                    (test.cartList.length > 0)
                    ? <button className="borrar-todo" onClick={test.removeList}>Borrar todo</button>
                    : <p>El carrito está vacío</p>
                }
            </div>

            {
                test.cartList.length > 0 
                && test.cartList.map(item => 
                    <div className="producto-en-carrito">
                        <img src={item.imgItem}/>
                        <div className="descripcion-en-carrito">
                            <h3>{item.nombreItem}</h3>
                            <p className="precio-en-carrito"> $ {item.precioItem} </p>
                            <p>{item.qtyItem} unidades</p>
                            <button className="borrar-producto" onClick={() => test.deleteItem(item.idItem)}>Borrar</button>
                        </div>
                        <div>
                            <p className="precio-total-por-producto"><span >Precio total por producto:</span> $ {test.calcTotalPorItem(item.idItem)}</p>
                        </div>
                        
                    </div>
                    )
                    
            }
                    <div className="resumen-de-compra">
                        <h3>Resumen del Pedido</h3>
                        <p>Total $ {test.calcTotal()}</p>
                        <button onClick={createOrder}>Comprar Ahora</button>
                    </div>
           
        </>
    )
} 

export default Cart;