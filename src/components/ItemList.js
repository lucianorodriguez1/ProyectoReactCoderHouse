import Item from "./Item"
import "../App.css"

const ItemList = ({items}) =>{
    return(
        <div className="productos-container">
        {
           items.map(item => 
                <Item 
                key={item.id}
                id={item.id}
                nombre={item.nombre}
                precio={item.precio}
                imagen={item.imagen}
                stock={item.stock} />)
             
        }
        </div>
    )
}



export default ItemList;