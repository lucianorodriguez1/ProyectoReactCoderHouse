
import { useState, useEffect } from "react";
import "../App.css"

const ItemCount = ({stock = 0, initial = 1, onAdd})=>{
    
    const[count, setCount] = useState(0)

    useEffect(()=>{
        setCount(initial)
    },[])

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    
    const decrement = () => {
        if (count > initial+1) {
            setCount(count - 1);
        }
    }

    return(
        <div className="button-container">
            <button className="button-increment" onClick={increment}>+</button>
            <span className="contador">{count}</span>
            <button className="button-decrement" onClick={decrement}>-</button>
            {
                stock && count
                ? <button className="button-add" onClick={() => onAdd(count)}>Add to Cart</button>
                : <button className="button-add-disabled" disabled>Add to Cart</button>
            }
        </div>
    )
}

export default ItemCount;