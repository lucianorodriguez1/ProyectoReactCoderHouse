import { useEffect, useState } from "react";
import { Productos } from "../utils/Productos";
import ItemList from "../components/ItemList";
import CustomFetch from "../utils/CustomFetch";
import { useParams } from "react-router-dom";

const ItemListContainer = () =>{
 

    const [datos, setDatos] = useState([])
    const{idCategory} = useParams()

    
    useEffect(()=>{
        if(idCategory == undefined){
            CustomFetch(2000,Productos)
            .then(response => setDatos(response))
            .catch(err => console.log(err))
        }else{
            CustomFetch(2000,Productos.filter((item=> item.categoryId == idCategory)))
            .then(response => setDatos(response))
            .catch(err => console.log(err))
        }
    },[idCategory])

    
    return(
        <>
        <h1 className="titulo-principal">Productos</h1>
        <ItemList items={datos}/>
        </>
    )
}

export default ItemListContainer;