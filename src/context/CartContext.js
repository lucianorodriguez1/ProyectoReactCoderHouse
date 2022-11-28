import { createContext, useState } from "react";

export const CartContext = createContext()

const CartContextProvider = ({children})=>{


    const [cartList, setCartList] =useState([])


    const addToCart = (item, qty) => {
        let found = cartList.find(product => product.idItem === item.id);
        if ( found === undefined) {
            setCartList([
                ...cartList,
                {
                    idItem: item.id,
                    imgItem: item.imagen,
                    nombreItem: item.nombre,
                    precioItem: item.precio,
                    qtyItem: qty
                }
            ]);
        } else {
            found.qtyItem += qty;
        }
    }


    const removeList = () => {
        setCartList([]);
    }

    const deleteItem = (id) => {
        let result = cartList.filter(item => item.idItem != id);
        setCartList(result);
    }

    const calcTotalPorItem = (idItem) => {
        let index = cartList.map (item => item.idItem).indexOf(idItem);
        return cartList[index].costItem * cartList[index].qtyItem;
    }

    const calcSubTotal = () => {
        let totalPerItem = cartList.map(item => calcTotalPorItem(item.idItem));
        return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }


    const calcTotal = () => {
        return calcSubTotal();
    }


    const calcItemsQty = () => {
        let qtys = cartList.map(item => item.qtyItem);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    return(
        <CartContext.Provider value={{
            cartList, 
            addToCart, 
            removeList, 
            deleteItem,
            calcTotalPorItem, 
            calcSubTotal, 
            calcTotal,
            calcItemsQty,
            }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;